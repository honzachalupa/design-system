import { cleanObject, IAbstractObject } from "@honzachalupa/utils";
import { Analytics as IAnalytics } from "firebase/analytics";
import { FirebaseOptions, getApps, initializeApp } from "firebase/app";
import { Auth as IAuth, User } from "firebase/auth";
import {
    CollectionReference,
    DocumentSnapshot,
    Firestore as IFirestore,
    QuerySnapshot,
} from "firebase/firestore";
import { FirebaseStorage as IStorage } from "firebase/storage";
import moment from "moment";
import { Analytics, Auth, Firestore, Storage } from "./Firebase";
import { TQuery } from "./types";

export interface ILoggerProps {
    code: "EXCEPTION";
    scope: string;
    error?: Error;
    message?: string;
    data?: IAbstractObject;
}

type TLogger = (props: ILoggerProps) => void;

export class FirebaseConnector {
    public firestore: IFirestore;
    private auth: IAuth;
    private storage: IStorage;
    private analytics: IAnalytics | undefined;
    private log?: TLogger;

    constructor(credentials: FirebaseOptions, logger?: TLogger) {
        const apps = getApps();
        const app = apps?.[0] || initializeApp(credentials);

        console.log({ app, apps });

        this.firestore = Firestore.getFirestore(app);
        this.auth = Auth.getAuth(app);
        this.storage = Storage.getStorage(app);

        if (typeof window !== "undefined") {
            this.analytics = Analytics.getAnalytics(app);
        }

        this.log = logger;
    }

    private getQuery = (
        collection: CollectionReference,
        { where, orderBy, limit }: TQuery = {},
    ) =>
        Firestore.query(
            collection,
            ...(where?.map((x) => Firestore.where(...x)) || []),
            ...(orderBy?.map((x) => Firestore.orderBy(...x)) || []),
            Firestore.limit(limit || 10000),
        );

    public Database = {
        create: (
            collection: CollectionReference,
            data: IAbstractObject,
            timestampKey?: string,
        ) =>
            Firestore.addDoc(collection, {
                ...cleanObject(data),
                [timestampKey || "createdDate"]: moment().toString(),
            }),

        update: (
            collection: CollectionReference,
            id: string | number,
            data: IAbstractObject,
        ) =>
            Firestore.updateDoc(Firestore.doc(collection, id.toString()), {
                ...cleanObject(data),
                updatedDate: moment().toString(),
            }),

        set: (
            collection: CollectionReference,
            id: string | number,
            data: IAbstractObject,
        ) =>
            Firestore.setDoc(Firestore.doc(collection, id.toString()), {
                ...cleanObject(data),
                createdDate: moment().toString(),
            }),

        get: (collection: CollectionReference, id: string | number) =>
            Firestore.getDoc(Firestore.doc(collection, id.toString())),

        getAsync: (
            collection: CollectionReference,
            id: string | number,
            callback: (doc: DocumentSnapshot) => void,
            callbackError?: (error: Error) => void,
        ) =>
            Firestore.onSnapshot(
                Firestore.doc(collection, id.toString()),
                (doc) => {
                    if (doc.exists()) {
                        callback(doc);

                        return;
                    } else if (callbackError) {
                        const error = new Error(
                            `Document with id ${id} doesn't exists.`,
                        );

                        this.log?.({
                            code: "EXCEPTION",
                            scope: this.constructor.name,
                            error,
                            data: {
                                id,
                            },
                        });

                        callbackError(error);
                    }
                },
                callbackError,
            ),

        search: (collection: CollectionReference, query?: TQuery) =>
            Firestore.getDocs(this.getQuery(collection, query)),

        searchAsync: (
            collection: CollectionReference,
            callback: (docs: QuerySnapshot) => void,
            query?: TQuery,
        ) => Firestore.onSnapshot(this.getQuery(collection, query), callback),
    };

    public Authentication = {
        getCurrentUser: () => this.auth.currentUser,

        onAuthStateChanged: (callback: (user: User | null) => void) =>
            Auth.onAuthStateChanged(this.auth, callback),

        createUserWithEmailAndPassword: (
            emailAddress: string,
            password: string,
        ) =>
            Auth.createUserWithEmailAndPassword(
                this.auth,
                emailAddress,
                password,
            ),

        signInWithEmailAndPassword: (emailAddress: string, password: string) =>
            Auth.signInWithEmailAndPassword(this.auth, emailAddress, password),

        sendPasswordResetEmail: (emailAddress: string) =>
            Auth.sendPasswordResetEmail(this.auth, emailAddress),

        signOut: () => Auth.signOut(this.auth),
    };

    public Storage = {
        search: (path: string) =>
            Storage.listAll(Storage.ref(this.storage, path))
                .then((res) => res.items.map(({ fullPath }) => fullPath))
                .catch((error) => {
                    this.log?.({
                        code: "EXCEPTION",
                        scope: this.constructor.name,
                        error,
                        data: {
                            path,
                        },
                    });

                    return [];
                }),

        upload: (fileRef: string, image: Blob) =>
            Storage.uploadBytes(Storage.ref(this.storage, fileRef), image),

        download: (path: string) =>
            Storage.getDownloadURL(Storage.ref(this.storage, path)),
    };

    public Analytics = {
        setUserId: (id: string) => () =>
            this.analytics
                ? Analytics.setUserId(this.analytics, id)
                : new Promise((_, reject) => {
                      reject(
                          new Error(
                              "Analytics are available on client-side only.",
                          ),
                      );
                  }),

        setCurrentScreen: (routeId: string) =>
            this.analytics
                ? Analytics.setCurrentScreen(this.analytics, routeId)
                : new Promise((_, reject) => {
                      reject(
                          new Error(
                              "Analytics are available on client-side only.",
                          ),
                      );
                  }),
    };
}

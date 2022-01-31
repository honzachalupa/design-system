import { cleanObject, IAbstractObject } from "@honzachalupa/utils";
import { Analytics as IAnalytics } from "firebase/analytics";
import { FirebaseOptions, initializeApp } from "firebase/app";
import { Auth as IAuth, User } from "firebase/auth";
import {
    CollectionReference,
    DocumentSnapshot,
    Firestore as IFirestore,
    QuerySnapshot,
} from "firebase/firestore";
import { FirebaseStorage as IStorage } from "firebase/storage";
import { Analytics, Auth, Firestore, Storage } from "./Firebase";
import { TQuery } from "./types";

export class FirebaseConnector {
    private queryConstructor = Firestore.query;
    private whereConstructor = Firestore.where;
    private orderByConstructor = Firestore.orderBy;
    private limitConstructor = Firestore.limit;
    public firestore: IFirestore;
    private auth: IAuth;
    private storage: IStorage;
    private analytics: IAnalytics;
    private log?: (props: {
        code: "EXCEPTION";
        message: string;
        data?: IAbstractObject;
    }) => void;

    constructor(
        credentials: FirebaseOptions,
        logger?: (props: {
            code: "EXCEPTION";
            message: string;
            data?: IAbstractObject;
        }) => void,
    ) {
        const app = initializeApp(credentials);

        this.firestore = Firestore.getFirestore(app);
        this.auth = Auth.getAuth(app);
        this.storage = Storage.getStorage(app);
        this.analytics = Analytics.getAnalytics(app);
        this.log = logger;
    }

    private getQuery = (
        collection: CollectionReference,
        { where, orderBy, limit }: TQuery = {},
    ) =>
        this.queryConstructor(
            collection,
            ...(where?.map((x) => this.whereConstructor(...x)) || []),
            ...(orderBy?.map((x) => this.orderByConstructor(...x)) || []),
            this.limitConstructor(limit || 10000),
        );

    public Database = {
        create: (
            collection: CollectionReference,
            data: IAbstractObject,
            timestampKey?: string,
        ) =>
            Firestore.addDoc(collection, {
                ...cleanObject(data),
                [timestampKey || "createdDate"]: Firestore.Timestamp.now(),
            }),

        update: (
            collection: CollectionReference,
            id: string | number,
            data: IAbstractObject,
        ) =>
            Firestore.updateDoc(Firestore.doc(collection, id.toString()), {
                ...cleanObject(data),
                updatedDate: Firestore.Timestamp.now(),
            }),

        set: (
            collection: CollectionReference,
            id: string | number,
            data: IAbstractObject,
        ) =>
            Firestore.setDoc(Firestore.doc(collection, id.toString()), {
                ...cleanObject(data),
                createdDate: Firestore.Timestamp.now(),
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
                        const errorMessage = `Document with id ${id} doesn't exists.`;

                        this.log?.({
                            code: "EXCEPTION",
                            message: errorMessage,
                            data: {
                                id,
                            },
                        });

                        callbackError(new Error(errorMessage));
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
                        message: error,
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
        setUserId: (id: string) => Analytics.setUserId(this.analytics, id),

        setCurrentScreen: (routeId: string) =>
            Analytics.setCurrentScreen(this.analytics, routeId),
    };
}

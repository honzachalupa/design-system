import {
    CollectionReference,
    limit,
    orderBy,
    QuerySnapshot,
    where,
} from "@firebase/firestore";
import { getAnalytics, setCurrentScreen, setUserId } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    User,
} from "firebase/auth";
import {
    addDoc,
    collection,
    doc,
    DocumentSnapshot,
    getDoc,
    getDocs,
    getFirestore,
    onSnapshot,
    query,
    setDoc,
    Timestamp as FirestoreTimestamp,
    updateDoc,
} from "firebase/firestore";
import {
    getDownloadURL,
    getStorage,
    listAll,
    ref,
    uploadBytes,
} from "firebase/storage";
import { IAbstractObject } from "../types";
import { cleanObject } from "./app";
import { TQuery } from "./firebase.types";

// initializeApp(credentials);

const firestore = getFirestore();
const auth = getAuth();
const storage = getStorage();
let analytics: any;

if (typeof window !== "undefined") {
    analytics = getAnalytics();
}

export const Collections = {
    translations: collection(firestore, "config_translations"),
    templates: collection(firestore, "config_templates"),
    users: collection(firestore, "users"),
    events: collection(firestore, "events"),
    payments: collection(firestore, "payments"),
    invoices: collection(firestore, "invoices"),
    logs: collection(firestore, "logs"),
    mailQueue: collection(firestore, "mail-queue"),
    messagingTokens: collection(firestore, "messaging-tokens"),
};

export const Timestamp = FirestoreTimestamp;

const queryConstructor = query;
const whereConstructor = where;
const orderByConstructor = orderBy;
const limitConstructor = limit;

const getQuery = (
    collection: CollectionReference,
    { where, orderBy, limit }: TQuery = {},
) =>
    queryConstructor(
        collection,
        ...(where?.map((x) => whereConstructor(...x)) || []),
        ...(orderBy?.map((x) => orderByConstructor(...x)) || []),
        limitConstructor(limit || 10000),
    );

export const Database = {
    create: (
        collection: CollectionReference,
        data: IAbstractObject,
        timestampKey?: string,
    ) =>
        addDoc(collection, {
            ...cleanObject(data),
            [timestampKey || "createdDate"]: Timestamp.now(),
        }),

    update: (
        collection: CollectionReference,
        id: string | number,
        data: IAbstractObject,
    ) =>
        updateDoc(doc(collection, id.toString()), {
            ...cleanObject(data),
            updatedDate: Timestamp.now(),
        }),

    set: (
        collection: CollectionReference,
        id: string | number,
        data: IAbstractObject,
    ) =>
        setDoc(doc(collection, id.toString()), {
            ...cleanObject(data),
            createdDate: Timestamp.now(),
        }),

    get: (collection: CollectionReference, id: string | number) =>
        getDoc(doc(collection, id.toString())),

    getAsync: (
        collection: CollectionReference,
        id: string | number,
        callback: (doc: DocumentSnapshot) => void,
        callbackError?: (error: Error) => void,
    ) =>
        onSnapshot(
            doc(collection, id.toString()),
            (doc) => {
                if (doc.exists()) {
                    callback(doc);

                    return;
                } else if (callbackError) {
                    const errorMessage = `Document with id ${id} doesn't exists.`;

                    console.error(errorMessage);

                    callbackError(new Error(errorMessage));
                }
            },
            callbackError,
        ),

    search: (collection: CollectionReference, query?: TQuery) =>
        getDocs(getQuery(collection, query)),

    searchAsync: (
        collection: CollectionReference,
        callback: (docs: QuerySnapshot) => void,
        query?: TQuery,
    ) => onSnapshot(getQuery(collection, query), callback),
};

export const Authentication = {
    getCurrentUser: () => auth.currentUser,

    onAuthStateChanged: (callback: (user: User | null) => void) =>
        onAuthStateChanged(auth, callback),

    createUserWithEmailAndPassword: (emailAddress: string, password: string) =>
        createUserWithEmailAndPassword(auth, emailAddress, password),

    signInWithEmailAndPassword: (emailAddress: string, password: string) =>
        signInWithEmailAndPassword(auth, emailAddress, password),

    sendPasswordResetEmail: (emailAddress: string) =>
        sendPasswordResetEmail(auth, emailAddress),

    signOut: () => signOut(auth),
};

export const Storage = {
    search: (path: string) =>
        listAll(ref(storage, path))
            .then((res) => res.items.map(({ fullPath }) => fullPath))
            .catch((error) => {
                console.error(error);

                return [];
            }),

    upload: (fileRef: string, image: Blob) =>
        uploadBytes(ref(storage, fileRef), image),

    download: (path: string) => getDownloadURL(ref(storage, path)),
};

export const Analytics = {
    setUserId: (id: string) => setUserId(analytics, id),

    setCurrentScreen: (routeId: string) => setCurrentScreen(analytics, routeId),
};

export const dateToTimestamp = (date: Date) => Timestamp.fromDate(date);

export const convertDocToItem = (doc: DocumentSnapshot) => ({
    id: doc.id,
    ...doc.data(),
});

export const convertDocsToItems = (docs: QuerySnapshot<unknown>) => {
    const items: any[] = [];

    docs.forEach((doc) => {
        const data = doc.data();

        items.push({
            id: doc.id,
            ...(data as object),
        });
    });

    return items;
};

export { where, orderBy };

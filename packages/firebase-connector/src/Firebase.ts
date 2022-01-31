import {
    CollectionReference,
    limit,
    orderBy,
    QuerySnapshot,
    Timestamp,
    where,
} from "@firebase/firestore";
import { getAnalytics, setCurrentScreen, setUserId } from "firebase/analytics";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
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
    updateDoc,
} from "firebase/firestore";
import {
    getDownloadURL,
    getStorage,
    listAll,
    ref,
    uploadBytes,
} from "firebase/storage";

export const Firestore = {
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
    updateDoc,
    CollectionReference,
    limit,
    orderBy,
    QuerySnapshot,
    where,
    Timestamp,
};

export const Auth = {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
};

export const Storage = {
    getDownloadURL,
    getStorage,
    listAll,
    ref,
    uploadBytes,
};

export const Analytics = {
    getAnalytics,
    setCurrentScreen,
    setUserId,
};

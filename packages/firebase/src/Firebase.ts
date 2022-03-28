import { getAnalytics, setCurrentScreen, setUserId } from "firebase/analytics";
import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    getRedirectResult,
    GoogleAuthProvider,
    OAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    signOut,
} from "firebase/auth";
import {
    addDoc,
    collection,
    CollectionReference,
    doc,
    DocumentSnapshot,
    getDoc,
    getDocs,
    getFirestore,
    limit,
    onSnapshot,
    orderBy,
    query,
    QuerySnapshot,
    setDoc,
    updateDoc,
    where,
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
};

export const Auth = {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult,
    signOut,
    OAuthProvider,
    GoogleAuthProvider,
    FacebookAuthProvider,
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

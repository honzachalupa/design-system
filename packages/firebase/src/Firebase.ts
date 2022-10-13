import {
    getAnalytics,
    setCurrentScreen,
    setUserId,
    setUserProperties,
} from "firebase/analytics";
import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    getRedirectResult,
    GoogleAuthProvider,
    OAuthProvider,
    onAuthStateChanged,
    reauthenticateWithCredential,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    updatePassword,
} from "firebase/auth";
import {
    addDoc,
    collection,
    CollectionReference,
    deleteDoc,
    doc,
    DocumentSnapshot,
    endAt,
    getDoc,
    getDocs,
    getFirestore,
    limit,
    onSnapshot,
    orderBy,
    query,
    QuerySnapshot,
    setDoc,
    startAt,
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
    deleteDoc,
    updateDoc,
    CollectionReference,
    limit,
    orderBy,
    QuerySnapshot,
    where,
    startAt,
    endAt,
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
    updatePassword,
    reauthenticateWithCredential,
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
    setUserProperties,
};

// import { initializeApp } from "firebase/app";
// import {
//     createUserWithEmailAndPassword,
//     getAuth,
//     signInWithEmailAndPassword,
//     signOut,
// } from 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB_u3YKmry7bjGqZD10u41nK9EHkzjdGWQ",
    authDomain: "todos-1a555.firebaseapp.com",
    projectId: "todos-1a555",
    storageBucket: "todos-1a555.appspot.com",
    messagingSenderId:  "393271069355",
    appId: "1:393271069355:web:eeb4728f7986da506cc5ee",
    databaseURL: "https://todos-1a555-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

export const firebaseDb = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebaseDb.database().ref();


// const firebaseApp = initializeApp(firebaseConfig);
// const firebaseAuth = getAuth(firebaseApp);

// export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password);
//
// export const logIn = async (email, password) =>await signInWithEmailAndPassword(firebaseAuth, email, password);
//
// export const logOut = async () => await signOut(firebaseAuth);

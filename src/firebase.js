import { initializeApp } from "firebase/app";

const firebaseConfig = {
 apiKey: "AIzaSyB_u3YKmry7bjGqZD10u41nK9EHkzjdGWQ",
 authDomain: "todos-1a555.firebaseapp.com",
 projectId: "todos-1a555",
 storageBucket: "todos-1a555.appspot.com",
 messagingSenderId:  "393271069355",
 appId: "1:393271069355:web:eeb4728f7986da506cc5ee",
 databaseURL: "https://todos-1a555-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
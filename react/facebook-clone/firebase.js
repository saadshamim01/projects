// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/storage";

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC84lc6vjB0ksmWagzP-pgFeioTwqSTxbI",
  authDomain: "facebook-clone-1e52b.firebaseapp.com",
  projectId: "facebook-clone-1e52b",
  storageBucket: "facebook-clone-1e52b.appspot.com",
  messagingSenderId: "244880241748",
  appId: "1:244880241748:web:fd7237f5dcf5d56ab4e9c1",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };

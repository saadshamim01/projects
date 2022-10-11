// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjeWq-vKdnOuEe4W66pZN2JOHopk4Cd-s",
  authDomain: "discord-clone-d9348.firebaseapp.com",
  projectId: "discord-clone-d9348",
  storageBucket: "discord-clone-d9348.appspot.com",
  messagingSenderId: "368041587928",
  appId: "1:368041587928:web:29794a91e3b040cf2a13ad",
  measurementId: "G-DG5V7KF6HJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

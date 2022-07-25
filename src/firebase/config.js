import firebase from "firebase/compat/app";

import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDMTRK-cLuJStEZLaJApwC9FNf2kXG6nM",
  authDomain: "image-gallery-f77c6.firebaseapp.com",
  projectId: "image-gallery-f77c6",
  storageBucket: "image-gallery-f77c6.appspot.com",
  messagingSenderId: "899131097192",
  appId: "1:899131097192:web:9f146418870aee940c7bdd",
});

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { storage, firestore, timestamp };

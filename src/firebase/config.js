import * as firebase from 'firebase/app'

import 'firebase/storge'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBDMTRK-cLuJStEZLaJApwC9FNf2kXG6nM",
  authDomain: "image-gallery-f77c6.firebaseapp.com",
  projectId: "image-gallery-f77c6",
  storageBucket: "image-gallery-f77c6.appspot.com",
  messagingSenderId: "899131097192",
  appId: "1:899131097192:web:9f146418870aee940c7bdd"
})

const storage = firebase.storage()
const firestore = firebase.firestore()

export {storage, firestore}
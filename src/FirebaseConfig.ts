import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCImFBD7_6QeLTocu1tu6_MVfG4W2yqc5Y",
  authDomain: "helpsys-3596c.firebaseapp.com",
  projectId: "helpsys-3596c",
  storageBucket: "helpsys-3596c.appspot.com",
  messagingSenderId: "353500327513",
  appId: "1:353500327513:web:57ea96d90b50f94f2a8b48",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

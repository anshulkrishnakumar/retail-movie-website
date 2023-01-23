import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmimt20badbYwmh2xpnl_Vu42g7umhe4c",
  authDomain: "rmw-firebase-150c9.firebaseapp.com",
  projectId: "rmw-firebase-150c9",
  storageBucket: "rmw-firebase-150c9.appspot.com",
  messagingSenderId: "896199981659",
  appId: "1:896199981659:web:fdbae2a3ea848a440f9d7e",
  measurementId: "G-REGJC0H7X9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();

export { auth, firestore }
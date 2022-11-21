import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5YJsBXjhiQbbi66XMJSC_eX2uHIZ5eK8",
  authDomain: "ics4u-3c5b8.firebaseapp.com",
  projectId: "ics4u-3c5b8",
  storageBucket: "ics4u-3c5b8.appspot.com",
  messagingSenderId: "1022875677940",
  appId: "1:1022875677940:web:7cacbf908e457f37b01aa1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();

connectAuthEmulator(auth, "http://localhost:9099");
connectFirestoreEmulator(firestore, 'localhost', 8080);
connectStorageEmulator(storage, "localhost", 9199);

export { auth, firestore, storage }
// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEggoIEnVuPsv9LqANyX_VA8L56hDj120",
  authDomain: "fir-auth-7e640.firebaseapp.com",
  projectId: "fir-auth-7e640",
  storageBucket: "fir-auth-7e640.appspot.com",
  messagingSenderId: "563135724771",
  appId: "1:563135724771:web:9fa4d89dace485c410d9d6"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };
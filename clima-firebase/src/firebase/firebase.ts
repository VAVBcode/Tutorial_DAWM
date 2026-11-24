// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcDdRmgb_4EcpZMqW8Df9M4vYz63pAdJ4",
  authDomain: "data-repository-87152.firebaseapp.com",
  projectId: "data-repository-87152",
  storageBucket: "data-repository-87152.firebasestorage.app",
  messagingSenderId: "924753737490",
  appId: "1:924753737490:web:4dddc5e2f64d0c6c37e5cb",
  measurementId: "G-2HKQGPESME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
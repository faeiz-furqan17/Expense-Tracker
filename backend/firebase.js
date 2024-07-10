// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8EpIwn9Xz5T9yrhZLaOyCwNszJYpnn28",
  authDomain: "expense-tracker-main-81887.firebaseapp.com",
  projectId: "expense-tracker-main-81887",
  storageBucket: "expense-tracker-main-81887.appspot.com",
  messagingSenderId: "640099266478",
  appId: "1:640099266478:web:863ace3ccf98b21349623f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

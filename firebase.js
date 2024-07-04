// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3gxX32YoPeWCJkpHrxR0XecqOD_CqdQM",
  authDomain: "expense-tracker-8d57d.firebaseapp.com",
  projectId: "expense-tracker-8d57d",
  storageBucket: "expense-tracker-8d57d.appspot.com",
  messagingSenderId: "838643078389",
  appId: "1:838643078389:web:94ce64751009c7cf38a1bc",
  measurementId: "G-WP11R84B3T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyxaoqKfgTZOtF9SXmGqb4i6hG19kUwU8",
  authDomain: "eshopp-44a8e.firebaseapp.com",
  projectId: "eshopp-44a8e",
  storageBucket: "eshopp-44a8e.appspot.com",
  messagingSenderId: "925801613244",
  appId: "1:925801613244:web:aaeede6f6f4f2f59ce4db9",
  measurementId: "G-6P1B57CX6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
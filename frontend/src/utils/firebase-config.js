// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW-l8m4z135lAyZWpI0v3eVqMmFWm-6MY",
  authDomain: "netflix-7bdf3.firebaseapp.com",
  projectId: "netflix-7bdf3",
  storageBucket: "netflix-7bdf3.appspot.com",
  messagingSenderId: "238937269980",
  appId: "1:238937269980:web:f99746c3701d79601eb619",
  measurementId: "G-DN9B1RLPJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth=getAuth(app);
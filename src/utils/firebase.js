// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGd2PI2nK4QtgiZc1-veup5NdCM0Lf1dM",
  authDomain: "netflixgpt-f0952.firebaseapp.com",
  projectId: "netflixgpt-f0952",
  storageBucket: "netflixgpt-f0952.appspot.com",
  messagingSenderId: "517337699094",
  appId: "1:517337699094:web:ce65e4f9509587b372f637",
  measurementId: "G-TZ087MDHHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

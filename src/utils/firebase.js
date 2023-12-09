// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuo5zWCu-AY0NCZjxIkRJjbvmhhDrHQpI",
  authDomain: "netlix-gpt-72899.firebaseapp.com",
  projectId: "netlix-gpt-72899",
  storageBucket: "netlix-gpt-72899.appspot.com",
  messagingSenderId: "851899809214",
  appId: "1:851899809214:web:64891c84dbf81caef48def",
  measurementId: "G-M9KGDBBWVG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpJBs0SkNKYNnk3zT_-qAOlkoVQoBlbr4",
  authDomain: "clone-yt-843bd.firebaseapp.com",
  projectId: "clone-yt-843bd",
  storageBucket: "clone-yt-843bd.appspot.com",
  messagingSenderId: "378005917395",
  appId: "1:378005917395:web:78c038848b4eccdeaa0e26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const db = getFirestore(app)
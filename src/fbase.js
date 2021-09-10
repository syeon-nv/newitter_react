import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKNFYoeZ9FI23T4QDpP8R60ywAWOLti3I",
  authDomain: "newitter-580ef.firebaseapp.com",
  projectId: "newitter-580ef",
  storageBucket: "newitter-580ef.appspot.com",
  messagingSenderId: "582517360510",
  appId: "1:582517360510:web:8be647f951fd8a07cbd52f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService = getAuth();

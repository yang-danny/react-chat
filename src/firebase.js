// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8ya1L0ApGg3822JO22iUDyjUle2cmrNQ",
  authDomain: "react-chat-000.firebaseapp.com",
  projectId: "react-chat-000",
  storageBucket: "react-chat-000.appspot.com",
  messagingSenderId: "191526209715",
  appId: "1:191526209715:web:adbf0b2b5b3542ab2308c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
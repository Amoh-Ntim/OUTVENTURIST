import { initializeApp } from "firebase/app";

const env = import.meta.env

const firebaseConfig = {
  apiKey: env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: "outventurist-18782.firebaseapp.com",
  projectId: env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "outventurist-18782.appspot.com",
  messagingSenderId: env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: env.VITE_REACT_APP_FIREBASE_APPID,
};


export const app = initializeApp(firebaseConfig);
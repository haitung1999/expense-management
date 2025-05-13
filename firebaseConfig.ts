// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDk3D-SHA0-TKF791lfGSC9e4CFeP3A11A",
  authDomain: "react-idea-sharing.firebaseapp.com",
  databaseURL: "https://react-idea-sharing-default-rtdb.firebaseio.com",
  projectId: "react-idea-sharing",
  storageBucket: "react-idea-sharing.firebasestorage.app",
  messagingSenderId: "986467118219",
  appId: "1:986467118219:web:356116930ffc45e3bf388e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

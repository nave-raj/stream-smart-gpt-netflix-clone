// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbvnJR04EmnYBcHSbPXkK_TWqc84a42FY",
  authDomain: "stream-smart-gpt.firebaseapp.com",
  projectId: "stream-smart-gpt",
  storageBucket: "stream-smart-gpt.appspot.com",
  messagingSenderId: "924958441323",
  appId: "1:924958441323:web:b6a48d71679c829d95562e",
  measurementId: "G-V7XKQLRET2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7bIPzemvBYOydQRa3_b1ekvw80yT4Hmw",
  authDomain: "codent-3ea5b.firebaseapp.com",
  projectId: "codent-3ea5b",
  storageBucket: "codent-3ea5b.appspot.com",
  messagingSenderId: "531633219195",
  appId: "1:531633219195:web:0a2873154a97cca34aa4de",
  measurementId: "G-EHC5PCMEWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
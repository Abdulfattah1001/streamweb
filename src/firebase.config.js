// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLyXUXinDMgqm7Q9T3zFTr5alaYpk6ynY",
  authDomain: "stream-6fa32.firebaseapp.com",
  databaseURL: "https://stream-6fa32-default-rtdb.firebaseio.com",
  projectId: "stream-6fa32",
  storageBucket: "stream-6fa32.appspot.com",
  messagingSenderId: "291011291894",
  appId: "1:291011291894:web:0cea0cf30cd2ee0faf9ad7",
  measurementId: "G-S9QTVXT0ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDktEcyClReNbVj-qBTuxKXqhLbR5aNpN0",
  authDomain: "yt-demo-c1718.firebaseapp.com",
  projectId: "yt-demo-c1718",
  storageBucket: "yt-demo-c1718.appspot.com",
  messagingSenderId: "135159600166",
  appId: "1:135159600166:web:60c3e31aaa918db37782e7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth =firebase.auth();
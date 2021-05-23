import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBwcxuEixCrFu7FD1Mxn2M1MU4fcW4oFtc",
  authDomain: "dma-lab.firebaseapp.com",
  projectId: "dma-lab",
  storageBucket: "dma-lab.appspot.com",
  messagingSenderId: "334804086383",
  appId: "1:334804086383:web:2368998b2ae907ab4ae79a",
});

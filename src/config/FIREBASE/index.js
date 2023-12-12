import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyBKmO_93PTsKjRHN0nU975UxbJ7ufMmwxM",
  authDomain: "noteapps-2a231.firebaseapp.com",
  databaseURL: "https://noteapps-2a231-default-rtdb.firebaseio.com",
  projectId: "noteapps-2a231",
  storageBucket: "noteapps-2a231.appspot.com",
  messagingSenderId: "682130285853",
  appId: "1:682130285853:web:8765a20915fa968edf2df4"
});

const FIREBASE = firebase;

export default FIREBASE;
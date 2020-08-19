import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzps0nMdJTuXKbqUaH1YLLBXS_n1gxnQI",
  authDomain: "clone-eb145.firebaseapp.com",
  databaseURL: "https://clone-eb145.firebaseio.com",
  projectId: "clone-eb145",
  storageBucket: "clone-eb145.appspot.com",
  messagingSenderId: "650157082538",
  appId: "1:650157082538:web:3260d83e9bb7414a4b4dd3",
  measurementId: "G-5KXLRS6VW2",
});

const auth = firebase.auth();

export { auth };

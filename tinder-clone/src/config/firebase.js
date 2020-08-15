import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByxseVS46YNYlisI9zjrsllCMwHS0xF_U",
  authDomain: "tinder-clone-60306.firebaseapp.com",
  databaseURL: "https://tinder-clone-60306.firebaseio.com",
  projectId: "tinder-clone-60306",
  storageBucket: "tinder-clone-60306.appspot.com",
  messagingSenderId: "338446242244",
  appId: "1:338446242244:web:47d7c0e5691b2c6f8d5491",
  measurementId: "G-JPSXSVFWPY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;

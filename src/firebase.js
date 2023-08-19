import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMIvNhvaq2-rvbYJg7rWJ9uWGuVDp1vtA",
  authDomain: "sampleyt-d1349.firebaseapp.com",
  projectId: "sampleyt-d1349",
  storageBucket: "sampleyt-d1349.appspot.com",
  messagingSenderId: "151210222326",
  appId: "1:151210222326:web:75232a3e7bdf14e00dc2d7",
};

if (!firebase.app.lenth) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();

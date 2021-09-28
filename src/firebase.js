import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9SsqrLVGKdrvnwa_z6TFLiKS2y8qoXDE",
    authDomain: "challenge-bc1ba.firebaseapp.com",
    projectId: "challenge-bc1ba",
    storageBucket: "challenge-bc1ba.appspot.com",
    messagingSenderId: "1069867838513",
    appId: "1:1069867838513:web:b99d9333836cab26127910",
    measurementId: "G-8Q0BG12WNC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
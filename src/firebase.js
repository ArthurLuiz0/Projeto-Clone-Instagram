import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBg1k8e7k8kSw1hveSp3622ay_ZZbAOIYA",
    authDomain: "instagram-clone-db0eb.firebaseapp.com",
    projectId: "instagram-clone-db0eb",
    storageBucket: "instagram-clone-db0eb.appspot.com",
    messagingSenderId: "575748159422",
    appId: "1:575748159422:web:abfa90965e365681ecabef",
    measurementId: "G-Z4M7DB8P73"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};
import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDBi5hTjmRCcbXtVivtFTNzo4bgyJ83jLs",
  authDomain: "job-board-717c7.firebaseapp.com",
  projectId: "job-board-717c7",
  storageBucket: "job-board-717c7.appspot.com",
  messagingSenderId: "281236781576",
  appId: "1:281236781576:web:4012ed47dfef2f315e2fbd"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
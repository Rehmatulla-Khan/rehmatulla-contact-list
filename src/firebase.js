import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACEcP4bC7vTJ-i8FdVAorUcB7qp2OiJzk",
  authDomain: "rehmatulla-contact-app.firebaseapp.com",
  projectId: "rehmatulla-contact-app",
  storageBucket: "rehmatulla-contact-app.appspot.com",
  messagingSenderId: "231235464794",
  appId: "1:231235464794:web:4711df781181c155d3f263",
  measurementId: "G-KWXFV3TYCT",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();

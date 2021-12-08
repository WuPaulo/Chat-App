import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBrDXWF-Zz49uw_qprQ6C295-NUVp42U3k",
  authDomain: "fir-reactchat-37447.firebaseapp.com",
  projectId: "fir-reactchat-37447",
  storageBucket: "fir-reactchat-37447.appspot.com",
  messagingSenderId: "929230378019",
  appId: "1:929230378019:web:ce373476ac919641290d96",
  measurementId: "G-QSNLDNFK7K"
});

  const db = firebaseApp.firestore()
  const auth = firebase.auth()


  export {db, auth}
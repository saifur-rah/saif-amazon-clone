//import firebase from "./firebase";
//import firebase from 'firebase/compat/app';

//import 'firebase/compat/firestore';
//import firebase from "./firebase";
//import 'firebase';
//import firebase from 'firebase/app';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCjGfnNX3InifoQ4xnieGgALR2MGgPQQB8",
  authDomain: "e-challenge-a5309.firebaseapp.com",
  projectId: "e-challenge-a5309",
  storageBucket: "e-challenge-a5309.appspot.com",
  messagingSenderId: "1072975932876",
  appId: "1:1072975932876:web:58545eabb426174a020169",
  measurementId: "G-RD27Q0MTCH"
};




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCjGfnNX3InifoQ4xnieGgALR2MGgPQQB8",
//     authDomain: "e-challenge-a5309.firebaseapp.com",
//     projectId: "e-challenge-a5309",
//     storageBucket: "e-challenge-a5309.appspot.com",
//     messagingSenderId: "1072975932876",
//     appId: "1:1072975932876:web:58545eabb426174a020169",
//     measurementId: "G-RD27Q0MTCH"
//   };

  // const firebaseApp = firebase.initalizeApp(firebaseConfig);

  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();

  // export {db,auth};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
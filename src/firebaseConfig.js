// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration 

const firebaseConfig = {

  apiKey: "AIzaSyB2W7waSIaFudMNQtcc0bjh9LYCclZOsgM",

  authDomain: "fir-chat-ac0c8.firebaseapp.com",

  projectId: "fir-chat-ac0c8",

  storageBucket: "fir-chat-ac0c8.appspot.com",

  messagingSenderId: "389085492023",

  appId: "1:389085492023:web:20ccdfc0432b7557bb60b2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
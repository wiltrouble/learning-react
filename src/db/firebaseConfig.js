import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDr_KeGTzNQvPE2Gvrd0iZlmpmWOX16D78",

  authDomain: "garden-managment.firebaseapp.com",

  projectId: "garden-managment",

  storageBucket: "garden-managment.appspot.com",

  messagingSenderId: "495158844404",

  appId: "1:495158844404:web:920fd18a3827d3938537a1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }
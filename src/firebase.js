import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9xq9fZuNoCL5GguVxhqtO7KhcJKoRXSk",
  authDomain: "clone-18m22.firebaseapp.com",
  projectId: "clone-18m22",
  storageBucket: "clone-18m22.appspot.com",
  messagingSenderId: "1059207748886",
  appId: "1:1059207748886:web:f5d5feead7fecc95764437",
  measurementId: "G-C5X8P59FJP",
};

//Initializing the App
const firebaseApp = initializeApp(firebaseConfig);

//Initializing the database
// const firebaseDB = firebaseApp.firestore();

//Initializing the auth
const firebaseAuth = getAuth();

//Using these in other components
export { firebaseAuth };

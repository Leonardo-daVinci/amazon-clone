import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const firebaseDB = getFirestore(firebaseApp);

//Initializing the auth
const firebaseAuth = getAuth();

//Using these in other components
export { firebaseAuth, firebaseDB };

/*
Steps to deploy the app 
1. Run "fIrebase login" - takes you to browser to sign into your firebase account.
2. Make sure firebase-tools package is installed.
3. Run "firebase init" - select hosting and then select your project from existing projects list.
4. What do you want to use as your public directory? - build
5. Configure as a single-page app (rewrite all urls to /index.html)? - Yes
6. Set up automatic builds and deploys with GitHub? No
7. After the initialization, run "npm run build".
8. Final step - run "firebase deploy"
*/

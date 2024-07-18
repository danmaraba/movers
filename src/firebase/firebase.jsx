// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI2X66q8nAvIo8gPr9HfRoiMQVLi5Lb-0",
  authDomain: "delivery-project-ef32e.firebaseapp.com",
  projectId: "delivery-project-ef32e",
  storageBucket: "delivery-project-ef32e.appspot.com",
  messagingSenderId: "602016795816",
  appId: "1:602016795816:web:830bc396d8d08e4672069d",
  measurementId: "G-FW2Q7F3225"
};

// get auth is a method provided by the Firebase SDKs (such as Firebase JavaScript SDK) that allows you to retrieve the current authentication state of a user
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
export const db=getFirestore(app)

export {app,auth};
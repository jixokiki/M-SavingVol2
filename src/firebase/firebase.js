// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Nm_jFCxNDsqdcbvZbCjQ8pETGDc-rMQ",
  authDomain: "m-saving-fb35c.firebaseapp.com",
  projectId: "m-saving-fb35c",
  storageBucket: "m-saving-fb35c.appspot.com",
  messagingSenderId: "70822165476",
  appId: "1:70822165476:web:b4fdd35b4fc855034e25f1",
  measurementId: "G-SJF45STKXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
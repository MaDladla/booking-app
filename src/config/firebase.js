// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5BQYDCSP-A5kH20CcfEzPa-y9zvBu6VU",
  authDomain: "budgetapp-7f86a.firebaseapp.com",
  projectId: "budgetapp-7f86a",
  storageBucket: "budgetapp-7f86a.appspot.com",
  messagingSenderId: "899244584219",
  appId: "1:899244584219:web:f7b9706aceff0e35ac77be",
  measurementId: "G-DECCMB4LP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
const analytics = getAnalytics(app);

export {auth};
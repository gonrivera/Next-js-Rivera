// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpt1PVLL0Y_KEiuQMjXdjsra_BdC2AmaU",
  authDomain: "ecommercerivera-58160.firebaseapp.com",
  projectId: "ecommercerivera-58160",
  storageBucket: "ecommercerivera-58160.appspot.com",
  messagingSenderId: "735581181053",
  appId: "1:735581181053:web:8da2c7e7a4602b9b690d14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

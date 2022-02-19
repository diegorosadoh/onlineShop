// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqg31tkjGW6FVJM-68C4kH1ndQBqRmimQ",
  authDomain: "shop-60ae0.firebaseapp.com",
  projectId: "shop-60ae0",
  storageBucket: "shop-60ae0.appspot.com",
  messagingSenderId: "317357931307",
  appId: "1:317357931307:web:e4d412fca569294b5f236e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export {db};
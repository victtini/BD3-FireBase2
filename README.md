// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2iQbmFdFUREgm9pPOo7u4DaY_nRyjCA0",
  authDomain: "b3d-app-libre-victor.firebaseapp.com",
  projectId: "b3d-app-libre-victor",
  storageBucket: "b3d-app-libre-victor.appspot.com",
  messagingSenderId: "785594721415",
  appId: "1:785594721415:web:e70ddf726e615ea4874422",
  measurementId: "G-TMY5238Q2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
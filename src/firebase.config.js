// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7x_F60E1HSqrq19Wg0KrBY5p-_0r6l2M",
  authDomain: "otp-react-1f930.firebaseapp.com",
  projectId: "otp-react-1f930",
  storageBucket: "otp-react-1f930.appspot.com",
  messagingSenderId: "1096417855495",
  appId: "1:1096417855495:web:ab14d6e2ac39edc44102a2",
  measurementId: "G-QVMRP1EXBX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

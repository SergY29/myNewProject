import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCJijf1Ff3KG9vurlUQ45wdq7vOoOq2RXc",
    authDomain: "rn-social-1c302.firebaseapp.com",
    projectId: "rn-social-1c302",
    storageBucket: "rn-social-1c302.appspot.com",
    messagingSenderId: "38956686340",
    appId: "1:38956686340:web:7414c84f2ee197f4162951",
    measurementId: "G-CE24G2FXF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);







import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBsFTbl-91so5YFILEQ2XILL8wDu0ANJ5Y",
    authDomain: "rn-1-d964f.firebaseapp.com",
    projectId: "rn-1-d964f",
    storageBucket: "rn-1-d964f.appspot.com",
    messagingSenderId: "604759047349",
    appId: "1:604759047349:web:14e375a01c89d4e1e352fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const fireStore = getFirestore(app);








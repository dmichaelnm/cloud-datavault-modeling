import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {firebaseConfig} from "src/config/firebase";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Authentication
export const firebaseAuth = getAuth(firebaseApp);


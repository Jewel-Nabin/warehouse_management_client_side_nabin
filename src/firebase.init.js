// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfuVMApkHonBaV4n5f1PwehJd1r0uHpJc",
    authDomain: "jewels-sparkles.firebaseapp.com",
    projectId: "jewels-sparkles",
    storageBucket: "jewels-sparkles.appspot.com",
    messagingSenderId: "764843071687",
    appId: "1:764843071687:web:a3f453b5a22685d9b4c6e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
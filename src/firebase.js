import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQAlLanaRI1DY1ABMYvnTtkpbo1mHoTuM",
    authDomain: "myprojects-4331e.firebaseapp.com",
    projectId: "myprojects-4331e",
    storageBucket: "myprojects-4331e.firebasestorage.app",
    messagingSenderId: "1065751654873",
    appId: "1:1065751654873:web:8ce2b87a591c48515ba9c8",
    measurementId: "G-VQZV9QWMV8"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDu9aNMwdN5gcaeb3UCsqWX3i8N5IQtiM",
    authDomain: "journey-craft-43c44.firebaseapp.com",
    projectId: "journey-craft-43c44",
    storageBucket: "journey-craft-43c44.appspot.com",
    messagingSenderId: "331968344361",
    appId: "1:331968344361:web:390663353428ac5b488738",
    measurementId: "G-YS4K3MNMXE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

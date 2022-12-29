// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7IG1rKd90J4EMrTn3nn9unK1D6wNz6AM",
    authDomain: "felixclavijo-2f082.firebaseapp.com",
    projectId: "felixclavijo-2f082",
    storageBucket: "felixclavijo-2f082.appspot.com",
    messagingSenderId: "855577131952",
    appId: "1:855577131952:web:c208e73453e3e38c17b475",
    measurementId: "G-3SKH6H22CJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

import { initializeApp } from 'firebase/app';
import { getFirestore,collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFm3Hvvqb3BLyFir_8_TCFr0DBxZNCV_c",
    authDomain: "blinx-23dab.firebaseapp.com",
    projectId: "blinx-23dab",
    storageBucket: "blinx-23dab.appspot.com",
    messagingSenderId: "718040819489",
    appId: "1:718040819489:web:dc4f963b5c4ad1d69bc060",
    measurementId: "G-6GBN5YS0WY"
};

//   init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
export const colRef = collection(db, 'waitlists');
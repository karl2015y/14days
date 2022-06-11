import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDfs9v_Keky63lalShdo4gSn2Oidmk6XDQ",
    authDomain: "outsource-1c28f.firebaseapp.com",
    projectId: "outsource-1c28f",
    storageBucket: "outsource-1c28f.appspot.com",
    messagingSenderId: "315223216903",
    appId: "1:315223216903:web:1b37e755767fdd5d4c6ba2"
};
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore
export const storage = firebase.storage;

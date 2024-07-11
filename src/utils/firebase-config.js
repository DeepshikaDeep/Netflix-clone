import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD7CFke7GQdfuFJhSIPqTvpYvvUlPmdv_g",
    authDomain: "react-netflix-clone-e6803.firebaseapp.com",
    projectId: "react-netflix-clone-e6803",
    storageBucket: "react-netflix-clone-e6803.appspot.com",
    messagingSenderId: "992390687735",
    appId: "1:992390687735:web:7c7668aab0e74922a21cf2",
    measurementId: "G-T3J6Y70HR6"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"  

const firebaseConfig = {
    apiKey: "AIzaSyDnS985r1OtSLSL3rOmlB3MAB34IGb0GPg",
    authDomain: "fir-app-tuto-bbe2c.firebaseapp.com",
    projectId: "fir-app-tuto-bbe2c",
    storageBucket: "fir-app-tuto-bbe2c.appspot.com",
    messagingSenderId: "1032182284996",
    appId: "1:1032182284996:web:17bf6a72053ac51ecebf91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


 
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"  
import { auth } from './firebase.js';

console.log(auth);

console.log('signupForm.js loaded');

// Tomando las variables necesarias o los datos para lso SDKs de Firebase

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['email-signup'].value;
    const pass = signupForm['password-signup'].value;
    console.log(email, pass);

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        console.log(userCredential);
    } catch (error) {
        console.log(error);
    }
    
});
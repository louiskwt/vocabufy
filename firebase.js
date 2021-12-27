// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDWqgcjwwl5wkIBnptbhAhRRT_tFKCZPpA',
	authDomain: 'vocabufy-fb3c2.firebaseapp.com',
	projectId: 'vocabufy-fb3c2',
	storageBucket: 'vocabufy-fb3c2.appspot.com',
	messagingSenderId: '492163367878',
	appId: '1:492163367878:web:115cf4376527021d44e8c7',
	measurementId: 'G-PC7W8EHQDQ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };

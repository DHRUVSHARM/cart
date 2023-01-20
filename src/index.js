import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from 'firebase/compat/app';
import firestore from 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFsCarOJkTuHTUM7xrrb_54KMm68yl7Iw",
  authDomain: "cart-74151.firebaseapp.com",
  projectId: "cart-74151",
  storageBucket: "cart-74151.appspot.com",
  messagingSenderId: "212426540717",
  appId: "1:212426540717:web:8dc74599c7b4369d582824"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


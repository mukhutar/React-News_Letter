import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9WWAJU8U_NHfFX8aA-jSsPBaguxGoriE",
  authDomain: "newsletter-6b88f.firebaseapp.com",
  projectId: "newsletter-6b88f",
  storageBucket: "newsletter-6b88f.appspot.com",
  messagingSenderId: "931466991946",
  appId: "1:931466991946:web:96a8530901588b197a09b3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

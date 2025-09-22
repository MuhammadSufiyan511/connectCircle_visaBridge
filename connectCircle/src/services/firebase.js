import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDLRvQc2PBTj5cR0gSaNwygQd6LO3_Voto",
  authDomain: "connectcircle-dff2b.firebaseapp.com",
  databaseURL: "https://connectcircle-dff2b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "connectcircle-dff2b",
  storageBucket: "connectcircle-dff2b.firebasestorage.app",
  messagingSenderId: "346730287457",
  appId: "1:346730287457:web:dcbba1dc9bbd7ddbf23520",
  measurementId: "G-KKRHCCS8JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, storage, googleProvider };


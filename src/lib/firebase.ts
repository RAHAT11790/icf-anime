import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, push, set, remove, update, query, orderByChild, equalTo, get, runTransaction } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, confirmPasswordReset, updatePassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDb_p53UKDapQurh8IspiIP6bLC4ykkCNs",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "icf-anime-site.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "icf-anime-site",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "icf-anime-site.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "729299302684",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:729299302684:web:7b628477427b81065aa2d9"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { ref, onValue, push, set, remove, update, query, orderByChild, equalTo, get, runTransaction, signInWithEmailAndPassword, signOut, signInWithPopup, sendPasswordResetEmail, confirmPasswordReset, updatePassword };

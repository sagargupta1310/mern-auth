import { initializeApp } from "firebase/app";
console.log("🔥 Firebase API Key:", import.meta.env.VITE_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: "AIzaSyCD__RrZQNOHnj6hi8hDicfOmwLCeif-Z8",  // ✅ FIXED
  authDomain: "mern-auth-9a217.firebaseapp.com",
  projectId: "mern-auth-9a217",
  storageBucket: "mern-auth-9a217.appspot.com",
  messagingSenderId: "774336257538",
  appId: "1:774336257538:web:d11e0b428dd1905072511b"
};

export const app = initializeApp(firebaseConfig);

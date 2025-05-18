// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBybmgKjC8shNjdluM0dw_7_0JDU0h-21I",
  authDomain: "drogin-news.firebaseapp.com",
  projectId: "drogin-news",
  storageBucket: "drogin-news.firebasestorage.app",
  messagingSenderId: "27152517273",
  appId: "1:27152517273:web:06684bd1c85ddf46f79008"
};

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

export default app;
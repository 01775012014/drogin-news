import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
let auth;

try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    console.log("Firebase Auth initialized successfully");
} catch (error) {
    console.error("Error initializing Firebase Auth:", error);
}

export { auth };
export default app; 
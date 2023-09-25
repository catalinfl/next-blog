import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-c6098.firebaseapp.com",
  projectId: "blog-c6098",
  storageBucket: "blog-c6098.appspot.com",
  messagingSenderId: "903901505111",
  appId: "1:903901505111:web:3cbea44628f3b3dad2e512"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
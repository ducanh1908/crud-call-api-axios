// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBz6nRBLoqrZw5YtBHovGnKbPB29H7KgcU",
  authDomain: "yoongee.firebaseapp.com",
  projectId: "yoongee",
  storageBucket: "yoongee.appspot.com",
  messagingSenderId: "232240558056",
  appId: "1:232240558056:web:414ee09a0c3a80d3e53e5d",
  measurementId: "G-WWF2HKWXK1",
};

const app = initializeApp(firebaseConfig);
export const analytics = getStorage(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDKGTLN4u8RgkHu_9Hk6NsB4zSQDSJXk20",
  authDomain: "skinlens-2f56d.firebaseapp.com",
  databaseURL: "https://skinlens-2f56d-default-rtdb.firebaseio.com",
  projectId: "skinlens-2f56d",
  storageBucket: "skinlens-2f56d.appspot.com",
  messagingSenderId: "233711424700",
  appId: "1:233711424700:web:47e501a9a90f1a1935ecb9",
  measurementId: "G-W4DHJVVK0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

export { storage };
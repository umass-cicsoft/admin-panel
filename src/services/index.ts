import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "../constants/firebase.keys";

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const firebaseDatabase = getDatabase(firebaseApp);

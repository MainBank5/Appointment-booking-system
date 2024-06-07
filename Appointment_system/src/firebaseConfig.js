
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABiT0XyD68BJSaDBEaeYuake9TFwM0ggY",
  authDomain: "appoinment-1acbb.firebaseapp.com",
  projectId: "appoinment-1acbb",
  storageBucket: "appoinment-1acbb.appspot.com",
  messagingSenderId: "572447411053",
  appId: "1:572447411053:web:cecb70662b71ec5bad6864",
  measurementId: "G-MX184YVYNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
//const analytics = getAnalytics(app);

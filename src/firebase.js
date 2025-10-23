import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCg82rFj8Y0l_qcgQZYHieasq29UtEFHCg",
  authDomain: "job-hunt-app-9141e.firebaseapp.com",
  projectId: "job-hunt-app-9141e",
  storageBucket: "job-hunt-app-9141e.firebasestorage.app",
  messagingSenderId: "115894451322",
  appId: "1:115894451322:web:2f09d8807af9a0ba918fc3",
  measurementId: "G-9KF4VXH614"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
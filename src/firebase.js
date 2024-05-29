import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDChqh44P_AItHKFFpDcgSdqI8pmteJfPU",
  authDomain: "dag-mar.firebaseapp.com",
  projectId: "dag-mar",
  storageBucket: "dag-mar.appspot.com",
  messagingSenderId: "480073541309",
  appId: "1:480073541309:web:6742ce7b6725ef2420f9d4",
  measurementId: "G-0PYXW9KMV9"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
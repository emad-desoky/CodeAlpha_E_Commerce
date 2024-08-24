import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYQL1SzB1UpUAY_R0huyhDhUKSUQDC80U",
  authDomain: "ecommerce-d6ca8.firebaseapp.com",
  projectId: "ecommerce-d6ca8",
  storageBucket: "ecommerce-d6ca8.appspot.com",
  messagingSenderId: "669635128160",
  appId: "1:669635128160:web:26c012e58ac7e97c428c05",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

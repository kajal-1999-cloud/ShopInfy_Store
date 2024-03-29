import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyClrF_KxBgkP2RuTAptrUHmx2ZJJRf2wvQ",
  authDomain: "ecommerce-app-24923.firebaseapp.com",
  projectId: "ecommerce-app-24923",
  storageBucket: "ecommerce-app-24923.appspot.com",
  messagingSenderId: "303651099693",
  appId: "1:303651099693:web:bb48992e8750741766d4a4"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth };
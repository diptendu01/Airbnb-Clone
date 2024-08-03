import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBe6o7mNSwHHdbU9xnwEwLTQLlKCwb4vC8",
  authDomain: "airbnb-65666.firebaseapp.com",
  projectId: "airbnb-65666",
  storageBucket: "airbnb-65666.appspot.com",
  messagingSenderId: "163610647817",
  appId: "1:163610647817:web:63c77cd8ada0c88fd607d8"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const googleProvider = new GoogleAuthProvider()
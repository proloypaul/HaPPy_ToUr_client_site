import { initializeApp } from "firebase/app";
import firebaseConfig from "./FIrebase.config";

const initializetion = () => {
    initializeApp(firebaseConfig)
}

export default initializetion;
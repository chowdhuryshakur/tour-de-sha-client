import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;
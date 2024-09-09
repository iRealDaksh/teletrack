import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC58iCNNe-3EFGzZ4Nq364CLCuJyDRaHpM",
    authDomain: "teletracker-92ded.firebaseapp.com",
    projectId: "teletracker-92ded",
    storageBucket: "teletracker-92ded.appspot.com",
    messagingSenderId: "632179386049",
    appId: "1:632179386049:web:30d2b230590c147e609640",
    measurementId: "G-95B88TCSZD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
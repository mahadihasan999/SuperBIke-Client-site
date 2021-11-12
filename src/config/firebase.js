import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCvTO8b1f_z_AINfFUPanwQhjxzIrYMIZc",
    authDomain: "super-bike-bd.firebaseapp.com",
    projectId: "super-bike-bd",
    storageBucket: "super-bike-bd.appspot.com",
    messagingSenderId: "639071071475",
    appId: "1:639071071475:web:cb8c8c1f1f2708689a1b86"
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;
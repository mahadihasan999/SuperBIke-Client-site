import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD1FQQRiP-VN7k2iDOoyTe4S2YGd2ojFKM",
    authDomain: "new1-af780.firebaseapp.com",
    projectId: "new1-af780",
    storageBucket: "new1-af780.appspot.com",
    messagingSenderId: "572990115803",
    appId: "1:572990115803:web:72c04bfc346856b37ca1fe"
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWbeJSVPdWbOGtvhhJsqEK1eyXPCOYj6o",
    authDomain: "quest-collector.firebaseapp.com",
    projectId: "quest-collector",
    storageBucket: "quest-collector.appspot.com",
    messagingSenderId: "560957616907",
    appId: "1:560957616907:web:4113c088b0833935fc280e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {
    db,
    storage
}
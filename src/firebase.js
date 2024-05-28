// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB99AEyYi0mYI_wlt1lo5ybTHcncpez8Sw",
  authDomain: "disney-clone-75a15.firebaseapp.com",
  projectId: "disney-clone-75a15",
  storageBucket: "disney-clone-75a15.appspot.com",
  messagingSenderId: "51636300624",
  appId: "1:51636300624:web:5c14028f813df4a980da55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(firebaseApp, "gs://my-custom-bucket");
const provider = new GoogleAuthProvider();

export { app, db, auth, storage, provider };

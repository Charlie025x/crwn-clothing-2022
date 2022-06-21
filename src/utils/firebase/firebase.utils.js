import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEF9LzYrG4rR0vkqp0rZI1yKzgQ7hgJwY",
  authDomain: "crwn-clothing-db-2022-88c71.firebaseapp.com",
  projectId: "crwn-clothing-db-2022-88c71",
  storageBucket: "crwn-clothing-db-2022-88c71.appspot.com",
  messagingSenderId: "40432931519",
  appId: "1:40432931519:web:df3273673b9911aa406c0a",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

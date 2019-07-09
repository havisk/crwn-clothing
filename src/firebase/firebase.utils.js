import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBXSyLcDBeTM05rB-yT0h4D01sAh8BCHBU",
  authDomain: "crwn-db-9780e.firebaseapp.com",
  databaseURL: "https://crwn-db-9780e.firebaseio.com",
  projectId: "crwn-db-9780e",
  storageBucket: "",
  messagingSenderId: "314951606082",
  appId: "1:314951606082:web:beddd44feb3de821"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

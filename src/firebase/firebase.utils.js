import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBHRAl13XXK2Dk4mXdZbcKlVcD3jaQIuEU",
  authDomain: "crwn-db-330a3.firebaseapp.com",
  databaseURL: "https://crwn-db-330a3.firebaseio.com",
  projectId: "crwn-db-330a3",
  storageBucket: "crwn-db-330a3.appspot.com",
  messagingSenderId: "654948255949",
  appId: "1:654948255949:web:b15012e8ce1d446a2bc184",
  measurementId: "G-VNTKF9DFDY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

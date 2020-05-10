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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log("FireStore");
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error Creating User..." + error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBKvgFY5GcvGAeuJ7n2YinuCjdpd0Im8nw",
    authDomain: "crwn-clothing-1eb93.firebaseapp.com",
    databaseURL: "https://crwn-clothing-1eb93.firebaseio.com",
    projectId: "crwn-clothing-1eb93",
    storageBucket: "crwn-clothing-1eb93.appspot.com",
    messagingSenderId: "450823312596",
    appId: "1:450823312596:web:0d8acde83be1d7db131741"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
};
  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
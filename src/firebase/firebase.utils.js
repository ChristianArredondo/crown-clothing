import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { env } from '../runtime.env';

const config = {
  apiKey: env.REACT_APP_apiKey,
  authDomain: env.REACT_APP_authDomain,
  databaseURL: env.REACT_APP_databaseURL,
  projectId: env.REACT_APP_projectId,
  storageBucket: env.REACT_APP_storageBucket,
  messagingSenderId: env.REACT_APP_messagingSenderId,
  appId: env.REACT_APP_appId,
  measurementId: env.REACT_APP_measurementId
};

export const createUser = async (userAuthProfile, additionalData = {}) => {
  if (!userAuthProfile) return;

  const userRef = firestore.doc(`/users/${userAuthProfile.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuthProfile;
    const createdDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData
      });
    } catch (err) {
      console.log(`Error creating user: ${err.message}`);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collName, objectsToAdd) => {
  const collRef = firestore.collection(collName);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

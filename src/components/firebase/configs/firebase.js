import * as firebase from 'firebase/app';
import { firebaseConfig, firebaseUIConfig } from './dev.js';
import firebaseui from 'firebaseui';
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export const contentCollectionRef = firestore.collection('content');
export const locationsCollectionRef = firestore.collection('locations').doc('states');
const ui = new firebaseui.auth.AuthUI(firebase.auth());
export const startFirebaseUI = function(elementId) {
 ui.start(elementId, firebaseUIConfig);
};

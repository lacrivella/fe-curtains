import firebase from 'firebase';
import { authEmail } from './auth';

export const firebaseConfig = {
 apiKey: `${process.env.API_KEY}`,
 authDomain: 'uniquething.firebaseapp.com',
 databaseURL: 'https://uniquething.firebaseio.com',
 projectId: 'cash-for-cars-tr-1501186964541',
 storageBucket: 'uniquething.appspot.com',
 messagingSenderId: '1053781734652',
};
export const firebaseUIConfig = {
 signInSuccessUrl: '/admin',
 signInFlow: 'popup',
 signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
 tosUrl: '/url/here',
 privacyPolicyUrl: '/privacy-policy',
 callbacks: {
   signInSuccessWithAuthResult: function(authResult, redirectUrl) {
     return authResult.additionalUserInfo.profile.email === authEmail;
   }
 };
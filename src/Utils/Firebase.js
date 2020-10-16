import React, {Component} from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const FirebaseContext = React.createContext();

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };
class Firebase {
    constructor() {
        app.initializeApp(config);
        /*if (!firebase.apps.length) {
            app.initializeApp(config);
        }*/
        this.auth = app.auth();
        this.firestore = app.firestore();
        this.uiConfig = {
            // Popup signin flow rather than redirect flow.
            signInFlow: 'popup',
            // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
            signInSuccessUrl: '/signedIn',
            // We will display Google and Facebook as auth providers.
            signInOptions: [
              firebase.auth.EmailAuthProvider.PROVIDER_ID,
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ]
          };
        this.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
    }
    doSignUpWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    signInWithGoogle = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      this.auth.signInWithPopup(provider).then(result => {
        console.log(result)
      }).catch(err => {
        console.log(err);
      })
    }
    signInWithFacebook = () => {
      var provider = new firebase.auth.FacebookAuthProvider();
      this.auth.signInWithPopup(provider).then(result => {
        console.log(result);
      }).catch(err => {
        console.log(err)
      })
    }
}

export {Firebase, FirebaseContext};
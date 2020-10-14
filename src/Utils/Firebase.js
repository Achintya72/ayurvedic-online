import React, {Component} from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

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
        this.handleSignOut = this.handleSignOut(this)

    }
    handleSignOut()
    {
        this.auth.signOut();
    }
    signInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

}
// class FirebaseContextProvider extends Component {
//     constructor(){    
//         super()    
//         this.firebase= new Firebase()        
//     }
//     render() {
//         return (
//             <FirebaseContext.Provider value={this.state.firebase}>
//                 {this.props.children}
//             </FirebaseContext.Provider>
//         )
//     }
// }
export {Firebase, FirebaseContext};
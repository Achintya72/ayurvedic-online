import React from 'react';
//import {FirebaseContext} from '../Utils';
//import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


// Configure FirebaseUI.

function SignIn() {
   // const firebase = useContext(FirebaseContext);
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        {/* <StyledFirebaseAuth uiConfig={firebase.uiConfig} firebaseAuth={firebase.auth}/> */}
      </div>
    );
}

export default SignIn
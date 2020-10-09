import React, {useContext} from 'react';
import {FirebaseContext} from '../Utils'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


// Configure FirebaseUI.

function SignIn() {
    const firebase = useContext(FirebaseContext);
    return (
      <div>
        <StyledFirebaseAuth uiConfig={firebase.uiConfig} firebaseAuth={firebase.auth}/> 
      </div>
    );
}

export default SignIn
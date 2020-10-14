import React from 'react';
import { FirebaseContext } from '../Utils';

export default function SignOut() {
    const context = useContext(FirebaseContext);
    context.auth().SignOut();
    return(
        <div>Sign Out</div>
    )
}
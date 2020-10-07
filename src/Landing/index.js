import React, {useContext} from 'react';
import {FirebaseContext} from '../Utils';

export default function Landing() {
    const firebase = useContext(FirebaseContext);
    return(
        <div> 
            <h1>Landing Page</h1>
            {console.log(firebase)}
        </div>
    )
}

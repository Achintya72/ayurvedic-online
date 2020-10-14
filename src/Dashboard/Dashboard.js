import React, { useContext, useState} from 'react';
import { FirebaseContext } from '../Utils';

export default function Dashboard() {
    var context = useContext(FirebaseContext);
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")

    context.auth.onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        setUser(user.displayName)
        setEmail(user.email)
      } else {
        // User not logged in or has just logged out.
        setUser("")
        setEmail("")
      }
    });
    // db.collection('Users').doc(firebase.auth.currentUser.email).onSnapshot(snapshot => {
    //     console.log(snapshot)
       
    //   }, err => console.log(err.message));

      return(
        <FirebaseContext.Consumer>{value =>{
                    return(
                    <div>Dashboard {user}, {email}</div>
          )

        }}

      </FirebaseContext.Consumer>
    )
}

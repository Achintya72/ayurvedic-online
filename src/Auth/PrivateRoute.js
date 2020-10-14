// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React, { useContext, useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { FirebaseContext } from '../Utils'

const PrivateRoute = ({ component: Component, ...rest }) => {
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
  return (
    <FirebaseContext.Consumer>
    {value => {
        return(
          <Route
      {...rest}
      render={props =>
        user !== ""? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
          )
      }
    />
        )

    }}
    </FirebaseContext.Consumer>
    
  )
}

export default PrivateRoute
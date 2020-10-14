import React, { useContext } from 'react';
import { FirebaseContext, FirebaseContextProvider } from '../Utils'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from 'firebase';
import { getThemeProps } from '@material-ui/styles';


// Configure FirebaseUI.
class SignIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      signInSuccessUrl: '/dashboard',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          console.log(authResult)
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        }
      }
    };
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    );
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render() {

    return (
      <FirebaseContext.Consumer>
        {value => {     
          return(
            <div>
             <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={value.auth}/>
          </div>
          )
        }}
        
      </FirebaseContext.Consumer>
      )

      }
}

export default SignIn


//   <input
          //     name="username"
          //     type="email"
          //     value={this.state.username}
          //     onChange={this.handleChange}
          //   />
          //   <input
          //     name="password"
          //     type="password"
          //     value={this.state.password}
          //     onChange={this.handleChange}
          //   />
          //   <button type="submit" onClick={() => firebaseContext.signInWithEmailAndPassword(this.state.username, this.state.password)}>Sign In</button>
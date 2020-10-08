/*import React, {Component} from 'react'
import './App.css'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"



class App extends Component {
  constructor(){
    super();    
    this.state = {
      isSignedIn: false
    }
  }

  
firebaseConfig = {
  apiKey: "AIzaSyAaxyFllQke803zcefgcZE34rbxw7tY4G0",
  authDomain: "ayurvedic-online.firebaseapp.com",
  databaseURL: "https://ayurvedic-online.firebaseio.com",
  projectId: "ayurvedic-online",
  storageBucket: "ayurvedic-online.appspot.com",
  messagingSenderId: "445408106182",
  appId: "1:445408106182:web:5cabe5526bcf164afba9c7",
  measurementId: "G-NFXF2H3CES"
} 

  uiConfig = {
    signInFlow : "popup",
    signInOptions:[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () =>{    
    firebase.InitializeApp(this.firebaseConfig)
    firebase.auth.onAuthStateChanged(
      user=>{
        this.setState({
          isSignedIn : !(user == null)
        })
      }
    )
  }

  render()
  {
    return(
      <div className='App'>
        {this.state.isSignedIn ? 
          ('User is signed in!') : 
          (<StyledFirebaseAuth uiConfig = {this.uiConfig} firebaseAuth={firebase.auth()}></StyledFirebaseAuth>)
        }
      </div>
    )
  }
}

export default App; */
import React, {Component} from 'react'
import './App.css'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


// Configure Firebase.
const config = {
  apiKey: "AIzaSyAaxyFllQke803zcefgcZE34rbxw7tY4G0",
  authDomain: "ayurvedic-online.firebaseapp.com",
  // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
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

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}

/*
class App extends Component {
  constructor(){
    super();    
    this.state = {
      isSignedIn: false
    }
  }

  
firebaseConfig = {
  apiKey: "AIzaSyAaxyFllQke803zcefgcZE34rbxw7tY4G0",
  authDomain: "ayurvedic-online.firebaseapp.com",
  databaseURL: "https://ayurvedic-online.firebaseio.com",
  projectId: "ayurvedic-online",
  storageBucket: "ayurvedic-online.appspot.com",
  messagingSenderId: "445408106182",
  appId: "1:445408106182:web:5cabe5526bcf164afba9c7",
  measurementId: "G-NFXF2H3CES"
} 

  uiConfig = {
    signInFlow : "popup",
    signInOptions:[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () =>{    
    firebase.InitializeApp(this.firebaseConfig)
    firebase.auth.onAuthStateChanged(
      user=>{
        this.setState({
          isSignedIn : !(user == null)
        })
      }
    )
  }

  render()
  {
    return(
      <div className='App'>
        {this.state.isSignedIn ? 
          ('User is signed in!') : 
          (<StyledFirebaseAuth uiConfig = {this.uiConfig} firebaseAuth={firebase.auth()}></StyledFirebaseAuth>)
        }
      </div>
    )
  }
}*/

export default App;


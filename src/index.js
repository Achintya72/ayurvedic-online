import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Firebase, FirebaseContext, UserContextProvider } from './Utils';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </FirebaseContext.Provider>
  ,
  document.getElementById('root')
);


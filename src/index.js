import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseContextProvider } from './Utils';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <FirebaseContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseContextProvider>,
  document.getElementById('root')
);


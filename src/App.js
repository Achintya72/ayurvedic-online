
import React, {useState, useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Landing from './Landing';
import { SignIn, PrivateRoute } from './Auth';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';
import {Dashboard} from './Dashboard'
import { FirebaseContext } from './Utils';


function App() {

    return (
        <FirebaseContext.Consumer>

            {
                value =>
                {
                    return(
                    <ThemeProvider theme={theme}>
                    <div>
                        <Navigation />
                        <br />
                        <Switch>
                            <Route exact path='/' component={Landing} />
                            <Route path='/signin' component={SignIn} />
                            <Route path='/dashboard' component={Dashboard} />
                        </Switch>
                    </div>
                    </ThemeProvider>)
                }
            }

        </FirebaseContext.Consumer>
    )
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Landing from './Landing';
import { SignIn, SignUp } from './Auth';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';


function App() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                </Switch>
            </div>
        </ThemeProvider>
    )
}

export default App;
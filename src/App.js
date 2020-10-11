
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Landing from './Landing';
import { SignIn, SignUp } from './Auth';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#151515'
        },
        secondary: {
            main: '#FFFFFC'
        },
        success: {
            main: '#768948'
        }

    },
    typography: {
        body1: {
            fontFamily: [
                'Montserrat'
            ],
            fontSize: '17pt'
        },
        button: {
            fontFamily: [
                'Hind'
            ],
            fontWeight: '400',
            fontSize: '12pt'
        }
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Navigation />
                <br />
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/signin' component={SignIn} />
                </Switch>
            </div>
        </ThemeProvider>
    )
}

export default App;
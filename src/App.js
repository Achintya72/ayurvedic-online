
import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation, { ProtectedRoute } from './Navigation';
import Landing from './Landing';
import { SignIn, SignUp } from './Auth';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';
import Dashboard  from './Dashboard';
import { UserContext } from './Utils';
import Meet from './Meet';
import Account from './Account';


function App() {
    const userContext = useContext(UserContext);
    const SignedInCondition = userContext.user.name !== null;
    console.log(SignedInCondition);
    return (
        <ThemeProvider theme={theme}>
            <div style={{height: '100%'}}>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <ProtectedRoute path='/dashboard' condition={SignedInCondition} component={Dashboard} />
                    <ProtectedRoute path='/meet' condition={userContext.user.hasFilledOutForms === true} component={Meet} />
                    <ProtectedRoute path='/account' condition={SignedInCondition} component={Account} />
                </Switch>
            </div>
        </ThemeProvider>
    )
}

export default App;
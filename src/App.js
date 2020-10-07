import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navigation from './Navigation';
import Landing from './Landing';
import {SignIn, SignUp} from './Auth';

function App() {
    return(
        <div>
            <Navigation />
            <br/>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/signin' component={SignIn} />
            </Switch>
        </div>
    )
}

export default App;
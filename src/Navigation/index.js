import React, { useContext, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import ProtectedRoute from './protectedRoute';
import { UserContext, FirebaseContext } from '../Utils';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    },
    button: {
        color: grey[50]
    }
}))

function Navigation({ history }) {
    const classes = useStyles();
    const user = useContext(UserContext).user;
    const firebase = useContext(FirebaseContext);

    const handleClick = useCallback(async () => {
        try {
            await firebase.signOut();
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    })
    const elements = user.name !== null ? (
        <>
            <Button className={classes.button} href="/dasboard">Dashboard</Button>
            <Button className={classes.button} href="/account">Account</Button>
            { user.hasFilledOutForms ?
            <Button className={classes.button} href="/meet">Meet</Button> : null}
            <Button className={classes.button} onClick={handleClick}>Sign Out</Button>
        </>
    ) : (
        <>
            <Button className={classes.button} href="/signin">Sign In</Button>
        </>
    );
    return (
        <>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography className={classes.title}>Ayurvedic Online</Typography>
                    <Button className={classes.button} href="/">Home</Button>
                    <Button className={classes.button} href="/reviews">Reviews</Button>
                    {elements}
                </Toolbar>

            </AppBar>
        </>
    )
}
export default withRouter(Navigation);
export {ProtectedRoute};
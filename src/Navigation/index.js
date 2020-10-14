import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import { FirebaseContext } from '../Utils';

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


export default function Navigation() {
    const classes = useStyles();

    var context = useContext(FirebaseContext);
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")

    context.auth.onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        setUser(user.displayName)
        setEmail(user.email)
      } else {
        // User not logged in or has just logged out.
        setUser("")
        setEmail("")
      }
    });
    return (
        <FirebaseContext.Consumer>
            {context =>{

                return(
                    <>
                    <AppBar position="sticky" color="primary">
                        <Toolbar>
                            <Typography className={classes.title}>Ayurvedic Online</Typography>
                            <Button className={classes.button} href="/">Home</Button>
                            <Button className={classes.button} href="/services">Our Services</Button>
                            {user !== '' ? <Button className={classes.button} href="/dashboard">Dashboard</Button>: <Button className={classes.button} href="/reviews">Reviews</Button>}                            
                            {user !== '' ? <Button className={classes.button} href="/" onClick="context.handleSignOut()">Sign Out</Button>: <Button className={classes.button} href="/signin">Sign In</Button>}
                        </Toolbar>

                    </AppBar>
                </>
                )
            }}
        </FirebaseContext.Consumer>
    )
}
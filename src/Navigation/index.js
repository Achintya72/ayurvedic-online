import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

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
    return (
        <>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography className={classes.title}>Ayurvedic Online</Typography>
                    <Button className={classes.button} href="/">Home</Button>
                    <Button className={classes.button} href="/reviews">Reviews</Button>
                    <Button className={classes.button} href="/signin">Sign In</Button>
                </Toolbar>

            </AppBar>
        </>
    )
}
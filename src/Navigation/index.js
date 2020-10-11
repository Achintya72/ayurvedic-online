import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    },
    links: {
        textDecoration: 'none',
        color: 'secondary'
    }
}))


export default function Navigation() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography className={classes.title}>Ayurvedic Online</Typography>
                    <Button color="secondary" href="/">Home</Button>
                    <Button color="secondary" href="/reviews">Reviews</Button>
                    <Button color="secondary" href="/signin">Sign In</Button>
                </Toolbar>

            </AppBar>
        </>
    )
}
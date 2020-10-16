import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import LandingPic from '../Images/LandingPic.png';

const useStyles = makeStyles((theme) => ({
    padding: {
        paddingTop: '12vw'
    },
    paddingtop: {
        paddingTop: '7vw'
    },
    heading: {
        flexGrow: 9
    },
    button: {
        flexGrow: 0.5,
        width: '30%',
        fontFamily: 'Hind',
        fontWeight: '500'
    }
}))

export default function Jumbo() {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container direction="row">
            <Grid item sm={12} className={classes.paddingtop} />
            <Grid item sm={1} />
            <Grid item container sm={10} direction="inherit">
                <Grid item container sm={6} direction="column">
                    <div className={classes.heading}>
                        <Typography variant="h1">Ayurveda Online</Typography>
                        <Typography variant="h2">Get Healthy Naturally. At home, anytime. </Typography>
                    </div>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        className={classes.button}
                        href="/signup"
                    >Get Started</Button>
                </Grid>
                <Grid item container sm={6}>
                    <img src={LandingPic} />
                </Grid>
            </Grid>
            <Grid item sm={12} className={classes.padding} />
        </Grid>
    )
}

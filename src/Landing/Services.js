import React from 'react';
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
    },
    heading: {
        color: '#FFFFFC',
        paddingTop: '7vw'
    },
    header: {
        width: '100%',
    },
    paddingTop: {
        paddingTop: '10vw'
    },
    picture: {
        margin: 'auto',
        paddingBottom: '10px'
    },
    service: {
        color: '#FFFFFC',
        textAlign: 'center',
        paddingTop: '10vw'
    },
    padding: {
        paddingTop: '12vw'
    }
}))

export default function Services() {
    const services = [
        {
            heading: 'Consult Online',
            description: 'Choose from our wide variety of verified Ayurvedic doctors to assure a quality treatment',
            img: require('../Images/Consult.png')
        },
        {
            heading: 'Medicines',
            description: 'Order all your doctor-prescribed medicines. All our medicines are natural and have no side-effects',
            img: require('../Images/Medicines.png')
        },
        {
            heading: 'Find a Doctor',
            description: 'Meet a doctor near you and get healthy fast.',
            img: require('../Images/Doctor.png')
        }
    ];
    const renderServices = services.map(service => {
        const { heading, img, description } = service;
        return (
            <ServiceCard heading={heading} img={img} description={description} key={heading} />
        )
    })
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item sm={4} />
            <Grid item container sm={4} className={classes.heading}>
                <Typography align="center" className={classes.header} variant="h1">Our Services</Typography>
            </Grid>
            <Grid item sm={4} />
            <Grid item sm={12} className={classes.paddingTop} />
            <Grid item sm={1} />
            <Grid item container spacing={2} sm={10}>
                {renderServices}
            </Grid>
            <Grid item sm={12} className={classes.padding} />
        </Grid>
    )
}
function ServiceCard(props) {
    const classes = useStyles();
    return (
        <Grid item container sm={4} className={classes.service} direction="column">
            <Grid item container><img src={props.img} className={classes.picture} alt=""/></Grid>
            <Typography variant="body2">{props.heading}</Typography>
            <Typography variant="h2">{props.description}</Typography>
        </Grid>
    )
}
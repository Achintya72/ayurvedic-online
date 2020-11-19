import { Button } from '@material-ui/core';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/styles';

const Google = withStyles((theme) => ({
    root: {
        color: '#FFFFFC',
        backgroundColor: theme.status.google,
        borderRadius: '2em',
        marginTop: '2em',
        "&:hover" : {
            backgroundColor: theme.status.google
        }
    }
}))(Button)

const Facebook = withStyles((theme) => ({
    root: {
        color: '#FFFFFC',
        backgroundColor: theme.status.facebook,
        borderRadius: '2em',
        marginTop: '1em',
        marginBottom: '2em',
        "&:hover" : {
            backgroundColor: theme.status.facebook
        }
    }
}))(Button)

const Icon = () => (
    <SvgIcon>
        <path fill="#FFFFFC" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
    </SvgIcon>
)

const GoogleButton = (props) => (
    <Google
        variant="contained"
        onClick={props.onClick}
        startIcon={<Icon />}
        className={props.buttonClass}
    >Continue With Google</Google>
)

const FacebookButton = (props) => (
    <Facebook
        variant="contained"
        onClick={props.onClick}
        startIcon={<FacebookIcon />}
        className={props.buttonClass}
    >Continue With Facebook</Facebook>
)
export { GoogleButton, FacebookButton };
import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#151515'
        },
        secondary: {
            main: '#768948'
        }

    },
    status: {
        google: '#EA4335',
        facebook: '#385695'
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
        },
        h1: {
            fontFamily: [
                'Montserrat'
            ],
            fontWeight: '700',
            fontSize: '30pt'
        },
        h2: {
            fontFamily: [
                'Hind'
            ],
            fontWeight: '300',
            fontSize: '18pt',
            paddingTop: '0.5em'
        },
        body2: {
            fontFamily: [
                'Montserrat'
            ],
            fontSize: '22pt',
            fontWeight: '400'
        },
    }
});
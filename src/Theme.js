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
        }
    }
});
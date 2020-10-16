import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../Utils';
import { Link, useHistory } from 'react-router-dom';
import { FormControl, Paper, Grid, FormHelperText, Input, InputLabel, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { GoogleButton, FacebookButton } from './Buttons';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '4em',
    width: '100%',
    textAlign: 'center'
  },
  formcontrol: {
    width: '90%',
    margin: 'auto'
  },
  input: {
    fontFamily: 'Hind',
    fontSize: '15pt'
  },
  marginTop: {
    marginTop: '2em'
  },
  header: {
    marginTop: '1em'
  },
  root: {
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: '4em'
  }
}))

export default function SignIn() {
  const history = useHistory();
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        history.push('/dashboard')
      }
    })
  })

  const [credentials, manageCredentials] = useState({
    email: '',
    password: ''
  });
  const [err, errHandler] = useState(null);
  function handleChange(event) {
    const { name, value } = event.target
    manageCredentials(prevInputData => {
      return {
        ...prevInputData,
        [name]: value
      }
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.doSignInWithEmailAndPassword(credentials.email, credentials.password)
      .catch(err => {
        errHandler(err.message);
      })

  }
  const signInWithGoogle = () => {
    firebase.signInWithGoogle();
  }
  const signInWithFacebook = () => {
    firebase.signInWithFacebook()
  }
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item sm={4} />
      <Grid item container sm={4}>
        <Paper className={classes.paper}>
          <Grid container direction="column" className={classes.formcontrol}>
            <Typography variant="h1" className={classes.header}>Sign In</Typography>
            <FormControl>
              <InputLabel htmlFor="email" ><Typography variant="button">Email Address</Typography></InputLabel>
              <Input
                name="email"
                id="email"
                type="email"
                aria-describedby="my-helper-text"
                value={credentials.email}
                required
                className={classes.input}
                onChange={handleChange} />
              <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="password"><Typography variant="button"> Password </Typography></InputLabel>
              <Input
                name="password"
                id="password"
                type="password"
                aria-describedby="my-helper-text"
                value={credentials.password}
                required
                onChange={handleChange} />
              <FormHelperText id="my-helper-text"></FormHelperText>

            </FormControl>
            <Button onClick={handleSubmit} variant="contained" color="primary">Sign Up</Button>
            <Typography variant="button">{err && err}</Typography>
            <Typography className={classes.marginTop} variant="button">OR</Typography>
            <hr size="2px" color="#151515" width="100%" />
            <GoogleButton onClick={signInWithGoogle} />
            <FacebookButton onClick={signInWithFacebook} />
            <Typography variant="button">Don't Have an Account? <Link to="/signup">Sign Up</Link></Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import CircleChecked from '@mui/icons-material/CheckCircleOutline';
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import { register } from '../../utils/xino-api';

export default function RegisterPage() {
  const paperStyle = { padding: '20px 20px', width: 850, margin: '20px ' };

  const [state, setstate] = useState({
    username: 'jamesbond007',
    gender: 'male',
    email: '',
    password: '',
  });

  React.useEffect(() => {
    console.log('signdata', state);
  }, [state]);

  const useStyles = makeStyles({
    typography: {
      color: '#111',
      fontSize: '27.36px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    typography1: {
      marginTop: '25px',
      color: '#71717a',
      fontSize: '19px',

      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    textField: {
      display: 'flex',
      marginTop: '20px',
      width: '100%',

      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#f3f4f6',
    },
    signUpButton: {
      marginTop: '20px',
      color: 'primary',
      fontSize: '20px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      borderRadius: '12px',
    },
    checkbox: {
      marginTop: '20px',
      color: 'primary',
      fontSize: '14px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      borderRadius: '10px',
    },
    loginButton: {
      marginTop: '20px',

      color: 'primary',
      fontSize: '20px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      marginLeft: '7px',
      fontWeight: 'bold',
    },
    img: {
      backgroundColor: '#fef1f6',
      width: '100',
    },
    root: {
      '&$focused $notchedOutline': {
        borderColor: '#bfdbfe',
        borderWidth: '4px',
      },
    },
    focused: {},
    notchedOutline: {},
  });
  const classes:any = useStyles();
  const userData = async (e:any) => {
    const formData = new FormData();
    formData.append('v', '1.0');
    formData.append('server_key', '1312a113c58715637a94437389326a49');
    formData.append('username', state.username);
    formData.append('email', state.email);
    formData.append('password', state.password);
    formData.append('confirm_password', state.password);
    formData.append('gender', state.gender);

    try {
      const reg = await register(formData);
      console.log('reggg', reg);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={classes.main}>
      <Container maxWidth="sm">
        <Paper elevation={2} style={paperStyle}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography className={classes.typography}>Join</Typography>
              <Typography className={classes.typography1}>Email</Typography>
              <TextField
                className={classes.textField}
                onChange={(e) => {
                  setstate({ ...state, email: e.target.value });
                }}
                InputProps={{
                  classes: {
                    root: classes.root,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                placeholder="yourstruly@example.com"
                variant="outlined"
              />
              <Typography className={classes.typography1}>Password</Typography>
              <TextField
                onChange={(e) => {
                  setstate({ ...state, password: e.target.value });
                }}
                className={classes.textField}
                InputProps={{
                  classes: {
                    root: classes.root,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                type="password"
                variant="outlined"
              />
              <br />
              <Grid container>
                <Checkbox
                  className={classes.checkbox}
                  icon={<CircleUnchecked />}
                  color="primary"
                  checkedIcon={<CircleChecked />}
                />{' '}
                <Typography className={classes.typography1}>Sync my Youtube channel</Typography>
              </Grid>
              <Button href="#" variant="contained" color="primary" className={classes.signUpButton} onClick={userData}>
                Sign up
              </Button>
              <Button color="primary" className={classes.loginButton}>
                Log in
              </Button>
              <br />

              <Typography className={classes.typography1}>
                By creating an account, you agree to our terms and confirm you&apos;re over the age of 13.
              </Typography>
              <br />
            </Grid>
            <div className={classes.img}>
              <Grid item xs={6}>
                <img alt="" src="https://cdn.lbryplayer.xyz/speech/odysee-sign-up:d.png" />
              </Grid>
            </div>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

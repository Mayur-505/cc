import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Forgot from '../Forgot/index'

import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../utils/xino-api'
import { loginuser } from '../../Redux/action';
import { useHistory } from 'react-router-dom';


export default function SignIn() {
  const [values, setvalues] = React.useState({
    email: '',
    password: '',
    authError: ''
  });
  const [isForget, setisForget] = React.useState(false);
  const dispatch = useDispatch();
  const history =useHistory()
  // const dispatch = useDispatch();

  const paperStyleinner = {
    justifyContent: 'space-between',
  };
  const useStyles: any = makeStyles({
    paperStyle: {
      boxShadow: 'none',
      border: '1px solid #ededed',
      margin: '0',
    },
    typography: {
      color: '#111',
      marginTop: '15px',
      fontSize: '27.66px',
      fontWeight: 'bold',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    typography1: {
      color: '#71717a',
      marginTop: '15px',
      fontSize: '16px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    textField: {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
      border: 'none',
      outline: 'none',
    },
    signUpButton: {
      marginTop: '20px',
      fontSize: '16px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      // fontWeight: 'bold',
      color: 'primary',
    },
    loginButton: {
      marginTop: '20px',
      background: 'secondry',
      color: 'primary',
      fontSize: '16px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      borderRadius: '10px',
      marginLeft: '7px',
      // fontWeight: 'bold',
    },
    img: {
      backgroundColor: '#fef1f6',
      borderTopRightRadius: '15px',
      borderBottomRightRadius: '15px',
    },
    input: {
      padding: '0px'
    },
    err:{
      backgroundColor:'#fcafca',
      color:'#991b1b',
      padding:'8px',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:'16px'
   
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
  const classes = useStyles();

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('v', '1.0');
    formData.append('server_key', '1312a113c58715637a94437389326a49');
    formData.append('password', values.password);
    formData.append('username', values.email);
    // dispatch(loginData(values))

    try {
      const res = await login(formData)
      if (res && res.data.success_type === 'logged_in') {
        setvalues({ ...values, authError:'' })
        dispatch(loginuser({
          'username': values.email,
          'userId': res.data.data.user_id,
          'auth': true
        }))

        history.push('/')
      }
      else {
        setvalues({ ...values, authError: res.data.errors.error_text })
        dispatch(loginuser({
          'username': undefined,
          'userId': undefined,
          'auth': false
        }))
      }
    } catch (error) {
      console.error("error", error);
    }

  }
 
  if(!isForget){
  return (
    <>
      <div>
        <div className={classes.main}>
          <Container>
            <Paper className={classes.paperStyle} >
              <Grid container style={paperStyleinner} >
                <Grid xs={12} lg={6} style={{ padding: '16px' }}>
                  <Typography className={classes.typography}>
                    Log in to Xinotube
                  </Typography>
                  <form onSubmit={(e) => handleOnSubmit(e)}>
                    <Typography className={classes.typography1}>Email</Typography>
                    <TextField
                      className={classes.textField}
                      placeholder="yourstruly@gmail.com"
                      name="email"
                      onChange={(e) => { setvalues({ ...values, email: e.target.value }) }}
                      InputProps={{
                        classes: {
                          root: classes.root,
                          focused: classes.focused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                      variant="outlined"
                    />
                    <Typography className={classes.typography1}>Password</Typography>
                    <TextField
                      className={classes.textField}
                      type="password"
                      name="password"
                      onChange={(e) => { setvalues({ ...values, password: e.target.value }) }}
                      InputProps={{
                        className: classes.input,

                        classes: {
                          root: classes.root,
                          focused: classes.focused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                      variant="outlined"
                    />
                    <br />
                    <div onClick={() => setisForget(!isForget)}>
                      <Link>Forgot Password?</Link>                  
                      </div>
                   
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.loginButton}
                    >
                      Sign In
                    </Button>
                    <Button onClick={()=>{history.push('/signup')}} color="primary" className={classes.signUpButton}>sign Up</Button>
                  
                  </form>
                  <br/>
                  {values.authError &&
                      <div className={classes.err}>
                        <Typography className={classes.err}>
                          {values.authError}
                        </Typography>
                      </div>
                    }
                </Grid>
                <Grid item xs={12} lg={6}>
                  <div className={classes.img}>
                    <img
                      alt=""
                      src="https://cdn.lbryplayer.xyz/speech/odysee-sign-up:d.png"
                    />
                  </div>
                </Grid>

              </Grid>
            </Paper>
          </Container>
        </div>
      </div>
      <style>
        {
          `
          .MuiInputBase-input {
            padding: 12px 12px ;
            border-radius: 10px;
        }
          `
        }
      </style>
    </>
  );
}
else{
  return <Forgot />
}
}

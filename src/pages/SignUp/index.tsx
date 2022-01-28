import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import {
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Forgot from '../Forgot/index'
import Checkbox from '@mui/material/Checkbox';
import CircleChecked from '@mui/icons-material/CheckCircleOutline';
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginuser } from '../../Redux/action';
import { register } from '../../utils/xino-api'

export default function RegisterPage() {
  const [values, setvalues] = React.useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    authError: ''
  });
  const [isForget, setisForget] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory()

  const useStyles: any = makeStyles(theme => ({
    paperStyle: {
      boxShadow: 'none',
      border: '1px solid #ededed',
      margin: '0',
    },
    paperStyleinner: {
      justifyContent: 'space-between',
      // [theme.breakpoints.up('sm')]: {
      //   width: '100%',
      //   backgroundColor:'red'
      // },
      // [theme.breakpoints.up('md')]: {
      //   width: '80%',
      //   backgroundColor:'red'
      // },
      // [theme.breakpoints.up('lg')]: {
      //   width: 'auto',
      //   backgroundColor:'red'
      // },
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
    typography2: {
      color: '#71717a',
      marginTop: '9px',
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
    loginButton: {
      marginTop: '20px',
      fontSize: '16px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      // fontWeight: 'bold',
      color: 'primary',
    },
    signUpButton: {
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
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
  }));
  const classes = useStyles();/*  */

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('v', '1.0');
    formData.append('server_key', '1312a113c58715637a94437389326a49');
    formData.append('username', values.username);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('confirm_password', values.confirm_password);

    try {
      const res = await register(formData)
      if (res && res.data.success_type === 'registered') {
        setvalues({ ...values, authError: '' })
        dispatch(loginuser({
          'username': values.username,
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

    // dispatch(loginData(values))

  }
  const handleOnChange = (e: any) => {
    e.persist()
    setvalues((value) => ({ ...value, [e.target.name]: e.target.value }));

  }

  return (
    <>
      <div>
        <div className={classes.main}>
          <Container>
            <Paper className={classes.paperStyle}>
              <Grid container className={classes.paperStyleinner} >
                <Grid xs={12} lg={6} style={{ padding: '16px' }}>
                  <Typography className={classes.typography}>
                    Join
                  </Typography>
                  <form onSubmit={(e) => handleOnSubmit(e)}>
                    <Typography className={classes.typography1}>Username</Typography>
                    <TextField
                      className={classes.textField}
                      name="username"
                      placeholder="Enter Your UserName"
                      onChange={handleOnChange}
                      InputProps={{
                        classes: {
                          root: classes.root,
                          focused: classes.focused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                      variant="outlined"
                    />
                    <Typography className={classes.typography1}>Email</Typography>
                    <TextField
                      className={classes.textField}
                      name="email"
                      placeholder="Enter Your Email"
                      onChange={handleOnChange}
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
                      placeholder="Enter Your Password"
                      onChange={handleOnChange}
                      // onChange={(e)=>{setstate({...state,password:e.target.value})}}
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
                    <Typography className={classes.typography1}>Confirm Password</Typography>
                    <TextField
                      className={classes.textField}
                      type="password"
                      name="confirm_password"
                      onChange={handleOnChange}
                      placeholder="Confirm Your Password"
                      // onChange={(e)=>{setstate({...state,password:e.target.value})}}
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

                    <Typography className={classes.typography1}>Gender</Typography>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />


                    </RadioGroup>

                    <Grid container>
                      <Checkbox
                        className={classes.checkbox}
                        icon={<CircleUnchecked />}
                        color="primary"
                        checkedIcon={<CircleChecked />}
                      />{' '}
                      <Typography className={classes.typography2}>
                        Sync my Youtube channel
                      </Typography>
                    </Grid>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.loginButton}
                    >
                      Sign Up
                    </Button>
                    <Button onClick={() => { history.push('/signin') }} color="primary" className={classes.signUpButton}>Sign In</Button>
                    <Typography className={classes.typography1}>
                      By creating an account, you agree to our terms and confirm
                      you&apos;re over the age of 13.
                    </Typography>
                    <br/>
                  </form>
                  {values.authError &&
                      <div className={classes.err}>
                        <Typography className={classes.err}>
                          {values.authError}
                        </Typography>
                      </div>
                    }
                </Grid>
                <Grid className={classes.img} item xs={12} lg={6}>
                    <img
                      alt=""
                      src="https://cdn.lbryplayer.xyz/speech/odysee-sign-up:d.png"
                    />
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
        .MuiCheckbox-root {
          padding-left : 0px;
        }
          `
        }
      </style>
    </>
  );
}



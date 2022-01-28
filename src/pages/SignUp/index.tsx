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
import Checkbox from '@mui/material/Checkbox';
import CircleChecked from '@mui/icons-material/CheckCircleOutline';
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



export default function RegisterPage() {
  const [values, setvalues] = React.useState({});
  const [isForget, setisForget] = React.useState(false);
  // const dispatch = useDispatch();
  const paperStyle: any = {

    width: '850px',
    boxShadow: 'none',
    border: '1px solid #ededed',
    margin: '0',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',


  };

  const paperStyleinner = {
    justifyContent: 'space-between',
  };
  const useStyles: any = makeStyles({
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
    signUpButton: {
      marginTop: '20px',
      fontSize: '16px',
      fontFamily:
        'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: 'bold',
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
      fontWeight: 'bold',
    },
    img: {
      backgroundColor: '#fef1f6',
      borderTopRightRadius: '15px',
      borderBottomRightRadius: '15px',
    },
    input: {
      padding: '0px'
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

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    console.log(values)
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
          <Container maxWidth="sm">
            <Paper style={paperStyle}>
              <Grid container style={paperStyleinner} >
                <Grid xs={12} lg={6} style={{ padding: '16px' }}>
                  <Typography className={classes.typography}>
                     Join
                  </Typography>
                  <form onSubmit={(e) => handleOnSubmit(e)}>
                  <Typography className={classes.typography1}>Username</Typography>
                    <TextField
                      className={classes.textField}
                      
                      name="username"
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
                      <FormControl>
                      <Typography className={classes.typography1}>Gender</Typography>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
       
        
      </RadioGroup>
    </FormControl>
                       
                    <br/>
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
                      Log in
                    </Button>
                    <Button color="primary" className={classes.signUpButton}>sign Up</Button>
                    <Typography className={classes.typography1}>
                By creating an account, you agree to our terms and confirm
                you&apos;re over the age of 13.
              </Typography>
                  </form>
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



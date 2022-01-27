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



  export default function SignIn() {
    const [values, setvalues] = React.useState({});
    // const dispatch = useDispatch();
    const paperStyle:any = {
      padding: '10px 10px',
      width: '850px',
      margin: '0',
      position: 'absolute',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
    const useStyles:any = makeStyles({
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
  
    const handleOnSubmit = (e:any) => {
      e.preventDefault()
      console.log(values)
      // dispatch(loginData(values))
    }
    const handleOnChange = (e:any) => {
      e.persist()
      setvalues((value) => ({ ...value, [e.target.name]: e.target.value }));
  
    }
    return (
      <div>
        <div className={classes.main}>
          <Container maxWidth="sm">
            <Paper elevation={2} {...paperStyle} style={paperStyle}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography className={classes.typography}>
                    Log in to Xinotube
                  </Typography>
                  <form onSubmit={(e) => handleOnSubmit(e)}>
                    <Typography className={classes.typography1}>Email</Typography>
                    <TextField
                      className={classes.textField}
                      placeholder="yourstruly@gmail.com"
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
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.loginButton}
                    >
                      Log in
                    </Button>
                    <Button color="primary" className={classes.signUpButton}>sign Up</Button>
                  </form>
                </Grid>
  
                <div className={classes.img}>
                  <Grid item xs={6}>
                    <img
                      alt=""
                      src="https://cdn.lbryplayer.xyz/speech/odysee-sign-up:d.png"
                    />
                  </Grid>
                </div>
              </Grid>
            </Paper>
          </Container>
        </div>
      </div>
    );
  }
  
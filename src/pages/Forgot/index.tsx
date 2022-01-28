import {
    Button,
    Container,
    Grid,
    TextField,
    Typography,
  } from '@mui/material';
  import { makeStyles } from '@mui/styles';


  import React,{ useState  } from 'react';
  import Paper from '@mui/material/Paper';

//   import { useDispatch } from 'react-redux';
//   import { loginData } from './action';
  import Link from '@mui/material/Link';

  import Divider from '@mui/material/Divider';
//   import { reset_password } from '../../utils/xino-api';
  export default function Forgot() {
    const [values, setvalues] = React.useState({});
    const [state,setstate]= useState({
        email:'admin123456789xyzuhn7uyhnj',
       
    
      })
    const paperStyle:any = {
        padding: '10px 10px',
      width: '400px',
      boxShadow: 'none',
      position: 'absolute',
      border: '1px solid #ededed',
      margin: '0',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
    const useStyles = makeStyles({
      typography: {
        color: '#111',
        marginTop: '15px',
        fontSize: '24.66px',
        fontFamily:
          'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      },
      typography1: {
        color: '#71717a',
        marginTop: '15px',
        fontSize: '14px',
        fontFamily:
          'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      },
   
      textField: {
      
        marginTop: '10px',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#f3f4f6',
      },
     
      loginButton: {
        marginTop: '20px',
        background: 'secondry',
        color: 'primary',
        fontSize: '13px',
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
    // const resetPassword = async(e)=>{
       
    //       const formData = new FormData()
    //       formData.append('v', '1.0');
    //       formData.append('server_key', '1312a113c58715637a94437389326a49');
    //       formData.append('username', state.email);
         
        
      
    //       try {
    //       const reg = reset_password(formData)
          
    //       }
    //       catch (err) {
    //         console.error(err)
    //       }
    //   }
    return (
        <>
      <div>
        <div>
          <Container maxWidth="sm">
            <Paper elevation={2} style={paperStyle}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className={classes.typography}>
                   Reset your password
                  </Typography>
                
                  <div>  <Divider/></div>
                  <form onSubmit={(e) => handleOnSubmit(e)}>
                    <Typography className={classes.typography1}>Email</Typography>
                    <TextField
                      className={classes.textField}
                      name="email"
                      onChange={(e)=>{setstate({...state,email:e.target.value})}}
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
                    //   onClick={resetPassword}
                    >
                     Reset Password
                    </Button>
                    <Button
                      type="submit"
                      color="primary"
                      className={classes.loginButton}
                    >
                    Cancel
                    </Button>
                  </form>
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
           padding: 10px 10px ;
           border-radius: 10px;
       }
         `
       }
     </style>
     </>
    );
  }
  
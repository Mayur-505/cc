import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { loginuser } from '../../Redux/action';

const SignOut = () => {

    const history = useHistory()
    const dispatch = useDispatch()

   useEffect(() => {
     dispatch(loginuser({
      'username': null,
      'userId': null,
      'auth': false
     }))
     history.push('/signin')
    }, []);
    
  return <></>;
};

export default SignOut;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/bankingActions';
import { Button } from 'react-bootstrap';

const Auth = () => {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  const loginType = useSelector((state) => state.auth.islogin);
  return (
    <div>
      <Button variant='primary' onClick={handleLogin}>
        {loginType ? 'login' : 'logout'}{' '}
      </Button>
    </div>
  );
};

export default Auth;

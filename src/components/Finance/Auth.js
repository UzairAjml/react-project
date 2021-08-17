import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/bankingActions';

const Auth = () => {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  const loginType = useSelector((state) => state.auth.islogin);
  return (
    <div>
      <button className='btn btn-primary' onClick={handleLogin}>
        {loginType ? 'login' : 'logout'}{' '}
      </button>
    </div>
  );
};

export default Auth;

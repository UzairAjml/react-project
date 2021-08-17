import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deposit,
  interest,
  del,
  withdraw,
  accType,
} from '../../actions/bankingActions';

const Banking = () => {
  const dispatch = useDispatch();
  const [ammount, setAmmount] = useState(0);

  const handleDeposite = (e) => {
    e.preventDefault();

    dispatch(deposit(ammount));
  };
  const handleWidraw = (e) => {
    e.preventDefault();
    dispatch(withdraw(ammount));
  };
  const handleInterest = (e) => {
    e.preventDefault();
    dispatch(interest(ammount));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(del());
  };
  const handleType = (e) => {
    e.preventDefault();
    dispatch(accType());
  };

  return (
    <div>
      <form className='form-group'>
        <input
          type='number'
          className='form-control'
          value={ammount}
          onChange={(e) => {
            setAmmount(e.target.value);
          }}
        ></input>
        <button className='btn btn-primary' onClick={handleDeposite}>
          Deposit
        </button>
        <button className='btn btn-success' onClick={handleWidraw}>
          Withdraw
        </button>
        <button className='btn btn-secondary' onClick={handleInterest}>
          Collect Interest
        </button>
        <button className='btn btn-danger' onClick={handleDelete}>
          Delete Account
        </button>
        <button className='btn btn-warning' onClick={handleType}>
          Change Acccount Type
        </button>
      </form>
    </div>
  );
};

export default Banking;

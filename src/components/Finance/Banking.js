import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deposit,
  interest,
  del,
  withdraw,
  accType,
} from '../../actions/bankingActions';
import { Button, Form } from 'react-bootstrap';

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
      <Form>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            value={ammount}
            onChange={(e) => {
              setAmmount(e.target.value);
            }}
            placeholder='Resut will Appear here'
          />
        </Form.Group>

        <Button variant='primary' onClick={handleDeposite}>
          Deposit
        </Button>
        <Button variant='success' onClick={handleWidraw}>
          Withdraw
        </Button>
        <Button variant='secondary' onClick={handleInterest}>
          Collect Interest
        </Button>
        <Button variant='danger' onClick={handleDelete}>
          Delete Account
        </Button>
        <Button variant='warning' onClick={handleType}>
          Change Acccount Type
        </Button>
      </Form>
    </div>
  );
};

export default Banking;

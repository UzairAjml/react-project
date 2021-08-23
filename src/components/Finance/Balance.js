import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const balance = useSelector((state) => state.banking.balance);

  console.log(balance);
  return (
    <div>
      <h1 id='acc-balance'>${balance}</h1>
    </div>
  );
};

export default Balance;

import React from 'react';
import AccStatus from './Finance/AccStatus';
import Auth from './Finance/Auth';
import Balance from './Finance/Balance';
import Banking from './Finance/Banking';

const Finance = () => {
  return (
    <div>
      <Auth />
      <Balance />
      <Banking />
      <AccStatus />
    </div>
  );
};

export default Finance;

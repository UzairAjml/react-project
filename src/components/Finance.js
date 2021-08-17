import React from 'react';
import AccStatus from './Finance/AccStatus';
import Auth from './Finance/Auth';
import Balance from './Finance/Balance';
import Banking from './Finance/Banking';
import '../App.css';

const Finance = () => {
  return (
    <div id='finance'>
      <Auth />
      <Balance />
      <Banking />
      <AccStatus />
    </div>
  );
};

export default Finance;

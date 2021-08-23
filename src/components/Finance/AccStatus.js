import React from 'react';
import { useSelector } from 'react-redux';
import '../../App.css';

const AccStatus = () => {
  const type = useSelector((state) => state.banking.isType);
  // console.log(type);
  return (
    <div>
      {<h1 id='acc-status'>{type ? 'Current Account' : 'Saving Account'}</h1>}
    </div>
  );
};

export default AccStatus;

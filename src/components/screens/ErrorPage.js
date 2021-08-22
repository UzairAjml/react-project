import React from 'react';

const ErrorPage = () => {
  return (
    <div id='container-error'>
      <img
        id='img-error'
        src='https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=600&name=shutterstock_774749455.jpg'
        alt='Oops...!!'
      />
      <div id='info'>
        <h3 style={{ color: 'red' }}>This page could not be found</h3>
      </div>
    </div>
  );
};

export default ErrorPage;

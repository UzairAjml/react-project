import React from 'react';
import '../../App.css';

const About = () => {
  return (
    <div>
      <table
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '2.5rem',
          marginTop: '2rem',
        }}
      >
        <tr
          style={{
            marginTop: '3rem',
          }}
        >
          <th className='heading-about'>Developed By: </th>
          <th className='names-about'>M.Uzair</th>{' '}
        </tr>
        <tr
          style={{
            marginTop: '3rem',
          }}
        >
          <th className='heading-about'>Supervised By: </th>
          <th className='names-about'>Khadija Noor </th>{' '}
        </tr>
        <tr
          style={{
            marginTop: '3rem',
          }}
        >
          <th className='heading-about'>Special Thanks to: </th>
          <th className='names-about'>Ali Hassan & Abdullah Islam</th>{' '}
        </tr>
      </table>
    </div>
  );
};

export default About;

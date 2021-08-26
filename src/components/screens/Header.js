import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { darkMode } from '../../actions/darkMode';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../App.css';

const Header = () => {
  const isDark = useSelector((state) => state.mode.isDark);

  const dispatch = useDispatch();

  const handleDarkMode = () => {
    if (isDark === 'light') {
      window.localStorage.setItem('mode', 'dark');

      dispatch(darkMode('dark'));
    } else {
      window.localStorage.setItem('mode', 'light');

      dispatch(darkMode('light'));
    }
  };

  useEffect(() => {
    const mode = window.localStorage.getItem('mode');

    if (mode) {
      dispatch(darkMode(mode));
    }
  }, []);

  return (
    <div>
      <div>
        <Navbar
          bg='dark'
          variant='dark'
          expand='lg'
          className='nav'
          fixed='top'
        >
          <Container>
            <Link to='/'>
              <Navbar.Brand>All In One</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Link to='/Support'>
                  {' '}
                  <Navbar.Brand>Customer Support</Navbar.Brand>
                </Link>
                <Link to='/About'>
                  {' '}
                  <Navbar.Brand>AboutUs</Navbar.Brand>
                </Link>
              </Nav>
              <Nav.Item>
                <label
                  style={{ color: 'white', marginTop: '0.5rem' }}
                  id='label'
                >
                  Dark Mode
                </label>
              </Nav.Item>
              <Nav.Item>
                <label className='switch'>
                  <input
                    type='checkbox'
                    checked={isDark === 'dark'}
                    onChange={handleDarkMode}
                  />
                  <span className='slider round'></span>
                </label>
              </Nav.Item>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;

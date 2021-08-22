import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { darkMode } from '../../actions/darkMode';
import '../../App.css';

const Header = () => {
  const [dark, setDark] = useState(false);

  const dispatch = useDispatch();

  const handleDarkMode = () => {
    if (!dark) {
      setDark(true);
    } else {
      setDark(false);
    }
    dispatch(darkMode(dark));
  };

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
            <Navbar.Brand href='/'>All In One</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='/Support'>Customer Support</Nav.Link>
                <Nav.Link href='/About'>AboutUs</Nav.Link>
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
                  <input type='checkbox' onClick={handleDarkMode} />
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

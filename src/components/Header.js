import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css';

const header = () => {
  return (
    <div>
      <div>
        <Navbar bg='dark' variant='dark' expand='lg' className='nav'>
          <Container>
            <Navbar.Brand href='/'>All In One</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='/Support'>Customer Support</Nav.Link>
                <Nav.Link href='/About'>AboutUs</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default header;

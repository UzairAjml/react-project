import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css';

const Footer = () => {
  return (
    <footer id='footer-color'>
      <Container id='footer'>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; AllInOne </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

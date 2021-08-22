import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Customer = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Your Complain</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
        <Button variant='primary'>Submit</Button>
      </Form>
    </div>
  );
};

export default Customer;

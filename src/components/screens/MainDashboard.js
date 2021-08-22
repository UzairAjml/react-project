import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../../App.css';
import { Link } from 'react-router-dom';
const MainDashboard = () => {
  return (
    <>
      <div className='cards'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  style={{ height: ' 12rem' }}
                  variant='top'
                  src='https://cdn.corporatefinanceinstitute.com/assets/finance-definition.jpg'
                />
                <Card.Body>
                  <Card.Title>MyBank</Card.Title>
                  <Card.Text>
                    MyBank, Pakistan’s largest bank, was the first commercial
                    bank to be established in Pakistan in 1947.
                  </Card.Text>
                  <Link to='/finance'>
                    <Button variant='warning'>Go Banking</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>

            <div className='col'>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  style={{ height: ' 12rem' }}
                  variant='top'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
                />
                <Card.Body>
                  <Card.Title>Explore React</Card.Title>
                  <Card.Text>
                    React is a library for building composable user interfaces,
                    Using SPA architectute.
                  </Card.Text>
                  <Link to='/React'>
                    <Button variant='primary'>Explore</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className='col'>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  style={{ height: ' 12rem' }}
                  variant='top'
                  src='https://cdn2.unrealengine.com/13br-evergreens-blue-newsheader-1920x1080-864336340.jpg'
                />
                <Card.Body>
                  <Card.Title>Fortnite</Card.Title>
                  <Card.Text>
                    Search Upcoming & Latest Fortnite Items and Characters.
                    Let's get started.
                  </Card.Text>
                  <Link to='/Fortnite'>
                    <Button variant='info'>Search</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;

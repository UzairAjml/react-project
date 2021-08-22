import React from 'react';
import Fortnite from './Fortnite';
import Detail from './Detail';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import ErrorPage from '../screens/ErrorPage';

const FortniteComp = () => {
  return (
    <>
      <Container>
        <Switch>
          <Route exact path='/Fortnite/' component={Fortnite} />
          <Route exact path='/Fortnite/:id' component={Detail} />
          <Route component={ErrorPage} />
        </Switch>
      </Container>
    </>
  );
};

export default FortniteComp;

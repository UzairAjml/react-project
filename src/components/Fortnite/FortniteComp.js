import React from 'react';
import Fortnite from './Fortnite';
import Detail from './Detail';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

const FortniteComp = () => {
  return (
    <>
      <Container>
        <Switch>
          <Route exact path='/Fortnite/' component={Fortnite} />
          <Route exact path='/Fortnite/:id' component={Detail} />
        </Switch>
      </Container>
    </>
  );
};

export default FortniteComp;

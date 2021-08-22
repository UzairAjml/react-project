import './App.css';
import MainDashboard from './components/screens/MainDashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/screens/Header';
import Finance from './components/screens/Finance';
import ReactSearch from './components/screens/ReactSearch';
import FortniteComp from './components/Fortnite/FortniteComp';
import Customer from './components/screens/Customer';
import About from './components/screens/About';
import Footer from './components/screens/Footer';
import ErrorPage from './components/screens/ErrorPage';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Container>
          <Switch>
            <Route path='/' component={MainDashboard} exact />
            <Route path='/Support' component={Customer} />
            <Route path='/finance' component={Finance} />
            <Route path='/React' component={ReactSearch} />
            <Route path='/Fortnite' component={FortniteComp} />
            <Route path='/About' component={About} />
            <Route component={ErrorPage} />
          </Switch>
        </Container>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

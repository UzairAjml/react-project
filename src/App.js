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
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './style/main.scss';
import './App.css';
function App() {
  const isDark = useSelector((state) => state.mode.isDark);

  useEffect(() => {
    document.body.classList = '';
    document.body.classList.add(isDark);
  }, [isDark]);
  return (
    <div className='App'>
      <Router>
        <Header />
        <Container style={{ flex: '1 0 auto' }}>
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

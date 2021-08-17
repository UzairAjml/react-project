import './App.css';
import MainDashboard from './components/MainDashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Finance from './components/Finance';
import ReactSearch from './components/ReactSearch';
import FortniteComp from './components/Fortnite/FortniteComp';
import Fortnite from './components/Fortnite/Fortnite';
import Customer from './components/Customer';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <Route path='/' component={MainDashboard} exact />
          <Route path='/Support' component={Customer} exact />
          <Route path='/finance' component={Finance} />
          <Route path='/React' component={ReactSearch} />
          <Route path='/Fortnite' component={FortniteComp} />
          <Route path='/About' component={About} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import MainDashboard from './components/MainDashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Finance from './components/Finance';
import ReactSearch from './components/ReactSearch';
import FortniteComp from './components/Fortnite/FortniteComp';
import Fortnite from './components/Fortnite/Fortnite';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <Route path='/' component={MainDashboard} exact />
          <Route path='/finance' component={Finance} />
          <Route path='/React' component={ReactSearch} />
          <Route path='/Fortnite' component={FortniteComp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';

// redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken'; 

const App = () => (
  useEffect(()=> {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={ Landing } />
        <section className='container'>
          <Switch>
            <Route exact path='/register' component={ Register } />
            <Route exact path='/login' component={ Login } />
          </Switch>
        </section>
      </Fragment>
    </Router>
    );
};

export default App;

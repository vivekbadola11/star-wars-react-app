import React, { Component } from 'react';

import './App.css';
import './styles/css/custom.css';
import 'bootstrap/dist/css/bootstrap.css';

import LoginPage from './components/login/LoginPage';
import PlanetSearchPage from './components/planet/PlanetSearchPage';
import PlanetInfo from './components/planet/PlanetInfo';

import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router history={history}>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route  path="/Login" component={LoginPage} />  
            <Route  path="/PlanetSearch" component={PlanetSearchPage} /> 
            <Route  path="/PlanetInfo" component={PlanetInfo} />  
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

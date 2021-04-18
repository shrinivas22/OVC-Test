import React, { Component } from 'react'
import './App.css';
import { Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from "history";
import TableContainer from './Containers/usercontainers';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Route exact path={"/"} component={TableContainer} />
          <Route exact path={"/home"} component={TableContainer} />
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableContainer from './Components/TableComponent';
import PostComponent from './Components/PostsComponent';


class App extends Component {
  render() {
    return (
      <div>
        <Card className="text-center">
          <Card.Header>OVC React-Redux</Card.Header>
          <Card.Body>
          <Router>
          <Switch>
            <Route exact path={"/"} component={TableContainer} />
            <Route exact path={"/posts/:name/:userID"} component={PostComponent} />
          </Switch>
          </Router>
          </Card.Body>
          <Card.Footer className="blockquote-footer">Created with Love</Card.Footer>
        </Card>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import TableContainer from './Components/TableComponent';
import PostComponent from './Components/PostsComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div test-attr="appComponent">
        <header>
          <nav className='footer mt-auto py-3 bg-dark text-white'>
            <div className='container' style={{textAlign:'center'}}>JSON API PLACE HOLDER APP - OVC</div>
          </nav>
        </header>
        <main role='main' className='flex-shrink-0'>
          <div className='container'>
            <Router>
              <Switch>
                <Route exact path={"/"} component={TableContainer} />
                <Route exact path={"/posts/:name/:userID"} component={PostComponent} />
              </Switch>
            </Router>
            
          </div>
        </main>
        <div>
          <footer className='footer mt-auto py-3 bg-dark text-white'>
            <div className='container' style={{textAlign:'center'}}>Developed with React-Redux v16.0+ </div>
          </footer>
        </div>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App ">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/notFound" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

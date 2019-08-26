import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;

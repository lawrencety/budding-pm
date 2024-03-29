import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Understand from './components/Understand';
import UnderConstruction from './components/UnderConstruction';

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
        <div className="App-content">
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={About} />
          <Route path="/what-is-product-management" component={Product} />
          <Route path="/understanding-the-company" component={Understand} />
          <Route path='/404' component={UnderConstruction} />
        </div>
      </div>
    );
  }
}

export default App;

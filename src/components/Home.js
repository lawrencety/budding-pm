import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-section">
        <h1>Budding Product Managers</h1>
        <NavLink className="nav-link" to="/what-is-product-management">What is PM?</NavLink>
      </div>
    );
  }
}

export default Home;

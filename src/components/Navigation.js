import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
        <NavLink className="nav-link" to="/what-is-product-management">What is PM?</NavLink>
        <NavLink className="nav-link sub-nav" to="/understanding-the-company">Understand</NavLink>
        <NavLink className="nav-link sub-nav" to="/create-an-opportunity-hypothesis">Hypothesize</NavLink>
        <NavLink className="nav-link sub-nav" to="/validating-your-hypothesis">Validate</NavLink>
        <NavLink className="nav-link sub-nav" to="/from-idea-to-action">Execute</NavLink>
        <NavLink className="nav-link sub-nav" to="/working-with-design">Design</NavLink>
        <NavLink className="nav-link sub-nav" to="/working-with-engineering">Build</NavLink>
        <NavLink className="nav-link sub-nav" to="/bringing-product-to-market">Market</NavLink>
        <NavLink className="nav-link sub-nav" to="/post-launch-and-learnings">Retrospect</NavLink>
        <NavLink className="nav-link" to="/about-me">About Me</NavLink>
      </div>
    );
  }
}

export default Navigation;

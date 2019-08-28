import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class UnderConstruction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-container">
        <div className="content-header">
          <h1>
            <span>Oops! Looks like this page is still</span><br></br>
            Under Construction
          </h1>
          <img className="logo" src={require("../images/budding-pm-logo.png")}></img>
        </div>
        <div className="content-section">
          <img className="figure" src={require("../images/404.png")}></img>
          <h2>We are working hard at finishing this up. Check back soon!</h2>
        </div>
      </div>
    );
  }
}

export default UnderConstruction;

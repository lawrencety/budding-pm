import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-container">
        <div className="content-header">
          <h1>
            <span>Hello World, I am</span><br></br>
            Lawrence Yen
          </h1>
          <img className="logo" src={require("../images/budding-pm-logo.png")}></img>
        </div>
        <div className="content-section">
          <div className="content-row">
            <h2>Title here</h2>
            <p>
              Content here
            </p>
          </div>
          <Link className="btn nav-btn" to="/about-me">About the Author</Link>
          <div className="content-row">
            <h2>Title here</h2>
            <p>
              Content here
            </p>
          </div>
          <Link className="btn next-btn" to="/what-is-product-management">What is a Product Manager?</Link>
        </div>
      </div>
    );
  }
}

export default About;

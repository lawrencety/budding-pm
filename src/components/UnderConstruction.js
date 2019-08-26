import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class UnderConstruction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-section">
        <div className="content-row">
          <h1>
            <span>Oops! Looks like this page is still</span><br></br>
            Under Construction
          </h1>
        </div>
      </div>
    );
  }
}

export default UnderConstruction;

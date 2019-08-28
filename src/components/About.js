import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Template extends Component {
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
          <img className="portrait" src={require("../images/lawrence-yen.jpg")}></img>
          <div className="content-row">
            <h2>Part Product, Part Dev</h2>
            <p>
              I am an experienced Product Manager with careers at startups, services firms, and large enterprises. Throughout my PM career, I focused mostly on User Experience and empathizing with customers. In my eyes, empathy is one of the most critical tools a PM can have along with communication skills. I recently finished a web development program with Bloc and am looking for my next role.
            </p>
            <p>
              You can find out more about my professional experiences at my site below.
            </p>
          </div>
          <div className="content-row">
            <h2>All Me</h2>
            <p>
              My hobbies include competitive Latin dance, cooking, and a little bit of gaming (computer and board). If I'm not in front of a computer hacking away, I can be found at dance studios throughout the Bay Area, either practicing or teaching.
            </p>
          </div>
          <a className="btn next-btn" target="_blank" href="http://www.lawrencety.com">Visit My Site</a>
        </div>
      </div>
    );
  }
}

export default Template;

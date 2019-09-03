import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-container">
        <div className="content-header">
          <h1>
            <span>A Brief Guide for the</span><br></br>
            Budding Product Manager
          </h1>
          <img className="logo" src={require("../images/budding-pm-logo.png")}></img>
        </div>
        <div className="content-section">
          <div className="content-row">
            <h2>Welcome</h2>
            <p>
              First off, thank you for your interest in my foundational guide for Product Managers. Product Managment is a relatively new occupation given the recent technology trends and user evolution and this guide is meant to serve as a starting point for those new to this field. I will try to keep all the information provided here bite-sized and as digestible as possible.
            </p>
            <p>If you would like to learn more about me, please visit my about me page below:</p>
          </div>
          <Link className="btn nav-btn" to="/about-me">About the Creator</Link>
          <div className="content-row">
            <h3>Purpose</h3>
            <p>
              This site is meant for those who are either curious about product management (whether you're a developer, design, or even CEO) or someone just starting their PM careers and would like some structure to how they execute their responsibilities. We will cover the Product Development Life Cycle and discuss tools we can use for each step along the way. Whether the product is a brand new blue-sky product or you are implementing maintenance features, this guide will be able to help you along each step.
            </p>
          </div>
          <img className="figure" src={require("../images/product-lifecycle.png")}></img>
          <div className="content-row">
            <p>
              There are many successful ways to be a Product Manager and this is by no means the best or only way. Every company, product, and team is different. So not everything discussed here may apply to your situation.
            </p>
          </div>
          <div className="content-row">
            <h3>How to Use this Site</h3>
            <p>
              This site is a pretty straightforward guide meant to serve as a step-by-step guide. The left-hand side will navigate you to each phase of the Product Development Life Cycle. This site is a work-in-progress and there will be several pages that are still under construction.
            </p>
          </div>
          <div className="content-row">
            <h3>Shout-Outs</h3>
            <p>
              As a PM it is important to give credit where credit is due. Though I come from a background of Product Managment, it would not be possible for me to create this site if not for a couple of key resources. Though created as a marketing tool, The Product Book decidely has quite a lot of information for the new PM.
            </p>
          </div>
          <Link className="btn next-btn" to="/what-is-product-management">What is a Product Manager?</Link>
        </div>
      </div>
    );
  }
}

export default Home;

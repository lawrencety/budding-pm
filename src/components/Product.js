import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-container">
        <div className="content-header">
          <h1>
            <span>What is</span><br></br>
            Product Management?
          </h1>
          <img className="logo" src={require("../images/budding-pm-logo.png")}></img>
        </div>
        <div className="content-section">
          <div className="content-row">
            <p>
              A Product Manager typically has one job, to make a product successful. This means interfacing with various teams across the company to move a product forward. Typically, these teams are the Design, Engineering, and Marketing teams. There may be others such as Sales, Customer Support, and Executives. The main goal of a PM is to communicate his/her vision of the product to each of these teams. These teams will each do their part to accomplish this vision. However, usually none of these teams report directly to the PM, making this communication and direction more of a two-way discussion and collaboration taking into account the opinions and thoughts of other teams to build a more cohesive and stronger product.
            </p>
          </div>
          <div className="content-row">
            <h2>Customer Champion</h2>
            <p>
              Working with so many teams and incorporating their feedback can lead to a loss of direction. This is where the PM can really shine. While each team represents a certain part of the product, the PM represents the customer. This means saying "No" to great ideas that doesn't actually make customers happy. The Product Manager is the customer's champion and must maintain the voice of the customer throughout the product development process.
            </p>
          </div>
          <div className="content-row">
            <h2>Prioritization</h2>
            <p>
              Being the Customer Champion doesn't necessarily mean rejecting all ideas that don't increase customer value. If your engineering team has built up significant technical debt, it may also be wise to pause adding new functions and focus on eliminating the debt. Instead, the PM must be able to understand tradeoffs and prioritize between between refactoring code vs building new features.
            </p>
          </div>
          <Link className="btn next-btn" to="/understanding-the-company">Understand the Company</Link>
        </div>
      </div>
    );
  }
}

export default Product;

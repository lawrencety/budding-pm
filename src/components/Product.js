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
            <h2>The Product Manager</h2>
            <p>
              In my definition, a Product Manager typically has one goal, to make a product successful. This goal can be done through various means and methods, but the goal is product success. Depending on the phase of a product or goal of a company, the definition of product success may vary.

              There are many types of Product Managers, but what sets great PMs apart from good ones is their soft skills. Technology, methodology, and other hard skills can be taught and learned easily. Soft skills come with experience. That is not to say technical PMs will not be successful, rather PMs with a combination of strong soft skills and hard skills will be able to produce and target their products for efficiently and effectively. Below are some of the soft skills that great Product Managers need to be successful.
            </p>
          </div>
          <img className="figure" src={require("../images/pm-triangle.png")}></img>
          <div className="content-row">
            <h3>Customer Champion</h3>
            <p>
              Ultimately, to make a product successful, the PM needs to listen to the customer rather than following every internal request. While the company and its teams has their own thoughts and opinions about a product, the PM must represent the customer. This means saying "No" to great ideas that doesn't actually make customers happy. The Product Manager is the customer's champion and must maintain the voice of the customer throughout the product development process. This guide will provide several ways a PM could gain feedback to understand the user.
            </p>
          </div>
          <div className="content-row">
            <h3>Prioritization</h3>
            <p>
              Being the Customer Champion doesn't necessarily mean rejecting all ideas that don't increase customer value. If your engineering team has built up significant technical debt, it may also be wise for the long-term to pause adding new functions and focus on eliminating the debt. Every team has limited resources and time, PMs must be able to prioritize effectively and decide what would be the bext course of action for a product would be. We will explore the tools PMs can use to make this decision.
            </p>
          </div>
          <div className="content-row">
            <h3>Communication</h3>
            <p>
              After we have figured out customer intent and the product's next steps, PMs must communicate that vision to the various teams. Typically, these teams are the Design, Engineering, and Marketing teams. There may be others such as Sales, Customer Support, and Executives. The main goal of a PM is to communicate his/her vision of the product to each of these teams. These teams will each do their part to accomplish this vision. However, usually none of these teams report directly to the PM, making this communication and direction more of a two-way discussion and collaboration taking into account the opinions and thoughts of other teams to build a more cohesive and stronger product.
            </p>
          </div>
          <div className="content-row">
            <h3>Data & Analysis</h3>
            <p>
              Leveraging data is critical for any PM to be able to understand what is going on with a product and how customers are interacting with it. Data does not only mean metrics and quantitative information, PMs must also use qualitative data such as interviews and customer feedback to build a holistic picture into customer behavior. Gathering data can be as simple as plugging in analytics tools, drawing insights is where it can get challenging.
            </p>
          </div>
          <div className="content-row">
            <h3>Technology</h3>
            <p>
              Technical expertise amoung PMs is somewhat of a controversial topic. More and more companies and leaders are saying that technical expertise is no longer required to be a successful PM. In my opinion, this is partially true. There is no need for PMs to fully understand the inner workings of each algorithm nor are they expected to design a system architecture. Instead, PMs need foundational technical knowledge to be able to communicate with developers and tech leads. Those with zero technical knowledge will struggle to define product scopes that are feasible or simply given, causing friction between the PM and development.
            </p>
          </div>
          <Link className="btn next-btn" to="/understanding-the-company">Understand the Company</Link>
        </div>
      </div>
    );
  }
}

export default Product;

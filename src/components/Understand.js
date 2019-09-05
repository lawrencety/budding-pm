import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Understand extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-container">
        <div className="content-header">
          <h1>
            <span>How to</span><br></br>
            Understand the Company
          </h1>
          <img className="logo" src={require("../images/budding-pm-logo.png")}></img>
        </div>
        <div className="content-section">
          <div className="content-row">
            <h2>Start with Why</h2>
            <p>
              The first step to understanding a company is to ask why a company exists. What is the mission and vision of the company? Understanding the company's mission is key to deciding whether or not a product idea or feature makes sense. The mission should be focused on solving a problem, a challenge that customers face and want to be solved. Simon Sinek has pioneered the concept of understanding a company's beliefs. He has a TED Talk and written a whole book, <span class="italics">Start with Why</span>, which can be great resources to understand this concept.
            </p>
            <h3>Where the Company Fits</h3>
            <p>
              Understanding the reason why a company exists is the first step to building a new product or feature. Then we can step back and understand how we achieve that mission and how what we do fits in with the core mission. This is why the reason for building a product or feature should never be "because the competition is doing it". Companies that build products or services based on what others do typically don't succeed. What PMs build must be focused around the core mission.
            </p>
          </div>
          <div className="content-row">
            <h2>Your Audience</h2>
            <p>
              Some have argued that it is even more important to start with "Who". Knowing who the audience is, knowing what challenges they face and their behavior is critical to developing products. As much as we would love to build products that everybody loves, there will never be a product like that. Even the most universal products have rival competitors each holding onto a loyal base, MacOS vs Windows vs Linux, Democrats vs Republicans, and ICE cars vs electric vehicles. No matter what product a PM builds, they must first understand who the product is speaking to and whose problems are they trying to solve.
            </p>
            <h3>Why do Companies or Products Fail?</h3>
            <p>
              Over 40% of companies surveyed attribute product or startup failure to lack of market need. This indicates a lack of a vision and an actual problem or challenge that the company is trying to solve. PMs need to understand not only the company's vision and mission, but also the target audience and customer segments. Knowing what challenges or friction the customer is facing will be much more valuable than just building a cool product.
            </p>
            <h3>Personas</h3>
            <p>
              The main tool PMs and User Researchers use to define their audience is through a persona. Personas are hypothetical people that exhibit real characteristics and behavior. They can be Executive Erica, Mommy Mary, or College Student Chris. Regardless, these are examples of people who the product will most likely be targeting. There are many different ways of building a persona, in my version, personas are created with four sections, Bio, Needs, Pains, and Goals, see figure below for examples. The Bio section contains the name, a picture/drawing, demographics, and general facts about the persona. Needs discuss what the persona needs to do on a daily basis. Pains encompass what prevents them from accomplishing their needs or goals. Lastly Goals are long term visions or the mission of the persona.
            </p>
          </div>
          <img className="figure" src={require("../images/persona-canvas.png")}></img>
          <div className="content-row">
            <p>
              Whether your product is for the consumer (B2C) or for another business (B2B), build out a persona for each of the customer segments that will be interacting with your product. These persona canvases allows PMs to imagine ourselves in the target audience's shoes, trying to go about our day to day and the problems the persona may encounter. The product or feature we decide to build should either help them with their Needs or reduce their Pains. But it should always help the persona move close to their Goal, or the "Why".
            </p>
          </div>
          <Link className="btn next-btn" to="/create-an-opportunity-hypothesis">Creating an Opportunity Hypothesis</Link>
        </div>
      </div>
    );
  }
}

export default Understand;

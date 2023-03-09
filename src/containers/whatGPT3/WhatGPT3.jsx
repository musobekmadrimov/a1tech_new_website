import React from 'react';
import Feature from '../../components/feature/Feature';
import './aboutUs.css';

const AboutUs = () => (
  <div className="gpt3__whatgpt3 section__margin" id="aboutUs">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="About A1TechGroup"
        text="We are a global company that has been working for 14 years. Our company was founded in 2009 and we started working with a team of 4 people. In the early years, we focused on our startups and tried to fill the problematic parts of the local market with our startups.
        In 4 years, we brought our biggest startups A1Cafe, A1Hotel, A1Dealer and A1Taxi to the market and successfully solved the existing problems. In the following years, we also introduced SmartSchool and A1Medical startups to the market of Uzbekistan, and these projects were well received by business owners. Currently, we offer our outsourcing services to the global market with our
        large team."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Web programming"
        text="We can offer you web applications which solves your problems. You can make your business more competitive in the market by using our web application. We are a company that specializes in developing and designing web applications for different businesses. Our team of experts has years of experience in developing and designing web applications for different types of businesses."
      />
      <Feature
        title="Mobile programming"
        text="We can make mobile applications for you. Our developers have extensive experience creating apps for mobile platforms and the latest in mobile technology. We have created many successful apps for businesses, nonprofits, and individuals. Whether you need to build an app for your business or your personal use, we will help you get started on your journey to success."
      />
      <Feature
        title="Desktop programming"
        text="We’ve got years of experience in the software industry, and we’re ready to help you realize your goals. Our team is comprised of talented developers who have worked in front-end and back-end development. We are able to build desktop applications that are both functional and visually appealing. If you have a business idea or need a new tool, let us help you build it!"
      />
    </div>
  </div>
);

export default AboutUs;

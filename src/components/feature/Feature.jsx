import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text" data-aos="fade-right" data-aos-delay="350">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;

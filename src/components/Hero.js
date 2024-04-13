import React from 'react';
import '../css/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="welcome-text">
        <h1>Welcome to Learn Kazakh!</h1>
        <p>Start your journey to mastering Kazakh today with our interactive courses.</p>
        <button className="welcome-button">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;

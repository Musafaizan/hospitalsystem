import React from 'react';
import './style.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-decor cta-decor-1"></div>
      <div className="cta-decor cta-decor-2"></div>
      <div className="cta-pattern"></div>

      <div className="cta-container">
        <div className="cta-text">
          <p className="cta-subtitle">Discover why we are the best option in the market</p>
          <h2 className="cta-title">Try HMS Software for Free</h2>
        </div>

        <a href="#demo" className="cta-button">
          <span>Try For Free</span>
          <svg
            className="cta-arrow"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
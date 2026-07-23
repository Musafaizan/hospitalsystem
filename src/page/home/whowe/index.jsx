import React from 'react';
import './style.css';
import { whoweProviders as providers, whoweSectionHeading as sectionHeading } from '../../../data/data';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 12.5L9 17.5L20 6.5"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhoWeServeSection = () => {
  return (
    <section className="serve-section">
      <div className="serve-container">
        <div className="serve-heading">
        
          <h2>
            {sectionHeading.title}<span> {sectionHeading.accent} </span>
          </h2>
          <p>{sectionHeading.description}</p>
        </div>

        <div className="serve-grid">
          {providers.map((p, index) => (
            <div className={`serve-card ${p.featured ? 'featured' : ''}`} key={index}>
              {p.featured && <div className="serve-tab">★ Recommended</div>}

              <div className="serve-punch serve-punch-1"></div>
              <div className="serve-punch serve-punch-2"></div>

              <div className="serve-card-inner">
                <span className="serve-segment">{p.segment}</span>
                <h3>{p.title}</h3>
                <p className="serve-sub">{p.subtitle}</p>

                <div className="serve-divider"></div>

                <ul className="serve-features">
                  {p.features.map((f, i) => (
                    <li key={i}>
                      <span className="serve-check">
                        <CheckIcon />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#demo" className="serve-cta">
                  <span>{p.cta}</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;


// ...
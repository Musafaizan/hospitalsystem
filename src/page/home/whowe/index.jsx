import React from 'react';
import './style.css';

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

const providers = [
  {
    segment: 'Clinic / Specialized Center',
    title: 'Growth Stack',
    subtitle: 'Perfect for single-facility centers needing unified clinical workflows.',
    features: [
      'Core EHR/EMR',
      'Patient Registry',
      'Prescriptions',
      'Lab Orders',
      'Basic Billing',
    ],
    cta: 'Start Small Today',
    featured: false,
  },
  {
    segment: 'Multispecialty Hospital',
    title: 'Enterprise Health',
    subtitle: 'Fully scalable architecture for large hospitals with high patient turnover.',
    features: [
      'Everything in Growth Stack',
      'Secure Patient Portal',
      'Full Accounting',
      'Insurance Claim Module',
      'Surgery Tracker',
      'Advanced Inventory',
    ],
    cta: 'Go Enterprise',
    featured: true,
  },
  {
    segment: 'Custom / Healthcare Network',
    title: 'Custom Ecosystem',
    subtitle: 'For multi-branch hospital networks requiring localized server hosting and AI modeling.',
    features: [
      'Dedicated Cloud/On-Premise deployment',
      'Full AI Agent Integration',
      'Custom APIs for Hardware',
      '24/7 Dedicated SLA Support',
    ],
    cta: 'Contact Our Architect',
    featured: false,
  },
];

const WhoWeServeSection = () => {
  return (
    <section className="serve-section">
      <div className="serve-container">
        <div className="serve-heading">
          <span className="serve-eyebrow">Who We Serve</span>
          <h2>
            Built for every kind of <span>care provider</span>
          </h2>
          <p>One system, indexed for how your team actually works — pick the tier that fits.</p>
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
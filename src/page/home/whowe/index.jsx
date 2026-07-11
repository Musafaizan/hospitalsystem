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
    title: 'Hospitals',
    subtitle: 'Multi-department, multi-location.',
    price: 'Custom',
    priceNote: 'Scoped to departments & beds',
    features: [
      'IPD, OPD, OT, Emergency',
      'Lab, Radiology & Pharmacy',
      'Insurance & TPA workflows',
      'HR, payroll & finance',
    ],
    cta: 'Get started',
    featured: false,
  },
  {
    title: 'Clinics',
    subtitle: 'Single & multi-specialty.',
    price: '$149',
    period: '/ month',
    priceNote: 'Per location, billed annually',
    features: [
      'Appointments & tele-consult',
      'OPD queue & prescriptions',
      'Patient recalls & CRM',
      'Package & membership billing',
    ],
    cta: 'Get started',
    featured: true,
  },
  {
    title: 'Private Practitioners',
    subtitle: 'Specialists & solo doctors.',
    price: '$49',
    period: '/ month',
    priceNote: 'For a single provider',
    features: [
      'Beautiful EHR templates',
      'e-Prescribing & lab orders',
      'Mobile-first patient app',
      'Automated follow-ups',
    ],
    cta: 'Get Started',
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
          <p>One system, indexed for how your team actually works — pick the plan that fits.</p>
        </div>

        <div className="serve-grid">
          {providers.map((p, index) => (
            <div className={`serve-card ${p.featured ? 'featured' : ''}`} key={index}>
              {p.featured && <div className="serve-tab">★ Most Popular</div>}

              <div className="serve-punch serve-punch-1"></div>
              <div className="serve-punch serve-punch-2"></div>

              <div className="serve-card-inner">
                <h3>{p.title}</h3>
                <p className="serve-sub">{p.subtitle}</p>

                <div className="serve-price-row">
                  <span className="serve-price">{p.price}</span>
                  {p.period && <span className="serve-period">{p.period}</span>}
                </div>
                <p className="serve-price-note">{p.priceNote}</p>

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
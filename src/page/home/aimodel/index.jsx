import React from 'react';
import './style.css';

import aiImage from '../../../assets/ai-model.png';

const AIModelSection = () => {
  const qaCards = [
    {
      question: 'How many staff are rostered for the night shift?',
      answer:
        '14 staff members are scheduled for tonight — 3 short of the recommended headcount for the ICU and ER wings.',
    },
    {
      question: 'What is our current bed occupancy rate?',
      answer:
        '82% occupancy across all departments. General ward is at capacity; 6 beds remain free in the surgical unit.',
    },
    {
      question: 'Are there any pending insurance claims overdue?',
      answer:
        '23 claims are pending beyond 30 days, totaling $184,000 — flagged for the billing team to follow up.',
    },
    {
      question: 'Show inventory levels for critical medical supplies.',
      answer:
        'Surgical gloves and IV kits are below reorder threshold. Purchase requests have been auto-generated for approval.',
    },
  ];

  return (
    <section className="ai-section" id="aimodel" data-nav-theme="dark">
      <div className="ai-bg-glow"></div>

      <div className="ai-container">
        <div className="ai-content">
          <span className="ai-eyebrow">
            <span className="ai-eyebrow-dot"></span>
            INTELLIGENT MANAGEMENT, AUTOMATED
          </span>

          <h2 className="ai-heading">
            Ask <span>MedAI</span> Anything
          </h2>

          <p className="ai-subtext">
            Our built-in management AI reads across staffing, billing, inventory
            and occupancy data in real time so your administrators get instant,
            accurate answers instead of digging through spreadsheets.
          </p>

          <div className="ai-qa-grid">
            {qaCards.map((card, index) => (
              <div className="ai-qa-card" key={index}>
                <div className="ai-qa-question">
                  <span className="qa-user-badge">Q</span>
                  <p>{card.question}</p>
                </div>
                <div className="ai-qa-answer">
                  <span className="ai-avatar">✦</span>
                  <p>
                    <span className="ai-tag">MedAI</span>
                    {card.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ai-visual">
          <div className="ai-visual-frame">
            <img src={aiImage} alt="MedAI management assistant interface" />
          </div>

          <div className="ai-floating-badge badge-top">
            <span className="badge-icon badge-pulse">
              <span className="pulse-dot"></span>
            </span>
            <div className="badge-text">
              <strong>98%</strong>
              <small>Reporting Accuracy</small>
            </div>
          </div>

          <div className="ai-floating-badge badge-bottom">
            <span className="badge-icon badge-pulse">
              <span className="pulse-dot"></span>
            </span>
            <div className="badge-text">
              <strong>24/7</strong>
              <small>Operations Monitoring</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIModelSection;
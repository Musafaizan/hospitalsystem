import React from 'react';
import './style.css';
import { aimodelFeatures as features, aimodelHeading as heading, aimodelSubtext as subtext, aimodelVisualImage as visualImage, aimodelFloatingBadges as floatingBadges } from '../../data/data';

const AIModelSection = () => {
  return (
    <section className="ai-section" id="aimodel" data-nav-theme="dark">
      <div className="ai-bg-glow"></div>

      <div className="ai-container">
        <div className="ai-content">
          {/* <span className="ai-eyebrow">
            <span className="ai-eyebrow-dot"></span>
            INTELLIGENT MANAGEMENT, AUTOMATED
          </span> */}

          <h2 className="ai-heading">
            {heading[0]}<span>{heading[1]}</span>
          </h2>

          <p className="ai-subtext">
            {subtext}
          </p>

          <div className="ai-qa-grid">
            {features.map((feature, index) => (
              <div className="ai-qa-card" key={index}>
                <div className="ai-qa-question">
                  <span className="qa-user-badge">{String(index + 1).padStart(2, '0')}</span>
                  <p>{feature.title}</p>
                </div>
                <div className="ai-qa-answer">
                  <span className="ai-avatar">✦</span>
                  <p>{feature.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ai-visual">
          <div className="ai-visual-frame">
            <img src={visualImage} alt="MedAI clinical intelligence interface" />
          </div>

          <div className="ai-floating-badge badge-top">
            <span className="badge-icon badge-pulse">
              <span className="pulse-dot"></span>
            </span>
            <div className="badge-text">
              <strong>{floatingBadges[0].value}</strong>
              <small>{floatingBadges[0].label}</small>
            </div>
          </div>

          <div className="ai-floating-badge badge-bottom">
            <span className="badge-icon badge-pulse">
              <span className="pulse-dot"></span>
            </span>
            <div className="badge-text">
              <strong>{floatingBadges[1].value}</strong>
              <small>{floatingBadges[1].label}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIModelSection;

import React from 'react';
import './style.css';

import aiImage from '../../../assets/ai-section1.png';

const AIModelSection = () => {
  const features = [
    {
      title: 'Predictive Diagnostics & Risk Scoring',
      copy:
        "Analyze patient history instantly to flag high-risk anomalies, medication contradictions, and early critical care indicators.",
    },
    {
      title: 'Automated Smart Medical Transcriptions',
      copy:
        "Doctors speak; our integrated AI documents. Convert voice to text directly into the patient's EMR/EHR file during consultations.",
    },
    {
      title: 'Dynamic Intelligent Bed & Resource Allocation',
      copy:
      'AI forecasts ER influxes and automatically optimizes ICU bed, surgery room, and staff schedules to prevent bottlenecks.',
    },
    {
      title: 'Insurance Claims Predictive Analytics',
      copy:
        'Reduce claim rejections. The built-in AI audits ICD-10 medical coding instantly before submission to ensure higher approval rates.',
    },
  ];

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
            Smart Healthcare:AI-Driven<span> Clinical Intelligence</span> 
          </h2>

          <p className="ai-subtext">
           Built-in clinical AI analyzes patient records, documentations and claims
            in real time,delivering instant insight for faster,smarter care. 
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
            <img src={aiImage} alt="MedAI clinical intelligence interface" />
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
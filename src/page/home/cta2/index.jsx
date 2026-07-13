import "./style.css";

export default function CTA2() {
  return (
    <section className="cta2">
      <div className="cta2__inner">
        <span className="cta2__badge">
          <span className="cta2__badge-dot" />
          Now onboarding new practices
        </span>

        <h2 className="cta2__title">
         Let’s map out an efficiency plan  <span>tailored to your facility's bed count. </span>
        </h2>

        <p className="cta2__desc">
          Scheduling, records, billing, and care coordination in one place.
          Set up your workspace in under a day, no IT team required.
        </p>

        <div className="cta2__buttons">
          <a href="#demo" className="cta2__btn-primary">
            Book a live demo
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          {/* <a href="#sales" className="cta2__btn-secondary">
            Talk to sales
          </a> */}
        </div>

        {/* Signature: ECG pulse divider */}
        <div className="cta2__pulse" aria-hidden="true">
          <svg viewBox="0 0 600 40" preserveAspectRatio="none" className="cta2__pulse-svg">
            <path
              className="cta2__pulse-line"
              d="M0,20 L160,20 L180,20 L195,6 L210,34 L225,20 L245,20 L600,20"
              fill="none"
            />
          </svg>
        </div>

        {/* <div className="cta2__stats">
          <div className="cta2__stat">
            <span className="cta2__stat-value">12,000+</span>
            <span className="cta2__stat-label">Providers onboard</span>
          </div>
          <div className="cta2__stat-divider" />
          <div className="cta2__stat">
            <span className="cta2__stat-value">98%</span>
            <span className="cta2__stat-label">Patient satisfaction</span>
          </div>
          <div className="cta2__stat-divider" />
          <div className="cta2__stat">
            <span className="cta2__stat-value">24/7</span>
            <span className="cta2__stat-label">Live support</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
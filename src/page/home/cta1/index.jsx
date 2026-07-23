import "./style.css";
import { cta1Content as ctaContent } from '../../../data/data';

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta__inner">
        {/* Left — Text */}
        <div className="cta__text">
          <span className="cta__badge">{ctaContent.badge}</span>
          <h2 className="cta__title">
            {ctaContent.title} <span><br />{ctaContent.titleAccent}</span>
          </h2>
          <p className="cta__desc">
            {ctaContent.description}
          </p>
          <div className="cta__buttons">
            {/* <a href="#start" className="cta__btn-primary">
              Start Free Trial
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a> */}
            <a href="#demo"  className="cta__btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              {ctaContent.buttonLabel}
            </a>
          </div>
          <p className="cta__note">
            {ctaContent.note}
          </p>
        </div>

        {/* Right — Image */}
        <div className="cta__image-wrap">
          <img src={ctaContent.image} alt={ctaContent.alt} className="cta__image" />
        </div>
      </div>
    </section>
  );
}
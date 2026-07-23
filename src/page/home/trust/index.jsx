import React, { useEffect, useRef, useState } from 'react';
import { Share2, Lock, Landmark, ShieldCheck } from 'lucide-react';
import './style.css';
import { complianceBadges, trustLogos, trustStats, trustHeading, logoMarqueeHeading } from '../../../data/data';


const Counter = ({ end, suffix = '+', duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animatingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;

        if (isVisible && !animatingRef.current) {
          animatingRef.current = true;
          let startTime = null;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const value = decimals > 0
              ? parseFloat((easeOut * end).toFixed(decimals))
              : Math.floor(easeOut * end);
            setCount(value);
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
              animatingRef.current = false;
            }
          };
          requestAnimationFrame(step);
        } else if (!isVisible) {
          
          animatingRef.current = false;
          setCount(0);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, decimals]);

  const formatNumber = (num) => {
    if (end >= 1000) {
      return (num / 1000).toFixed(num >= 1000 ? 0 : 1) + 'k';
    }
    return decimals > 0 ? num.toFixed(decimals) : num;
  };

  return (
    <span ref={ref} className="counter-number">
      {formatNumber(count)}{suffix}
    </span>
  );
};

const COMPLIANCE_BADGES = complianceBadges.map((badge) => ({
  ...badge,
  icon: { Share2, Lock, Landmark, ShieldCheck }[badge.icon],
}));

// Infinite right-to-left logo marquee. The logo list is duplicated once so the
// track can loop seamlessly at -50% translateX with no visible reset/jump.
const LogoMarquee = () => {
  const logos = trustLogos;
  const loopLogos = [...logos, ...logos];

  return (
    <section className="logo-marquee-section">
      <div className="logo-marquee-heading">
        <h2>
          {logoMarqueeHeading.title} <span>{logoMarqueeHeading.accent}</span>
        </h2>
        <p className="logo-marquee-subheading">
          {logoMarqueeHeading.description}
        </p>
      </div>

      <div className="logo-marquee-wrapper">
        <div className="logo-marquee-track">
          {loopLogos.map((logo, index) => (
            <div className="logo-marquee-item" key={index}>
              <img
                src={logo}
                alt={`Partner logo ${(index % logos.length) + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="compliance-grid">
        {COMPLIANCE_BADGES.map(({ icon: Icon, label, description }) => (
          <div className="compliance-badge" key={label}>
            <span className="compliance-badge-icon">
              <Icon size={20} strokeWidth={1.8} />
            </span>
            <div className="compliance-badge-text">
              <p className="compliance-badge-label">{label}</p>
              <p className="compliance-badge-description">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TrustSection = () => {
  const stats = trustStats;

  return (
    <>
      <LogoMarquee />

      <section className="trust-section" id="trust" data-nav-theme="dark">
        <div className="trust-container">
          <div className="trust-heading">
            <h2>{trustHeading.title} <span>{trustHeading.accent}</span></h2>
            <p>{trustHeading.description}</p>
          </div>

          <div className="trust-grid">
            {stats.map((stat, index) => (
              <div className="trust-card" key={index}>
                <div className="trust-number">
                  {stat.isHash && <span className="hash-symbol">#</span>}
                  {stat.isText ? (
                    <span className="counter-number">{stat.text}</span>
                  ) : (
                    <Counter end={stat.number} suffix={stat.suffix} decimals={stat.decimals || 0} />
                  )}
                </div>
                <h3 className="trust-label">{stat.label}</h3>
                {stat.description && <p className="trust-description">{stat.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustSection;
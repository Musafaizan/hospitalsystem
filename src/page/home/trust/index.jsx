import React, { useEffect, useRef, useState } from 'react';
import { Share2, Lock, Landmark, ShieldCheck } from 'lucide-react';
import './style.css';
import logo1 from '../../../assets/logo1.png';
import logo2 from '../../../assets/logo2.png';
import logo3 from '../../../assets/logo3.png';
import logo4 from '../../../assets/logo4.png';
import logo5 from '../../../assets/logo5.png';
import logo6 from '../../../assets/logo6.png';


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
          // reset so it plays again next time it scrolls into view
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

const COMPLIANCE_BADGES = [
  {
    icon: Share2,
    label: 'HL7 / FHIR Standards Compliance',
    description: 'For seamless health data exchange',
  },
  {
    icon: Lock,
    label: 'HIPAA & GDPR Data Privacy Certified',
    description: 'Absolute patient data encryption',
  },
  {
    icon: Landmark,
    label: 'National Ministry of Health Regulations',
    description: 'Local healthcare board clearance',
  },
  {
    icon: ShieldCheck,
    label: 'ISO 27001 Certified',
    description: 'Information security management systems',
  },
];

// Infinite right-to-left logo marquee. The logo list is duplicated once so the
// track can loop seamlessly at -50% translateX with no visible reset/jump.
const LogoMarquee = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const loopLogos = [...logos, ...logos];

  return (
    <section className="logo-marquee-section">
      <div className="logo-marquee-heading">
        <h2>
          Compliant, Certified, and Trusted by <span>Healthcare Authorities</span>
        </h2>
        <p>
          Our HIS aligns with global digital health frameworks and local
          department regulations to ensure seamless data interoperability
          and security.
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
  const stats = [
    {
      number: 99.9,
      suffix: '%',
      decimals: 1,
      label: 'PLATFORM UPTIME',
      description: 'Reliable, always-on infrastructure with 99.9% server uptime',
    },
    {
      number: 45,
      suffix: '%',
      label: 'FASTER CHECK-INS',
      description: 'Reduction in patient check-in and waiting times',
    },
    {
      number: 150,
      suffix: '+',
      label: 'CONNECTED MODULES',
      description: 'Medical modules and lab integrations connected out of the box',
    },
    {
      isText: true,
      text: 'Zero',
      suffix: '',
      label: 'REVENUE LEAKAGE',
      description: 'Automated invoicing that closes every billing gap',
    },
  ];

  return (
    <>
      <LogoMarquee />

      <section className="trust-section" id="trust" data-nav-theme="dark">
        <div className="trust-container">
          <div className="trust-heading">
            <h2>Trusted <span>Worldwide</span></h2>
            <p>Powering healthcare providers globally with reliable and scalable solutions</p>
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
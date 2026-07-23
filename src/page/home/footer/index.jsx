import React from "react";
import { Stethoscope, Mail, Phone, MapPin} from "lucide-react";
import "./style.css";
import { productLinks, companyLinks, legalLinks, footerContent } from '../../../data/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" data-nav-theme="dark">
      <div className="footer-top">
        <div className="footer-brand reveal" style={{ "--delay": "0ms" }}>
          <div className="brand-row">
            <span className="brand-icon">
              <Stethoscope strokeWidth={2} />
            </span>
            <span className="brand-name">
              Cure<span className="accent">Verx</span>
            </span>
          </div>
          <p className="brand-desc">
            {footerContent.brandDescription}
          </p>
        </div>

        <nav className="footer-col reveal" style={{ "--delay": "80ms" }} aria-label="Product">
          <h4 className="col-title">Product</h4>
          <ul className="col-list">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col reveal" style={{ "--delay": "160ms" }} aria-label="Company">
          <h4 className="col-title">Company</h4>
          <ul className="col-list">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col reveal" style={{ "--delay": "240ms" }}>
          <h4 className="col-title">Contact</h4>
          <ul className="contact-list">
            <li>
              <Mail className="contact-icon" strokeWidth={1.8} />
              <a href={`mailto:${footerContent.email}`}>{footerContent.email}</a>
            </li>
            <li>
              <Phone className="contact-icon" strokeWidth={1.8} />
              <a href={`tel:${footerContent.phone}`}>{footerContent.phone}</a>
            </li>
            <li>
              <MapPin className="contact-icon" strokeWidth={1.8} />
              <span>{footerContent.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">&copy; {year} CureVerx. All rights reserved.</p>
        <ul className="legal-list">
          {legalLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
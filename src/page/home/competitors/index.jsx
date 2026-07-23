import React from "react";
import "./style.css";
import { competitorsFeatures as features, competitorsList as competitors, competitorsSectionHeading as sectionHeading } from '../../../data/data';


function getStatus(value) {
  if (/^yes/i.test(value)) return "yes";
  if (/^no$/i.test(value)) return "no";
  return "partial";
}

function Mark({ value }) {
  const status = getStatus(value);

  if (status === "yes") {
    return (
      <span className="mark mark--yes" aria-label={value}>
        <svg viewBox="0 0 20 20" width="13" height="13">
          <path
            d="M4 10.5l3.8 3.8L16 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mark-text">{value}</span>
      </span>
    );
  }

  if (status === "no") {
    return (
      <span className="mark mark--no" aria-label="Not available">
        <svg viewBox="0 0 20 20" width="11" height="11">
          <path
            d="M5 5l10 10M15 5L5 15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  return (
    <span className="mark mark--partial" aria-label={value}>
      <svg viewBox="0 0 20 20" width="10" height="10">
        <circle cx="10" cy="10" r="4" fill="currentColor" />
      </svg>
      <span className="mark-text">{value}</span>
    </span>
  );
}

export default function HMSComparisonTable() {
  return (
    <section className="hms-compare-section" id="competitors" data-nav-theme="dark">
      <div className="hms-compare-heading">
        <span className="hms-compare-eyebrow">{sectionHeading.eyebrow}</span>
        <h2>
          {sectionHeading.title} <span>{sectionHeading.accent}</span>
        </h2>
        <p>
          {sectionHeading.description}
        </p>
      </div>

      <div className="hms-compare-wrapper">
        <table className="hms-compare-table">
          <thead>
            <tr>
              <th className="row-label-col">Features</th>
              {competitors.map((c) => (
                <th key={c.name} className={c.highlight ? "col-highlight" : ""}>
                  {c.highlight && <span className="best-badge">Best Choice</span>}
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, rowIdx) => (
              <tr key={feature}>
                <td className="row-label">{feature}</td>
                {competitors.map((c) => (
                  <td
                    key={c.name}
                    className={c.highlight ? "col-highlight" : ""}
                    data-label={c.name}
                  >
                    <Mark value={c.values[rowIdx]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
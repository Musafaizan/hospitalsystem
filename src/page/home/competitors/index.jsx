import React from "react";
import "./style.css";

const FEATURES = [
  "Patient Registration",
  "OPD & IPD Management",
  "Appointment Scheduling",
  "Billing & Insurance Claims",
  "Pharmacy & Inventory",
  "Telemedicine Module",
];

const COMPETITORS = [
  {
    name: "Our HMS",
    highlight: true,
    values: [true, true, true, true, true, true],
  },
  {
    name: "Competitor 1",
    values: [true, true, false, true, true, false],
  },
  {
    name: "Competitor 2",
    values: [true, false, false, true, false, false],
  },
  {
    name: "Competitor 3",
    values: [true, true, true, false, true, false],
  },
];

function Mark({ ok }) {
  return ok ? (
    <span className="mark mark--yes" aria-label="Available">
      <svg viewBox="0 0 20 20" width="14" height="14">
        <path
          d="M4 10.5l3.8 3.8L16 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ) : (
    <span className="mark mark--no" aria-label="Not available">
      <svg viewBox="0 0 20 20" width="12" height="12">
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

export default function HMSComparisonTable() {
  return (
    <section className="hms-compare-section" id="competitors" data-nav-theme="dark">
      <div className="hms-compare-heading">
        <h2>
          Compare with <span>Confidence</span>
        </h2>
        <p>See how our Hospital Management System stacks up against other providers.</p>
      </div>

      <div className="hms-compare-wrapper">
        <table className="hms-compare-table">
          <thead>
            <tr>
              <th className="row-label-col">Features</th>
              {COMPETITORS.map((c) => (
                <th
                  key={c.name}
                  className={c.highlight ? "col-highlight" : ""}
                >
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((feature, rowIdx) => (
              <tr key={feature}>
                <td className="row-label">{feature}</td>
                {COMPETITORS.map((c) => (
                  <td
                    key={c.name}
                    className={c.highlight ? "col-highlight" : ""}
                  >
                    <Mark ok={c.values[rowIdx]} />
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
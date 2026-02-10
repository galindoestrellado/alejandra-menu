import React from "react";

export default function Progress({ current, total }) {
  const pct = total > 0 ? Math.round(((current + 1) / total) * 100) : 0;

  return (
    <div className="progress" style={{ ["--progress"]: `${pct}%` }}>
      <div className="kicker">Menú {current + 1}/{total}</div>
      <div className="progress__bar">
        <div />
      </div>
    </div>
  );
}

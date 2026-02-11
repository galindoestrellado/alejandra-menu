import React from "react";

export default function ScrollHint({ label = "Desliza", hidden = false }) {
  if (hidden) return null;

  return (
    <div className="scrollHint" aria-hidden="true">
      <div className="scrollHint__label">{label}</div>
      <div className="scrollHint__chev">⌄</div>
    </div>
  );
}

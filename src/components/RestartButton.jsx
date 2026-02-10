import React from "react";

export default function RestartButton({ onRestart }) {
  return (
    <button className="btn btn--accent" onClick={onRestart}>
      ↺ Volver a empezar
    </button>
  );
}

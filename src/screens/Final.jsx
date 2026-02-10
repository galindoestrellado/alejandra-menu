import React from "react";
import Screen from "../components/Screen";
import RestartButton from "../components/RestartButton";

export default function Final({ onRestart }) {
  return (
    <Screen id="final">
      <div className="card center">
        <h2 className="h2">🖼️ Lo mejor del menú</h2>
        <p className="p">
          No es la comida. Es contigo.
        </p>
        <RestartButton onRestart={onRestart} />
      </div>
    </Screen>
  );
}

import React from "react";
import Screen from "../components/Screen";

export default function Welcome() {
  return (
    <Screen id="welcome">
      <div className="card">
        <h1 className="h1">Alejandra</h1>
        <p className="p">
          Este menú no está en ninguna carta.
        </p>
        <p className="p muted">
          Está pensado, cocinado y servido solo para ti.
        </p>
      </div>
    </Screen>
  );
}

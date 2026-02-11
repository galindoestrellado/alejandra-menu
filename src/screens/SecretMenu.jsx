import React from "react";
import Screen from "../components/Screen";

export default function SecretMenu() {
  return (
    <Screen id="secret">
      <div className="card">
        <div className="kicker">Menú secreto</div>

        <h2 className="h2">🔥 Sin protocolo</h2>

        <p className="p">
          Aquí no se sirve en plato.
        </p>

        <p className="p">
          Se sirve lento. <br />
          Muy cerca. <br />
          Donde tú quieras.
        </p>

        <p className="p muted">
          😈 El chef no se hace responsable de lo que pase después.
        </p>
      </div>
    </Screen>
  );
}

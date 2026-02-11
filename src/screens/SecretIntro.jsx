import React from "react";
import Screen from "../components/Screen";

export default function SecretIntro() {
  return (
    <Screen id="secret-intro" bg="secret">
      <div className="card">
        <div className="kicker">Fuera de carta</div>

        <h2 className="h2">🫦 Ahora sí</h2>

        <p className="p">
          Aquí ya no hay menú.
        </p>

        <p className="p">
          Aquí hay miradas largas, <br />
          respiraciones lentas…
        </p>

        <p className="p muted">
          💋 Baja despacio. No tengas prisa.
        </p>
      </div>
    </Screen>
  );
}

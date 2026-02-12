import React from "react";
import Screen from "../components/Screen";

export default function Welcome({ run = 0 }) {
  const alt = run % 2 === 1;

  return (
    <Screen id="welcome" bg="welcome" hintLabel="Baja despacito… 😏">
      <div className="card">
        <div className="hero">
          <img
            src={`${import.meta.env.BASE_URL}images/welcome.jpg`}
            alt="Alejandra"
          />
          <div className="heroOverlay" />

          <div className="heroText">
            <div className="kicker">San Valentín • Menú degustación</div>
            <div className="h1 heroName">Alejandra</div>
          </div>

          {/* Fecha escondida */}
          <div className="hiddenDate">
            <b>MAR</b> 2022
          </div>
        </div>

        <p className="p">
          Siempre cocinas para todo dios.
        </p>

        <p className="p">
          Pero hoy… el menú es para ti. 🍽️
        </p>

        <p className="p muted">
          {alt ? "Baja despacito… 😈" : "Baja despacito… 😏"}
        </p>

        <div className="divider" />

        <div className="small">
          (Toca la pantalla para crear ambiente 🎧)
        </div>
      </div>
    </Screen>
  );
}

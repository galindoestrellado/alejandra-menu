import React from "react";
import Screen from "../components/Screen";

export default function Welcome() {
  return (
    <Screen id="welcome">
      <div className="card">
        <div className="hero">
          <img
            src={`${import.meta.env.BASE_URL}images/hero.jpg`}
            alt="Alejandra"
            loading="eager"
          />
          <div className="heroOverlay" />
          <div className="heroText">
            <div className="kicker">Menú degustación • Solo para ti</div>
            <div className="h1" style={{ margin: 0 }}>Alejandra</div>
          </div>
        </div>

        <p className="p">
          Sé que tú cocinas para muchos.
        </p>
        <p className="p">
          Pero esta vez… el menú lo he pensado <b>solo para ti</b>.
        </p>

        <div className="divider" />

        <p className="p muted">
          Servicio lento. Sin prisas. <br />
          Baja despacio… y deja que suba la tensión.
        </p>
      </div>
    </Screen>
  );
}

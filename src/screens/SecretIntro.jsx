import React from "react";
import Screen from "../components/Screen";

export default function SecretIntro() {
  return (
    <Screen id="secret-intro" bg="secret" hintLabel="Baja…" >
      <div className="card secretCard">
        <div className="kicker">Fuera de carta</div>
        <div className="h2">🫦 Ahora sí</div>

        <p className="p">
          Aquí ya no hay menú.
        </p>

        <p className="p muted">
          Aquí hay mirada… y tensión bonita.
        </p>

        <div className="secretPhoto">
          <img
            src={`${import.meta.env.BASE_URL}images/secret-intro.jpg`}
            alt="Nosotros"
          />
          <div className="secretPhotoOverlay" />
          <div className="secretStamp">Solo para Alejandra</div>
        </div>

        <div className="divider" />

        <div className="small">
          (Baja despacio. No hay prisa.) 😈
        </div>
      </div>
    </Screen>
  );
}

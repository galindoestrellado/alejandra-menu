import React from "react";
import Screen from "../components/Screen";

export default function SecretIntro() {
  return (
    <Screen id="secret-intro" bg="secret" hintLabel="Sigue bajando… 💋">
      <div className="card secretCard">
        <div className="kicker">Desbloqueado</div>
        <div className="h2">Ahora sí.</div>

        <p className="p">Has cruzado la puerta roja.</p>
        <p className="p muted">Esto ya no estaba en la carta.</p>

        <div className="secretPhoto">
          <img
            src={`${import.meta.env.BASE_URL}images/secret-intro.jpg?v=1`}
            alt="Nosotros"
          />
          <div className="secretPhotoOverlay" />
        </div>

        <div className="divider" />
        <div className="small">(Sigue bajando… 😈)</div>
      </div>
    </Screen>
  );
}

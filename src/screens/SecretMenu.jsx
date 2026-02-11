import React from "react";
import Screen from "../components/Screen";

export default function SecretMenu() {
  return (
    <Screen id="secret" bg="secret" hintLabel="Un poquito más…" >
      <div className="card secretCard">
        <div className="kicker">Menú secreto</div>
        <div className="h2">🔥 Sin protocolo</div>

        <p className="p">
          Aquí no se sirve en plato.
        </p>

        <p className="p muted">
          Se sirve lento… muy cerca.
        </p>

        <div className="secretPhoto">
          <img
            src={`${import.meta.env.BASE_URL}images/secret.jpg`}
            alt="Nosotros"
          />
          <div className="secretPhotoOverlay" />
          <div className="secretStamp">Puerta roja abierta</div>
        </div>

        <div className="divider" />

        <div className="small">
          (El chef no se hace responsable de sonrisas raras.) 💋
        </div>
      </div>
    </Screen>
  );
}

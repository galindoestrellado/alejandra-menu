import React, { useState } from "react";
import Screen from "../components/Screen";

export default function SecretMenu() {
  const [taps, setTaps] = useState(0);
  const [show, setShow] = useState(false);

  const onTap = () => {
    const next = taps + 1;
    setTaps(next);

    if (next >= 7) {
      setShow(true);
    }
  };

  return (
    <Screen id="secret" bg="secret" hintLabel="Un poquito más…">
      <div className="card secretCard">
        <div className="kicker">Menú secreto</div>
        <div className="h2">🔥 Sin protocolo</div>

        <p className="p">Aquí no se sirve en plato.</p>
        <p className="p muted">Se sirve lento… muy cerca.</p>

        <div className="secretPhoto" onClick={onTap} role="button" aria-label="Foto secreta">
          <img
            src={`${import.meta.env.BASE_URL}images/secret.jpg`}
            alt="Nosotros"
          />
          <div className="secretPhotoOverlay" />
          <div className="secretStamp">Puerta roja abierta</div>

          {show && (
            <div className="secretEaster">
              Te quiero, chef. 💋
            </div>
          )}
        </div>

        <div className="divider" />

        <div className="small">
          (El chef no se hace responsable de sonrisas raras.) 😌
        </div>
      </div>
    </Screen>
  );
}

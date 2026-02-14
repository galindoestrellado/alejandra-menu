import React from "react";
import Screen from "../components/Screen";

export default function SecretIntro() {
  return (
    <Screen id="secret-intro" bg="secret" hintLabel="Baja…" >
      <div className="secretHero">
        <img
          src={`${import.meta.env.BASE_URL}images/secret-intro.jpg`}
          alt="Nosotros"
        />
        <div className="secretHeroOverlay" />

        <div className="secretHeroText">
          <div className="kicker">Desbloqueado</div>
          <div className="h1">Ahora sí.</div>
        </div>
      </div>

      <div className="card secretCard" style={{ marginTop: 20 }}>
        <p className="p">
          Has cruzado la puerta.
        </p>

        <p className="p muted">
          Aquí empieza lo que no estaba en la carta.
        </p>

        <div className="divider" />

        <div className="small">
          (Respira. Estamos solos.) 😈
        </div>
      </div>
    </Screen>
  );
}

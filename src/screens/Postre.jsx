import React from "react";
import Screen from "../components/Screen";

export default function Postre() {
  return (
    <Screen id="postre" bg="dessert">
      <div className="card">
        <div className="kicker">Postre</div>
        <div className="h2">🍓 Dulce pecado</div>

        <p className="p">
          Suave.
          Pegajoso.
          De esos que se comen con sonrisa.
        </p>

        <p className="p muted">
          Y si cae un poquito fuera…  
          mejor.
        </p>

        <div className="photoBlock">
          <img
            src={`${import.meta.env.BASE_URL}images/postre.jpg`}
            alt="Nosotros"
          />
          <div className="photoCaption">
            Esto ya es vicio bonito 🍓
          </div>
        </div>

        <div className="divider" />

        <div className="small">
          (Última copa… o la primera de otra cosa.)
        </div>
      </div>
    </Screen>
  );
}

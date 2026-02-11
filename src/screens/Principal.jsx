import React from "react";
import Screen from "../components/Screen";

export default function Principal() {
  return (
    <Screen id="principal" bg="main">
      <div className="card">
        <div className="kicker">Plato principal</div>
        <div className="h2">🥩 El plato fuerte</div>

        <p className="p">
          Aquí ya no se prueba.
          Aquí se decide.
        </p>

        <p className="p muted">
          Un bocado y ya estás dentro.  
          Dos… y ya no quieres salir.
        </p>

        <div className="photoBlock">
          <img
            src={`${import.meta.env.BASE_URL}images/principal.jpg`}
            alt="Nosotros"
          />
          <div className="photoCaption">
            Tú y yo: el plato fuerte 🔥
          </div>
        </div>

        <div className="divider" />

        <div className="small">
          (Respira. Lo que viene después es dulce…)
        </div>
      </div>
    </Screen>
  );
}

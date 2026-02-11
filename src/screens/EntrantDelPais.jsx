import React from "react";
import Screen from "../components/Screen";

export default function EntrantDelPais() {
  return (
    <Screen id="entrant" bg="catalan">
      <div className="card">
        <div className="kicker">Entrant del País</div>
        <div className="h2">🥖 Pa amb tomàquet picant</div>

        <p className="p">
          Pan crujiente. Tomate bien restregado.  
          Un poco de aceite.  
          Y ese toque que despierta.
        </p>

        <p className="p muted">
          Porque lo tradicional también puede ser provocador.
        </p>

        {/* Foto vuestra */}
        <div className="photoBlock">
          <img
            src={`${import.meta.env.BASE_URL}images/entrant.jpg`}
            alt="Nosotros"
          />
          <div className="photoCaption">
            Cataluña, fuego lento 🔥
          </div>
        </div>

        <div className="divider" />

        <div className="small">
          (Y aún no hemos empezado a subir la temperatura…)
        </div>
      </div>
    </Screen>
  );
}

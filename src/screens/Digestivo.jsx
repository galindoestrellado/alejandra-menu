import React from "react";
import Screen from "../components/Screen";

export default function Digestivo() {
  return (
    <Screen id="digestivo" bg="digestif">
      <div className="card">
        <div className="kicker">Digestivo</div>
        <div className="h2">🥃 La excusa para quedarse</div>

        <p className="p">
          Para bajar el azúcar.
          Para alargar la noche.
        </p>

        <p className="p muted">
          Porque cuando estamos bien…  
          nadie tiene prisa.
        </p>

        <div className="photoBlock">
          <img
            src={`${import.meta.env.BASE_URL}images/digestivo.jpg`}
            alt="Nosotros"
          />
          <div className="photoCaption">
            La sobremesa… contigo 🍷
          </div>
        </div>

        <div className="divider" />

        <div className="small">
          (Cuando estés lista… ya sabes dónde está la puerta roja.)
        </div>
      </div>
    </Screen>
  );
}

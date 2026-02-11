import React from "react";
import Screen from "../components/Screen";

export default function LaPaisa() {
  return (
    <Screen id="paisa" bg="paisa">
      <div className="card">
        <div className="kicker">La Paisa</div>
        <div className="h2">🌽 Arepita atrevida</div>

        <p className="p">
          Calentita por fuera.  
          Suave por dentro.  
          Hecha a mano, con intención.
        </p>

        <p className="p muted">
          Porque hay sabores que no se explican…  
          se sienten.
        </p>

        {/* Foto vuestra */}
        <div className="photoBlock">
          <img
            src={`${import.meta.env.BASE_URL}images/paisa.jpg`}
            alt="Nosotros"
          />
          <div className="photoCaption">
            Sabor latino, conexión real 💃
          </div>
        </div>

        <div className="divider" />

        <div className="small">
          (Aquí ya empieza a subir la temperatura…)
        </div>
      </div>
    </Screen>
  );
}

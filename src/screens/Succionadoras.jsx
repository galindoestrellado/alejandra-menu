import React from "react";
import Screen from "../components/Screen";

export default function Succionadoras() {
  return (
    <Screen id="succionadoras" bg="olives">
      <div className="card">
        <div className="kicker">Primer bocado</div>
        <div className="h2">🫒 Succionadoras</div>

        <p className="p">
          Aceitunas jugosas. Lentas. Que se saborean sin prisa.
        </p>

        <p className="p muted">
          Porque lo bueno no se muerde… se disfruta poco a poco.
        </p>

        {/* Foto vuestra */}
        <div className="photoBlock">
          <img
            src={`${import.meta.env.BASE_URL}images/succionadoras.jpg`}
            alt="Nosotros"
          />
          <div className="photoCaption">
            Receta original, contigo 💋
          </div>
        </div>

        <div className="divider" />

        <div className="small">
          (Y esto solo es el principio…)
        </div>
      </div>
    </Screen>
  );
}

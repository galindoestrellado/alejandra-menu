import React from "react";
import Screen from "../components/Screen";
import RestartButton from "../components/RestartButton";

export default function Final({ onRestart }) {
  return (
    <Screen id="final" bg="final" hint={false}>
      <div className="card finalCard">
        <div className="finalHero">
          <img
            src={`${import.meta.env.BASE_URL}images/final.jpg`}
            alt="Nosotros"
            loading="lazy"
          />
          <div className="finalOverlay" />
          <div className="finalTop">
            {/* <div className="kicker">Cierre</div> */}
            <div className="h2" style={{ margin: 0 }}>🔥 Lo mejor del menú</div>
          </div>
        </div>

        <div className="finalBody">
          <p className="p">
            Al final, lo mejor no es lo que se cocina…
          </p>

          <p className="p">
            es <b>con quién</b>.
          </p>

          <p className="p muted">
            Y yo quiero que sea contigo. <span aria-hidden="true">🍷</span>
          </p>

          <div className="divider" />

          <div className="finalActions">
            <RestartButton onRestart={onRestart} />
            <div className="small">
              (Esta web no se cierra. Se relee.)
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
}

import React from "react";
import Screen from "../components/Screen.jsx";

export default function Final() {
  const restart = () => {
    // limpiar cualquier estado guardado
    localStorage.clear();

    // volver arriba
    window.scrollTo({ top: 0, behavior: "smooth" });

    // pequeño delay y recargar para reiniciar estados
    setTimeout(() => {
      window.location.reload();
    }, 600);
  };

  return (
    <Screen id="final" bg="final">
      <div className="card finalCard">
        <div className="h2">Lo mejor del menú…</div>

        <p className="p">
          No estaba en la carta.
        </p>

        <div className="divider" />

        <button className="btn btn--accent" onClick={restart}>
          Volver a empezar 🔄
        </button>
      </div>
    </Screen>
  );
}

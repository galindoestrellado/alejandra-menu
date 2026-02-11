import React from "react";
import Screen from "../components/Screen";

export default function Principal() {
  return (
    <Screen id="principal" bg="main">
      <div className="card">
        <h2 className="h2">🔥 Fuego lento</h2>
        <p className="p">
          Aquí la tensión se cocina despacio.
        </p>
      </div>
    </Screen>
  );
}

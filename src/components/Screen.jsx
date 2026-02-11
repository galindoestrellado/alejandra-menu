import React from "react";
import ScrollHint from "./ScrollHint";

export default function Screen({ id, children, hint = true, hintLabel = "Desliza" }) {
  const hideHint = !hint || id === "final"; // no mostrar en la última pantalla

  return (
    <section id={id} className="screen">
      <div className="screen__inner">{children}</div>
      <ScrollHint label={hintLabel} hidden={hideHint} />
    </section>
  );
}

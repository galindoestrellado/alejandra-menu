import React from "react";
import ScrollHint from "./ScrollHint";

export default function Screen({
  id,
  children,
  hint = true,
  hintLabel = "Desliza",
  bg = "default",
}) {
  const hideHint = !hint || id === "final";

  return (
    <section id={id} className={`screen screen--${bg}`}>
      <div className="screen__inner">{children}</div>
      <ScrollHint label={hintLabel} hidden={hideHint} />
    </section>
  );
}

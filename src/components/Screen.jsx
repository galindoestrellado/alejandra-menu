import React from "react";

export default function Screen({ id, children }) {
  return (
    <section id={id} className="screen">
      <div className="screen__inner">{children}</div>
    </section>
  );
}

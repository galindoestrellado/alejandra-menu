import React, { useState } from "react";

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (value.trim().toLowerCase() === "xale") {
      onUnlock();
    } else {
      setError("Todavía no… 😌");
    }
  };

  return (
    <div className="card">
      <div className="kicker">Menú secreto</div>
      <h2 className="h2">🔒 Solo para quien sabe la contraseña</h2>

      <p className="p muted">Pista: nuestra contraseña. 4 letras.</p>

      <input
        className="input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError("");
        }}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="Contraseña…"
      />

      <button className="btn btn--accent" onClick={submit}>
        Servir
      </button>

      {error && <div className="error">{error}</div>}
    </div>
  );
}

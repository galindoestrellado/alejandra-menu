import React, { useState } from "react";

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (value.trim().toLowerCase() === "xale") {
      setError("");
      onUnlock();
    } else {
      setError("Todavía no… 😌");
    }
  };

  return (
    <div className="card gateCard">
      <div className="kicker">Menú secreto</div>
      <div className="h2" style={{ marginTop: 8 }}>🔒 Solo para quien sabe la contraseña</div>

      <p className="p muted">
        Pista: <b>nuestra contraseña</b>. <b>4 letras</b>.
      </p>

      <div className="divider" />

      <input
        className="input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError("");
        }}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="Escribe la contraseña…"
        autoComplete="off"
      />

      <div className="gateActions">
        <button className="btn btn--accent" onClick={submit}>Servir</button>
        <button className="btn" onClick={() => setValue("")}>Borrar</button>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="small" style={{ marginTop: 10 }}>
        (Si la sabes, se abre. Si no… no pasa nada. Aún.)
      </div>
    </div>
  );
}

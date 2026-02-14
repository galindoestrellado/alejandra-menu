import React, { useState } from "react";

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [tries, setTries] = useState(0);

  const playSexyUnlock = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // suspiro suave descendente
      osc.type = "triangle";
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.55);

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.62);

      setTimeout(() => ctx.close(), 800);
    } catch {
      // si falla, no pasa nada
    }
  };

  const submit = () => {
    const v = value.trim().toLowerCase();

    if (v === "xale") {
      setError("");
      navigator.vibrate?.(25);

      // activa modo secreto musical
      window.__xaleMode = "secret";

      playSexyUnlock();
      onUnlock();
      return;
    }

    const next = tries + 1;
    setTries(next);

    if (next === 1) setError("Todavía no… 😌");
    else if (next === 2) setError("Mmm… casi. Pista: 4 letras 😉");
    else setError("¿Seguro que no te acuerdas…? 🫦 (Nuestra contraseña. 4 letras)");
  };

  return (
    <div className="card gateCard">
      <div className="kicker">San Valentín • Solo tú</div>
      <div className="h2" style={{ marginTop: 8 }}>
        🔐 Puerta roja
      </div>

      <p className="p">
        Si sabes la contraseña… <b>entras</b>.
      </p>

      <p className="p muted">
        Pista: <b>4 letras</b>. La nuestra. 💋
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
        <button className="btn btn--accent" onClick={submit}>
          Entrar
        </button>
        <button className="btn" onClick={() => setValue("")}>
          Borrar
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="small" style={{ marginTop: 10 }}>
        (Aquí empieza lo interesante.) 😏
      </div>
    </div>
  );
}

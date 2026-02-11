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

      // "suspiro" suave descendente
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

      // cerrar un pelín después para no cortar el tail
      setTimeout(() => ctx.close(), 800);
    } catch {
      // si falla, no pasa nada
    }
  };

  const submit = () => {
    const v = value.trim().toLowerCase(); // ✅ AQUÍ estaba el fallo

    if (v === "xale") {
      setError("");
      navigator.vibrate?.(25);
      playSexyUnlock();
      window.__xaleMode = "secret";
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
      <div className="kicker">Menú secreto</div>
      <div className="h2" style={{ marginTop: 8 }}>
        🔒 Solo para quien sabe la contraseña
      </div>

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
        <button className="btn btn--accent" onClick={submit}>
          Servir
        </button>
        <button className="btn" onClick={() => setValue("")}>
          Borrar
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="small" style={{ marginTop: 10 }}>
        (Si la sabes, se abre. Si no… aún no.)
      </div>
    </div>
  );
}

import React, { useRef, useState } from "react";

/**
 * Jazz generado por WebAudio.
 * - "normal": lounge suave
 * - "secret": un pelín más intenso
 */
export default function AudioToggle() {
  const [on, setOn] = useState(false);
  const [mode, setMode] = useState("normal"); // normal | secret

  const ctxRef = useRef(null);
  const intervalRef = useRef(null);

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    const ctx = ctxRef.current;
    ctxRef.current = null;

    // cerrar audio context
    ctx?.close?.();
  };

  const start = (nextMode = "normal") => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctxRef.current = ctx;

    // volumen base (más fuerte que antes)
    const master = ctx.createGain();
    master.gain.value = 0.14; // 🔊 sube/baja aquí
    master.connect(ctx.destination);

    const playNote = (freq, duration = 0.65) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.value = freq;

      // envolvente suave
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1.0, ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(master);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    };

    const normalSeq = [220, 247, 196, 174];        // lounge
    const secretSeq = [220, 262, 247, 196, 174];   // un toque más tenso
    const seq = nextMode === "secret" ? secretSeq : normalSeq;

    let i = 0;
    intervalRef.current = setInterval(() => {
      playNote(seq[i % seq.length]);
      i++;
    }, nextMode === "secret" ? 650 : 800);
  };

  const toggle = () => {
    if (!on) {
      const forced = window.__xaleMode === "secret" ? "secret" : mode;
      start(forced);
      setOn(true);
    } else {
      stop();
      setOn(false);
    }
  };

  const toggleMode = () => {
    const next = mode === "normal" ? "secret" : "normal";
    setMode(next);

    // si está sonando, reinicia con el nuevo modo
    if (on) {
      stop();
      start(next);
    }
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <button className={`btn ${on ? "btn--accent" : ""}`} onClick={toggle}>
        {on ? "🎷 Jazz ON" : "🎷 Activar jazz"}
      </button>

      <button className="btn" onClick={toggleMode} title="Cambiar ambiente">
        {mode === "secret" ? "😈 Modo secreto" : "🙂 Modo normal"}
      </button>
    </div>
  );
}

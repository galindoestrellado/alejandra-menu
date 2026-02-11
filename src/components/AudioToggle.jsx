import { useEffect, useRef } from "react";

/**
 * Audio ambiental invisible:
 * - Se activa en el primer click de la página
 * - Cambia a modo "secret" cuando window.__xaleMode = "secret"
 */
export default function AudioToggle() {
  const ctxRef = useRef(null);
  const intervalRef = useRef(null);
  const modeRef = useRef("normal");

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    ctxRef.current?.close?.();
    ctxRef.current = null;
  };

  const start = (mode = "normal") => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctxRef.current = ctx;
    modeRef.current = mode;

    const master = ctx.createGain();
    master.gain.value = 0.16; // 🔊 volumen ambiente
    master.connect(ctx.destination);

    const playNote = (freq, duration = 0.7) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.value = freq;

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(master);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    };

    const normalSeq = [174, 196, 220, 196]; // lounge
    const secretSeq = [174, 220, 247, 196, 174]; // más tenso

    let i = 0;

    intervalRef.current = setInterval(() => {
      const seq = modeRef.current === "secret" ? secretSeq : normalSeq;
      playNote(seq[i % seq.length]);
      i++;
    }, 800);
  };

  useEffect(() => {
    const activate = () => {
      if (!ctxRef.current) {
        start("normal");
      }
      window.removeEventListener("click", activate);
    };

    window.addEventListener("click", activate);

    const modeWatcher = setInterval(() => {
      if (window.__xaleMode === "secret" && modeRef.current !== "secret") {
        stop();
        start("secret");
      }
    }, 300);

    return () => {
      stop();
      clearInterval(modeWatcher);
      window.removeEventListener("click", activate);
    };
  }, []);

  return null; // 👈 No renderiza nada
}

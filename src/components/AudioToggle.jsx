import React, { useRef, useState } from "react";

export default function AudioToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef(null);
  const intervalRef = useRef(null);

  const startJazz = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctxRef.current = ctx;

    const playNote = (freq, duration = 0.6) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.value = freq;

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    };

    // secuencia suave tipo lounge
    const notes = [220, 247, 196, 174]; // A3 B3 G3 F3
    let i = 0;

    intervalRef.current = setInterval(() => {
      playNote(notes[i % notes.length]);
      i++;
    }, 800);
  };

  const stopJazz = () => {
    clearInterval(intervalRef.current);
    ctxRef.current?.close();
  };

  const toggle = () => {
    if (!on) {
      startJazz();
      setOn(true);
    } else {
      stopJazz();
      setOn(false);
    }
  };

  return (
    <button className={`btn ${on ? "btn--accent" : ""}`} onClick={toggle}>
      {on ? "🎷 Jazz ON" : "🎷 Activar jazz"}
    </button>
  );
}

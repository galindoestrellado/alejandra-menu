import React, { useEffect, useMemo, useRef, useState } from "react";

import Progress from "./components/Progress";
import AudioToggle from "./components/AudioToggle";
import PasswordGate from "./components/PasswordGate";

import Welcome from "./screens/Welcome";
import Succionadoras from "./screens/Succionadoras";
import EntrantDelPais from "./screens/EntrantDelPais";
import LaPaisa from "./screens/LaPaisa";
import Principal from "./screens/Principal";
import Postre from "./screens/Postre";
import Digestivo from "./screens/Digestivo";
import SecretMenu from "./screens/SecretMenu";
import SecretIntro from "./screens/SecretIntro";
import Final from "./screens/Final";

export default function App() {
  const containerRef = useRef(null);
  const [unlocked, setUnlocked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // IDs en orden. OJO: secret/final solo existen cuando unlocked=true.
  const ids = useMemo(() => {
    const base = ["welcome", "succionadoras", "entrant", "paisa", "principal", "postre", "digestivo", "gate"];
    return unlocked ? [...base, "secret-intro", "secret", "final"] : base;
  }, [unlocked]);

  // Observa qué pantalla está visible para el indicador
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible) return;
        const idx = ids.indexOf(visible.target.id);
        if (idx >= 0) setActiveIndex(idx);
      },
      { root, threshold: [0.55, 0.65, 0.75] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  const scrollToId = (id) => {
    const root = containerRef.current;
    const el = document.getElementById(id);
    if (!root || !el) return;
    root.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  const handleUnlock = () => {
    setUnlocked(true);
    // Espera a que se rendericen Secret + Final y baja
    setTimeout(() => scrollToId("secret"), 150);
  };

  const handleRestart = () => {
    setUnlocked(false);
    setTimeout(() => scrollToId("welcome"), 80);
  };

  return (
    <>
      <div className="floating">
        <Progress current={activeIndex} total={ids.length} />
        <AudioToggle />
      </div>

      <div className="app" ref={containerRef}>
        <Welcome />
        <Succionadoras />
        <EntrantDelPais />
        <LaPaisa />
        <Principal />
        <Postre />
        <Digestivo />

        {/* Gate (última pantalla si NO está desbloqueado) */}
        <section id="gate" className="screen screen--gate">
          <div className="screen__inner">
            {!unlocked ? (
              <PasswordGate onUnlock={handleUnlock} />
            ) : (
              <div className="card">
                <div className="kicker">Menú secreto</div>
                <div className="h2" style={{ marginTop: 8 }}>🔓 Desbloqueado</div>
                <p className="p muted">Baja…</p>
              </div>
            )}
          </div>
        </section>

        {/* BLOQUEO TOTAL: estas pantallas NO existen hasta que se desbloquea */}
        {unlocked && (
          <>
            <SecretIntro />
            <SecretMenu />
            <Final onRestart={handleRestart} />
          </>
        )}
      </div>
    </>
  );
}

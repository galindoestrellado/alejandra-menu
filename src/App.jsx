import React, { useEffect, useMemo, useRef, useState } from "react";
import Progress from "./components/Progress.jsx";
import AudioToggle from "./components/AudioToggle.jsx";
import PasswordGate from "./components/PasswordGate.jsx";

import Welcome from "./screens/Welcome.jsx";
import Succionadoras from "./screens/Succionadoras.jsx";
import EntrantDelPais from "./screens/EntrantDelPais.jsx";
import LaPaisa from "./screens/LaPaisa.jsx";
import Principal from "./screens/Principal.jsx";
import Postre from "./screens/Postre.jsx";
import Digestivo from "./screens/Digestivo.jsx";
import SecretMenu from "./screens/SecretMenu.jsx";
import Final from "./screens/Final.jsx";

export default function App() {
  const containerRef = useRef(null);

  const ids = useMemo(
    () => ["welcome", "succionadoras", "entrant", "paisa", "principal", "postre", "digestivo", "gate", "secret", "final"],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

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
    setTimeout(() => scrollToId("secret"), 200);
  };

  const handleRestart = () => {
    setUnlocked(false);
    scrollToId("welcome");
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

        {/* Gate */}
        <section id="gate" className="screen" style={{ background: "linear-gradient(180deg, #07070a, #060610)" }}>
          <div className="screen__inner">
            {!unlocked ? (
              <PasswordGate onUnlock={handleUnlock} />
            ) : (
              <div className="card">
                <div className="kicker">Menú secreto</div>
                <div className="h2" style={{ marginTop: 8 }}>🔓 Servido</div>
                <p className="p muted">Baja…</p>
              </div>
            )}
          </div>
        </section>

        <SecretMenu />
        <Final onRestart={handleRestart} />
      </div>
    </>
  );
}

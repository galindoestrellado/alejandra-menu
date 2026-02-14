import React, { useMemo, useRef, useState } from "react";
import "./styles/app.css";

import Screen from "./components/Screen.jsx";
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

import SecretIntro from "./screens/SecretIntro.jsx";
import SecretMenu from "./screens/SecretMenu.jsx";
import Final from "./screens/Final.jsx";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [showEaster, setShowEaster] = useState(false);

  const clickCount = useRef(0);
  const clickTimeout = useRef(null);

  const run = useMemo(() => Math.floor(Math.random() * 999999), []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleUnlockCardClick = () => {
    clickCount.current += 1;

    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      clickCount.current = 0;
    }, 800);

    if (clickCount.current >= 3) {
      clickCount.current = 0;
      setShowEaster(true);
    }
  };

  return (
    <div className="app">
      <div className="floating">
        <Progress />
        <AudioToggle />
      </div>

      <Welcome run={run} />

      <Succionadoras />
      <EntrantDelPais />
      <LaPaisa />
      <Principal />
      <Postre />
      <Digestivo />

      {/* GATE */}
      <Screen id="gate" bg="gate" hintLabel={unlocked ? "Baja…" : undefined}>
        {!unlocked ? (
          <PasswordGate onUnlock={() => setUnlocked(true)} />
        ) : (
          <>
            {/* Fondo fullscreen con la foto (como te gustaba) */}
            <div className="gateBgFull">
              <img
                src={`${import.meta.env.BASE_URL}images/unlocked.jpg?v=999`}
                alt="Unlocked"
              />
              <div className="gateOverlayFull" />
            </div>

            {/* Card centrada encima + triple click */}
            <div className="gateCenterCard" onClick={handleUnlockCardClick}>
              <div className="kicker">Menú secreto</div>
              <div className="h2">🔓 Desbloqueado</div>
              <p className="p">Ahora sí…</p>

              <button
                className="btn btn--accent"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToId("secret-intro");
                }}
              >
                Entrar 😈
              </button>
            </div>
          </>
        )}
      </Screen>

      {/* 🔒 Importante: el secreto SOLO existe si está desbloqueado */}
      {unlocked && (
        <>
          <SecretIntro />
          <SecretMenu />
          <Final />
        </>
      )}

      {/* EASTER EGG */}
      {showEaster && (
        <div className="easterOverlay" onClick={() => setShowEaster(false)}>
          <div className="easterContent" onClick={(e) => e.stopPropagation()}>
            <img
              src={`${import.meta.env.BASE_URL}images/easter.jpg?v=1`}
              alt="Easter"
            />
            <button className="btn" onClick={() => setShowEaster(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

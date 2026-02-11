import { useEffect, useRef, useState } from "react";

export default function AudioToggle() {
  const audioRef = useRef(null);
  const startedRef = useRef(false);

  const [ready, setReady] = useState(false);    // muestra botón
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const src = `${import.meta.env.BASE_URL}audio/ambient.mp3`;

    const a = new Audio(src);
    a.loop = true;
    a.preload = "auto";
    a.volume = 0.35; // 🔊 ajusta aquí
    audioRef.current = a;

    const tryPlay = async () => {
      if (!audioRef.current) return;

      try {
        audioRef.current.load();
        await audioRef.current.play();

        startedRef.current = true;
        setReady(true);
        setPlaying(true);

        // ya no hace falta seguir escuchando gestos
        removeGestureListeners();
      } catch {
        // si falla, no marcamos started: reintentará en el siguiente gesto
        setReady(true); // mostramos botón igualmente por si quiere darle a "Play"
        setPlaying(false);
      }
    };

    const onGesture = () => {
      if (startedRef.current) return;
      tryPlay();
    };

    const addGestureListeners = () => {
      window.addEventListener("pointerdown", onGesture);
      window.addEventListener("touchstart", onGesture, { passive: true });

      // “scroll” real:
      window.addEventListener("wheel", onGesture, { passive: true });
      window.addEventListener("touchmove", onGesture, { passive: true });
      window.addEventListener("scroll", onGesture, { passive: true });
      window.addEventListener("keydown", onGesture);
    };

    const removeGestureListeners = () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("touchstart", onGesture);

      window.removeEventListener("wheel", onGesture);
      window.removeEventListener("touchmove", onGesture);
      window.removeEventListener("scroll", onGesture);
      window.removeEventListener("keydown", onGesture);
    };

    addGestureListeners();

    // 🔇 Pausar cuando se va a segundo plano / cambia pestaña
    const pauseForBackground = () => {
      if (!audioRef.current) return;
      audioRef.current.pause();
      setPlaying(false);
    };

    const onVisibility = () => {
      if (document.hidden) pauseForBackground();
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", pauseForBackground);
    window.addEventListener("blur", pauseForBackground);

    return () => {
      removeGestureListeners();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", pauseForBackground);
      window.removeEventListener("blur", pauseForBackground);

      try {
        a.pause();
      } catch {}
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;

    try {
      if (a.paused) {
        await a.play();
        startedRef.current = true;
        setReady(true);
        setPlaying(true);
      } else {
        a.pause();
        setPlaying(false);
      }
    } catch {
      // Si el navegador bloquea, se quedará pausado
      setReady(true);
      setPlaying(false);
    }
  };

  // Botón pequeño siempre visible una vez “ready”
  if (!ready) return null;

  return (
    <button className={`btn audioBtn ${playing ? "btn--accent" : ""}`} onClick={toggle}>
      {playing ? "🔈" : "🔇"}
    </button>
  );
}

import { useEffect, useRef } from "react";

export default function AudioToggle() {
  const audioRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const src = `${import.meta.env.BASE_URL}audio/ambient.mp3`;

    const a = new Audio(src);
    a.loop = true;
    a.preload = "auto";
    a.volume = 0.35; // 🔊 ajusta aquí
    audioRef.current = a;

    // Intenta reproducir. Si falla, NO marcamos started y seguimos escuchando gestos.
    const tryPlay = async () => {
      if (!audioRef.current) return;

      try {
        // En algunos móviles ayuda “despertar” el audio cargando
        audioRef.current.load();

        await audioRef.current.play();
        startedRef.current = true;

        // Una vez suena, ya podemos dejar de escuchar
        window.removeEventListener("pointerdown", onGesture);
        window.removeEventListener("touchstart", onGesture);
        window.removeEventListener("click", onGesture);
      } catch (e) {
        // No hacemos nada: el siguiente toque lo reintentará
        // (esto es lo que arregla tu caso)
      }
    };

    const onGesture = () => {
      if (startedRef.current) return;
      tryPlay();
    };

    // Escuchamos varios tipos de gesto para móvil/desktop
    window.addEventListener("pointerdown", onGesture);
    window.addEventListener("touchstart", onGesture, { passive: true });
    window.addEventListener("click", onGesture);

    return () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("click", onGesture);
      try {
        a.pause();
      } catch {}
      audioRef.current = null;
    };
  }, []);

  return null;
}

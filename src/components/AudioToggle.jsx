import { useEffect, useRef } from "react";

export default function AudioToggle() {
  const audioRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const src = `${import.meta.env.BASE_URL}audio/ambient.mp3`;
    const a = new Audio(src);
    a.loop = true;
    a.preload = "auto";
    a.volume = 0.35; // 🔊 ajusta aquí (0.0 a 1.0)

    audioRef.current = a;

    const activate = async () => {
      if (startedRef.current) return;
      startedRef.current = true;

      try {
        await a.play();
      } catch {
        // si falla, es por política del navegador o porque el archivo no existe
        // (normalmente con primer click debería ir)
      } finally {
        window.removeEventListener("pointerdown", activate);
        window.removeEventListener("click", activate);
        window.removeEventListener("touchstart", activate);
      }
    };

    // varios eventos para cubrir móvil/desktop
    window.addEventListener("pointerdown", activate, { once: true });
    window.addEventListener("click", activate, { once: true });
    window.addEventListener("touchstart", activate, { once: true });

    return () => {
      try {
        a.pause();
      } catch {}
      audioRef.current = null;
    };
  }, []);

  return null; // no renderiza nada
}

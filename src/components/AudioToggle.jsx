import React, { useEffect, useRef, useState } from "react";

export default function AudioToggle() {
  const audioRef = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(
      `${import.meta.env.BASE_URL}audio/jazz-loop.mp3`
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.25;

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = async () => {
    try {
      if (!on) {
        await audioRef.current.play();
        setOn(true);
      } else {
        audioRef.current.pause();
        setOn(false);
      }
    } catch {
      setOn(false);
    }
  };

  return (
    <button className={`btn ${on ? "btn--accent" : ""}`} onClick={toggle}>
      {on ? "🎵 Ambiente ON" : "🎵 Activar ambiente"}
    </button>
  );
}

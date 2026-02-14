import React, { useEffect, useState } from "react";

export default function Progress() {
  const [index, setIndex] = useState(1);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    const sections = document.querySelectorAll(".screen");
    if (!sections.length) return;

    setTotal(sections.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleIndex =
              Array.from(sections).indexOf(entry.target) + 1;
            setIndex(visibleIndex);
          }
        });
      },
      {
        threshold: 0.6, // cuando el 60% de la pantalla está visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="progress">
      <div>
        {index}/{total}
      </div>
      <div className="progress__bar">
        <div style={{ width: `${(index / total) * 100}%` }} />
      </div>
    </div>
  );
}

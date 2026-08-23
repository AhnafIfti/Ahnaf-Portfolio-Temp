// src/components/RotatingText/RotatingText.jsx
import { useEffect, useState } from "react";
import "./RotatingText.css";

export default function RotatingText({ words, interval = 2200 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className="rotating-text">
      {/* key={index} forces React to remount this span every time the
          word changes, which re-triggers the CSS slide-up animation
          below — no animation library needed for this. */}
      <span key={index} className="rotating-text__item">
        {words[index]}
      </span>
    </span>
  );
}

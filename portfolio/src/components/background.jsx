import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Background() {
  const containerRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(90);
  const [count, setCount] = useState(1);
  const [bgColor, setBgColor] = useState(""); // clicked color
  const navigate = useNavigate();

  const colors = ["#9295BB", "#B0B6CC", "#FEE9C6"];

  useEffect(() => {
    function updateBoxes() {
      if (!containerRef.current) return;
      const totalWidth = containerRef.current.clientWidth;
      const minScreen = 320;
      const maxScreen = 1200;
      const minWidth = 80;
      const maxWidth = 120;

      const t = (totalWidth - minScreen) / (maxScreen - minScreen);
      const clampedT = Math.min(Math.max(t, 0), 1);

      let calcWidth = minWidth + clampedT * (maxWidth - minWidth);
      const fullBoxesCount = Math.floor(totalWidth / calcWidth);
      const totalBoxes = fullBoxesCount + 1;

      setBoxWidth(calcWidth);
      setCount(totalBoxes);
    }

    updateBoxes();
    window.addEventListener("resize", updateBoxes);
    return () => window.removeEventListener("resize", updateBoxes);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor || "#B0B6CC";
  }, [bgColor]);

  const handleBoxClick = (index) => {
    const color = colors[index % 3];
    setBgColor(color);

    setTimeout(() => {
      if (index % 3 === 0) navigate("/movies");
      if (index % 3 === 1) navigate("/arts");
      if (index % 3 === 2) navigate("/photos");
    }, 500);
  };

  return (
    <div className="background" ref={containerRef}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="box"
          style={{
            flex: `0 0 ${boxWidth}px`,
            maxWidth: `${boxWidth}px`,
            minWidth: `${boxWidth}px`,
            backgroundColor: bgColor || colors[i % 3],
            transition: "background-color 2s ease",
          }}
          onClick={() => handleBoxClick(i)}
        />
      ))}
    </div>
  );
}

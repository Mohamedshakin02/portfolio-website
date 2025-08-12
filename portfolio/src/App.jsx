import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const containerRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(90);
  const [count, setCount] = useState(1);

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

      // Clamp width between min and max just in case
      if (calcWidth < minWidth) calcWidth = minWidth;
      if (calcWidth > maxWidth) calcWidth = maxWidth;

      // Calculate how many boxes fit fully with this width
      const fullBoxesCount = Math.floor(totalWidth / calcWidth);

      // Add one extra box
      const totalBoxes = fullBoxesCount + 1;

      setBoxWidth(calcWidth);
      setCount(totalBoxes);
    }

    updateBoxes();
    window.addEventListener("resize", updateBoxes);
    return () => window.removeEventListener("resize", updateBoxes);
  }, []);

  return (
    <div className="background" ref={containerRef}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`box ${getColorClass(i)}`}
          style={{
            flex: `0 0 ${boxWidth}px`,
            maxWidth: `${boxWidth}px`,
            minWidth: `${boxWidth}px`,
          }}
        />
      ))}
    </div>
  );
}

function getColorClass(index) {
  const mod = index % 3;
  if (mod === 0) return "a";
  if (mod === 1) return "b";
  return "c";
}

export default App;

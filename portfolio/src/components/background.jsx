import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";
import "/stylesheet/background.css"; 

export default function Background() {
  const containerRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(90);
  const [count, setCount] = useState(1);
  const [bgColor, setBgColor] = useState(""); 
  const navigate = useNavigate();
  const location = useLocation();

  const colors = ["#9295BB", "#B0B6CC", "#FEE9C6"];

  // calculate responsive box width & count
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

  // set background color based on route
  useEffect(() => {
    if (location.pathname === "/rgb-game") setBgColor(colors[0]);
    else if (location.pathname === "/arts") setBgColor(colors[1]);
    else if (location.pathname === "/photos") setBgColor(colors[2]);
    else setBgColor(""); // home/default → striped
  }, [location.pathname]);

  // update body bg
  useEffect(() => {
    document.body.style.backgroundColor = bgColor || "#B0B6CC";
  }, [bgColor]);

  const handleBoxClick = (index) => {
    const color = colors[index % 3];
    setBgColor(color);

    setTimeout(() => {
      if (index % 3 === 0) navigate("/rgb-game");
      if (index % 3 === 1) navigate("/arts");
      if (index % 3 === 2) navigate("/photos");
    }, 500);
  };

  return (
    <div className="background fixed-top" ref={containerRef}>
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

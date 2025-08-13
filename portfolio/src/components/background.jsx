import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import '../App.css';

// Home Page
function Home() {
  const containerRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(90);
  const [count, setCount] = useState(1);
  const [bgColor, setBgColor] = useState(""); // clicked color for global background
  const navigate = useNavigate();

  const colors = ["#9295BB", "#B0B6CC", "#FEE9C6"];

  // Resize logic
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
      calcWidth = Math.max(minWidth, Math.min(calcWidth, maxWidth));

      const fullBoxesCount = Math.floor(totalWidth / calcWidth);
      const totalBoxes = fullBoxesCount + 1;

      setBoxWidth(calcWidth);
      setCount(totalBoxes);
    }

    updateBoxes();
    window.addEventListener("resize", updateBoxes);
    return () => window.removeEventListener("resize", updateBoxes);
  }, []);

  // Update body background
  useEffect(() => {
    document.body.style.backgroundColor = bgColor || "#B0B6CC";
  }, [bgColor]);

  const handleBoxClick = (index) => {
    const color = colors[index % 3];
    setBgColor(color);

    // Animate and then navigate
    setTimeout(() => {
      if (index % 3 === 0) navigate("/movies");
      if (index % 3 === 1) navigate("/games");
      if (index % 3 === 2) navigate("/foods");
    }, 500); // wait for color transition
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

// Pages
function Movies() {
  return <div className="page" style={{ backgroundColor: "#9295BB", height: "100vh" }}><h1 style={{ textAlign: "center" }}>Movies Page</h1></div>;
}
function Games() {
  return <div className="page" style={{ backgroundColor: "#B0B6CC", height: "100vh" }}><h1 style={{ textAlign: "center" }}>Games Page</h1></div>;
}
function Foods() {
  return <div className="page" style={{ backgroundColor: "#FEE9C6", height: "100vh" }}><h1 style={{ textAlign: "center" }}>Foods Page</h1></div>;
}

// App Router
export default function Background() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/games" element={<Games />} />
        <Route path="/foods" element={<Foods />} />
      </Routes>
    </Router>
  );
}

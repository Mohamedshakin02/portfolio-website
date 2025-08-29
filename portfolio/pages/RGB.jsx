import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheet/rgb.css"; // or rgb.scss if using sass-loader

function RGB() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // go back to the previous page
  };

  const [colors, setColors] = useState([]);
  const [targetColor, setTargetColor] = useState("");
  const [result, setResult] = useState("");

  // Generate random color
  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Setup new round
  const newGame = () => {
    let generatedColors = [randomColor(), randomColor(), randomColor()];
    setColors(generatedColors);
    setTargetColor(
      generatedColors[Math.floor(Math.random() * generatedColors.length)]
    );
    setResult("");
  };

  // Run game on first load
  useEffect(() => {
    newGame();
  }, []);

  // Handle click on a box
  const checkAnswer = (choice) => {
    if (choice === targetColor) {
      setResult(
        `${colors.indexOf(choice) === 0
          ? "A"
          : colors.indexOf(choice) === 1
            ? "B"
            : "C"
        } is the right answer`
      );
    } else {
      setResult("Try again!");
    }
  };

  return (
    <>
      <div className="rgb-page-background container-fluid" style={{ zIndex: 1, pointerEvents: "auto" }}>
        <div className="page rgb-page container-fluid" style={{ zIndex: 1, pointerEvents: "auto" }}>
          {/* Back Button */}
          <div className="back container-md mt-5">
            <button
              onClick={handleBack}
              className="btn text-decoration-none text-body text-dark fw-medium d-flex justify-content-center py-1 px-3 py-lg-2 px-lg-3 fs-5"
            >
              BACK
            </button>
          </div>

          {/* Game */}
          <div className="game-container container-lg my-5">
            <h1 className="text-center display-4 fw-bold">RGB GAME</h1>

            <div className="game">
              {/* Menu */}
              <div className="menu">
                <p className="fs-2 fw-medium">
                  Guess the color of <span id="rgb-name">{targetColor}</span>
                </p>
                <p>
                  <span id="result" className="fs-4 fw-medium">{result}</span>
                </p>
              </div>

              {/* Color Boxes */}
              <div className="container">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    id={`box${index + 1}`}
                    style={{ backgroundColor: color }}
                    onClick={() => checkAnswer(color)}
                  >
                    <p id={["first", "second", "third"][index]}>{color}</p>
                    <p className="option p-2 fs-1">{["A", "B", "C"][index]}</p>
                  </div>
                ))}
              </div>

              {/* Play Again */}
              <div className="play-button">
                <button onClick={newGame} className="btn text-decoration-none text-body text-dark fw-medium">Play Again</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RGB;

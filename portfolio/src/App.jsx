import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Movies from "../pages/Movies";
import Photos from "../pages/Photos";
import Arts from "../pages/Arts";
import Home from "./components/Home";
import Background from "./components/background";
import Header from "./components/Header";
import Preloader from "./components/Preloader";

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0, zIndex: 0
        }}
      >
        <Background />
      </div>

      <div style={{ position: "relative", zIndex: 1, pointerEvents: "none" }}>
        {isHome && (
          <div style={{ pointerEvents: "auto" }}>
            <Header />
          </div>
        )}

        <main
          className="container-fluid p-0"
          style={{
            pointerEvents: "none",
            paddingTop: "6rem"
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = Array.from(document.images); // get all images in app

    if (images.length === 0) {
      setLoading(false); // no images, remove loader immediately
      return;
    }

    let loadedCount = 0;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setLoading(false); // all images done
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkAllLoaded();
      } else {
        img.addEventListener("load", checkAllLoaded);
        img.addEventListener("error", checkAllLoaded);
      }
    });

    // fallback in case some image never fires load/error
    const timer = setTimeout(() => setLoading(false), 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/arts" element={<Arts />} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
}

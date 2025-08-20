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
    // Select all images in the page
    const images = Array.from(document.images);
    let loadedCount = 0;

    if (images.length === 0) {
      setLoading(false); // no images → hide preloader immediately
      return;
    }

    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) setLoading(false);
    };

    images.forEach(img => {
      if (img.complete) {
        onImageLoad();
      } else {
        img.addEventListener("load", onImageLoad);
        img.addEventListener("error", onImageLoad); // handle broken images
      }
    });

    // Fallback timer (5s)
    const timer = setTimeout(() => setLoading(false), 5000);

    return () => {
      images.forEach(img => {
        img.removeEventListener("load", onImageLoad);
        img.removeEventListener("error", onImageLoad);
      });
      clearTimeout(timer);
    };
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

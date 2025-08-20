import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Movies from "../pages/Movies";
import Photos from "../pages/Photos";
import Arts from "../pages/Arts";
import Home from "./components/Home";
import Background from "./components/background";
import Header from "./components/Header";

// Loader Component
function Preloader() {
  return (
    <div className="preloader">
      <img src={require("./assets/loading.gif")} alt="Loading..." />
    </div>
  );
}

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
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      // Page already loaded
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      // ✅ Fallback for Safari: force remove loader after 5s
      const timer = setTimeout(() => setLoading(false), 5000);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timer);
      };
    }
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

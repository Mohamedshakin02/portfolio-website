import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import RGB from "../pages/RGB";
import Photos from "../pages/Photos";
import Arts from "../pages/Arts";
import Home from "../pages/Home";
import Background from "./components/background";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import AboutPage from "../pages/AboutPage";
import NotFound from "../pages/NotFound";
import ProjectsPage from "../pages/ProjectsPage";
import CertificatesPage from "../pages/CertificatesPage";
import ContactPage from "../pages/ContactPage";

// ✅ helper to preload all images
function preloadImages(urls) {
  return Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // still resolve on error
        })
    )
  );
}

// Layout with Background + Header
function Layout({ children }) {
  const location = useLocation();
  const isHome = ["/", "/about", "/projects", "/certificates", "/contact"].includes(
    location.pathname
  );

  return (
    <div style={{ position: "relative" }}>
      {/* Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <Background />
      </div>

      {/* Foreground */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {isHome && <Header />}
        <main className="container-fluid p-0" style={{ paddingTop: "6rem" }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Collect all image URLs (backgrounds, page images, assets)
    const urls = Array.from(document.querySelectorAll("img")).map((img) => img.src);

    // Always show loader immediately
    setLoading(true);

    // Preload them
    preloadImages(urls).then(() => {
      // Add a small delay so loader feels smooth (e.g., 1s min)
      setTimeout(() => setLoading(false), 1000);
    });
  }, [location.pathname]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/rgb-game" element={<RGB />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

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

// Layout with Background + Header
function Layout({ children }) {
  const location = useLocation();
  const isHome = ["/", "/about", "/projects","/certificates","/contact"].includes(location.pathname);

  return (
    <div style={{ position: "relative" }}>
      {/* Background */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0, zIndex: 0
        }}
      >
        <Background />
      </div>

      {/* Foreground content */}
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

// Hook to show Preloader on route changes
function usePageLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const images = Array.from(document.images);
    let loadedCount = 0;

    if (images.length === 0) {
      setLoading(false);
      return;
    }

    const onLoadOrError = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setLoading(false);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener("load", onLoadOrError);
        img.addEventListener("error", onLoadOrError);
      }
    });

    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", onLoadOrError);
        img.removeEventListener("error", onLoadOrError);
      });
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return loading;
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const loading = usePageLoader();

  return loading ? (
    <Preloader />
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certificates" element={<CertificatesPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/rgb-game" element={<RGB/>} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

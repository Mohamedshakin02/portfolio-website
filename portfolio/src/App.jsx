import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Movies from "../pages/Movies";
import Photos from "../pages/Photos";
import Arts from "../pages/Arts";
import Home from "./components/Home";
import Background from "./components/background";
import Header from "./components/Header";

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div style={{ position: "relative"}}>
      {/* Background always clickable behind */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0, zIndex: 0
        }}
      >
        <Background />
      </div>

      {/* Wrap foreground content in a "clickable only on content" layer */}
      <div style={{ position: "relative", zIndex: 1, pointerEvents: "none" }}>
        {isHome && (
          <div style={{ pointerEvents: "auto" }}>
            <Header/>
          </div>
        )}

        <main
          className="container-fluid p-0"
          style={{
            position: "relative",
            top: 150,
            pointerEvents: "none",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}




export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/arts" element={<Arts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

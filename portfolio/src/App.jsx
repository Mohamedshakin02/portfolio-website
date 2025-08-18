// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Background from "./components/background";
import Header from "./components/header";
import Movies from "../pages/Movies";
import Photos from "../pages/Photos";
import Arts from "../pages/Arts";
import Home from "./components/Home";

// Wrapper to conditionally show Header
function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome && <Header />} {/* show only on home */}
      {children}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/photos" element={<Photos/>} />
          <Route path="/arts" element={<Arts/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

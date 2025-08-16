import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function Header() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("Home");

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Certificates", link: "/certificates" },
    { name: "Contact", link: "/contact" },
  ];

  // Update currentPage when URL changes
  useEffect(() => {
    const found = menuItems.find((item) => item.link === location.pathname);
    if (found) {
      setCurrentPage(found.name);
    }
  }, [location.pathname]);

  return (
    <header className="position-absolute top-0 start-0 w-100 my-4 d-flex justify-content-center">
      <nav className="navbar navbar-expand-md bg-body-tertiary rounded-pill w-100 w-lg-auto mx-3 px-3 container-lg position-relative">
        <div className="container-fluid d-flex align-items-center">
          {/* Small screen title */}
          <span className="navbar-brand d-md-none fw-bold position-absolute top-50 start-50 translate-middle">
            {currentPage}
          </span>

          {/* Toggle button */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-three-dots-vertical text-dark"></i>
          </button>

          {/* Collapse menu */}
          <div
            className="collapse navbar-collapse mobile-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-lg-0 w-100 d-flex flex-column flex-md-row justify-content-between text-center">
              {menuItems.map((item, index) => (
                <li
                  className="nav-item fs-4 fw-bold menu-item"
                  key={item.name}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link
                    className={`nav-link ${
                      currentPage === item.name ? "active" : ""
                    }`}
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

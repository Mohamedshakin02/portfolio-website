import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import "/stylesheet/header.css"; 

function Header() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const menuItems = [
    { name: "Home", link: "#h" },
    { name: "About", link: "#" },
    { name: "Projects", link: "#j" },
    { name: "Certificates", link: "#" },
    { name: "Contact", link: "#" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuToggle = () => setMenuOpen(prev => !prev);

  const handleMenuItemClick = (name) => {
    setCurrentPage(name);
    setMenuOpen(false);
  };

  return (
    <header className="position-absolute top-25 start-50 translate-middle container-lg my-4 mx-2 mx-lg-auto">
      <nav className="navbar navbar-expand-md bg-body-tertiary rounded-pill w-100  px-3 container-lg position-relative z-3">
        <div className="container-fluid d-flex align-items-center">
          {/* Small screen title */}
          <span className="navbar-brand d-md-none fw-bold position-absolute top-50 start-50 translate-middle z-index-3">
            {currentPage}
          </span>

          {/* Toggle button */}
          <button
            ref={buttonRef}
            className="navbar-toggler ms-auto"
            type="button"
            aria-label="Toggle navigation"
            onClick={handleMenuToggle}
          >
            <i className="bi bi-three-dots-vertical text-dark"></i>
          </button>

          {/* Menu */}
          <div
            ref={menuRef}
            className={`mobile-menu z-n1-md w-100 ${menuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav mb-lg-0 w-100 d-flex flex-column flex-md-row justify-content-between text-center">
              {menuItems.map((item, index) => (
                <li
                  className="nav-item fs-4 fw-bold menu-item"
                  key={item.name}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    className={`nav-link ${currentPage === item.name ? 'active' : ''}`}
                    aria-current="page"
                    href={item.link}
                    onClick={() => handleMenuItemClick(item.name)}
                  >
                    {item.name}
                  </a>
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

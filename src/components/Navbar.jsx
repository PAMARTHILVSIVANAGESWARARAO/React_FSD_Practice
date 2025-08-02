import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg white-green-navbar">
      <div className="container-fluid">
        <a className="navbar-brand brand-name" href="#">Siva's Portfolio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  href={`#${item}`}
                  className={`nav-link nav-item-custom ${activeLink === item ? "active-nav" : ""}`}
                  onClick={() => handleSetActive(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

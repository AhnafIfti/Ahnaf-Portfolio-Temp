// src/containers/Navbar/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import { navLinks, site } from "../../data/content";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <NavLink
          to="/"
          className="navbar__brand"
          onClick={() => setIsOpen(false)}
        >
          {site.name}
        </NavLink>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Icon name={isOpen ? "close" : "menu"} size={22} />
        </button>

        <ul className={`navbar__links ${isOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) => (isActive ? "is-active" : "")}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

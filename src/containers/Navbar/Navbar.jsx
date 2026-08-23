// src/containers/Navbar/Navbar.jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import { navLinks } from "../../data/content";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar__inner">
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

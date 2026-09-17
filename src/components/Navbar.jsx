import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { site } from "../data/site";
import "../styles/Navbar.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/plants", label: "Plants" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Testimonials" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header className={`navbar ${transparent ? "navbar--transparent" : ""} ${menuOpen ? "navbar--open" : ""}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo" aria-label={site.name}>
            <span className="navbar__logo-icon"><Leaf size={22} /></span>
            <span className="navbar__logo-text">{site.name}</span>
          </Link>

          <nav className="navbar__links" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/location" className="btn btn--primary navbar__cta">
            Visit Nursery
          </Link>

          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`drawer ${menuOpen ? "drawer--open" : ""}`}>
        <nav className="drawer__nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `drawer__link ${isActive ? "drawer__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/location" className="btn btn--primary drawer__cta">
            Visit Nursery
          </Link>
        </nav>
      </div>
      {menuOpen && <div className="drawer__overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

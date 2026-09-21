
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      <motion.header
        className={`navbar ${
          transparent ? "navbar--transparent" : ""
        } ${menuOpen ? "navbar--open" : ""}`}
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div className="navbar__inner">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
          >
            <Link
              to="/"
              className="navbar__logo"
              aria-label={site.name}
            >
              <motion.span
                className="navbar__logo-icon"
                whileHover={{
                  rotate: 12,
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <Leaf size={22} />
              </motion.span>

              <span className="navbar__logo-text">
                {site.name}
              </span>
            </Link>
          </motion.div>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="navbar__links"
            aria-label="Main navigation"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + index * 0.06,
                }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `navbar__link ${
                      isActive ? "navbar__link--active" : ""
                    }`
                  }
                >
                  <motion.span
                    whileHover={{
                      y: -2,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {link.label}
                  </motion.span>
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* VISIT NURSERY BUTTON */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              to="/location"
              className="btn btn--primary navbar__cta"
            >
              Visit Nursery
            </Link>
          </motion.div>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            className="navbar__toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="drawer drawer--open"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <nav
                className="drawer__nav"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                    }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        `drawer__link ${
                          isActive
                            ? "drawer__link--active"
                            : ""
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.45,
                  }}
                >
                  <Link
                    to="/location"
                    className="btn btn--primary drawer__cta"
                  >
                    Visit Nursery
                  </Link>
                </motion.div>
              </nav>
            </motion.div>

            {/* OVERLAY */}
            <motion.div
              className="drawer__overlay"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}


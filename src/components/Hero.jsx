
import { Link } from "react-router-dom";
import { Check, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Overlay */}
      <motion.div
        className="hero__overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Content */}
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        {/* Eyebrow */}
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
        >
          <motion.span
            animate={{
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            style={{ display: "inline-flex" }}
          >
            <Leaf size={16} />
          </motion.span>

          Welcome to Our Nursery
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.55,
            ease: "easeOut",
          }}
        >
          Sri Jithendra Nursery
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
        >
          Growing Nature, Growing Life
        </motion.p>

        {/* Description */}
        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.85,
          }}
        >
          Discover beautiful plants, trees and gardening essentials carefully
          selected to bring freshness, beauty and life to your home and
          surroundings.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero__buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 1,
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              to="/plants"
              className="btn btn--primary btn--large"
            >
              Explore Plants
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              to="/location"
              className="btn btn--outline-light btn--large"
            >
              Visit Our Nursery
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Points */}
        <motion.div
          className="hero__trust"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 1.2,
          }}
        >
          {[
            "Quality Plants",
            "Expert Guidance",
            "Affordable Prices",
          ].map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.25 + index * 0.12,
              }}
            >
              <Check size={16} /> {item}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative Leaves */}
      <div className="hero__leaves" aria-hidden="true">
        <motion.div
          className="hero__leaf hero__leaf--1"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="hero__leaf hero__leaf--2"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="hero__leaf hero__leaf--3"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </section>
  );
}


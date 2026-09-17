import { Link } from "react-router-dom";
import { Check, Leaf } from "lucide-react";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">
          <Leaf size={16} /> Welcome to Our Nursery
        </p>
        <h1 className="hero__title">Sri Jithendra Nursery</h1>
        <p className="hero__tagline">Growing Nature, Growing Life</p>
        <p className="hero__desc">
          Discover beautiful plants, trees and gardening essentials carefully
          selected to bring freshness, beauty and life to your home and
          surroundings.
        </p>
        <div className="hero__buttons">
          <Link to="/plants" className="btn btn--primary btn--large">Explore Plants</Link>
          <Link to="/location" className="btn btn--outline-light btn--large">Visit Our Nursery</Link>
        </div>
        <div className="hero__trust">
          <span><Check size={16} /> Quality Plants</span>
          <span><Check size={16} /> Expert Guidance</span>
          <span><Check size={16} /> Affordable Prices</span>
        </div>
      </div>
      <div className="hero__leaves" aria-hidden="true">
        <div className="hero__leaf hero__leaf--1" />
        <div className="hero__leaf hero__leaf--2" />
        <div className="hero__leaf hero__leaf--3" />
      </div>
    </section>
  );
}

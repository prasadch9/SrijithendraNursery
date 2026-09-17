import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import useSEO from "../hooks/useSEO";
import "../styles/NotFound.css";

export default function NotFound() {
  useSEO(
    "Page Not Found | Sri Jithendra Nursery",
    "The page you are looking for could not be found."
  );

  return (
    <section className="not-found">
      <div className="not-found__content">
        <span className="not-found__icon"><Leaf size={48} /></span>
        <h1 className="not-found__code">404</h1>
        <h2 className="not-found__title">Oops! This Page Got Lost in the Garden</h2>
        <p className="not-found__desc">Let's take you back to Sri Jithendra Nursery.</p>
        <Link to="/" className="btn btn--primary btn--large">Back to Home</Link>
      </div>
    </section>
  );
}

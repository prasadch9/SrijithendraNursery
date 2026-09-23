import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import useReveal from "../hooks/useReveal";
import "../styles/CTASection.css";

export default function CTASection() {
  const { ref, visible } = useReveal();

  return (
    <section className="cta" ref={ref}>
      <div className="cta__overlay" />
      <div className={`cta__content ${visible ? "reveal" : "reveal--hidden"}`}>
        <span className="cta__icon"><Leaf size={28} /></span>
        <h2 className="cta__title">Ready to Bring More Green Into Your Life?</h2>
        <p className="cta__desc">
          Visit Sri Jithendra Nursery and discover plants that make your space
          feel fresh, beautiful and alive.
        </p>
        <div className="cta__buttons">
          <Link to="/plants" className="btn btn--primary btn--large">Explore Plants</Link>
          <a
  href="/location"
  className="btn btn--outline-light btn--large"
>
  Visit Nursery
</a>
</div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import useReveal from "../hooks/useReveal";
import "../styles/ServiceCard.css";

export default function ServiceCard({ service }) {
  const { ref, visible } = useReveal();
  const Icon = Icons[service.icon] || Icons.Leaf;

  return (
    <article
      ref={ref}
      className={`service-card ${visible ? "reveal" : "reveal--hidden"}`}
    >
      <div className="service-card__icon">
        <Icon size={28} />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.description}</p>
      <button className="service-card__link">
        Learn More <ArrowRight size={15} />
      </button>
    </article>
  );
}

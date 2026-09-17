import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "../data/site";
import useReveal from "../hooks/useReveal";
import "../styles/PlantCard.css";

export default function PlantCard({ plant }) {
  const { ref, visible } = useReveal();
  const waMessage = `Hello ${plant.name}, I would like to enquire about this plant at Sri Jithendra Nursery.`;

  return (
    <article
      ref={ref}
      className={`plant-card ${visible ? "reveal" : "reveal--hidden"}`}
    >
      <div className="plant-card__image-wrap">
        <img src={plant.image} alt={plant.name} loading="lazy" className="plant-card__image" />
        <span className="plant-card__category">{plant.category}</span>
      </div>
      <div className="plant-card__body">
        <h3 className="plant-card__name">{plant.name}</h3>
        <p className="plant-card__desc">{plant.shortDesc}</p>
        <p className="plant-card__price">{plant.price}</p>
        <div className="plant-card__actions">
          <Link to={`/plants/${plant.id}`} className="btn btn--ghost plant-card__details">
            View Details <ArrowRight size={16} />
          </Link>
          <a
            href="/contact"
            target="_self"
            rel="noopener noreferrer"
            className="btn btn--primary plant-card__enquire"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </article>
  );
}

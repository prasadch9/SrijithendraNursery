import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Sun, Droplets, Sprout, Check, MessageCircle } from "lucide-react";
import { getPlantById } from "../data/plants";
import { whatsappLink } from "../data/site";
import useSEO from "../hooks/useSEO";
import "../styles/PlantDetails.css";

export default function PlantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plant = getPlantById(id);

  useSEO(
    plant ? `${plant.name} | Sri Jithendra Nursery` : "Plant Not Found | Sri Jithendra Nursery",
    plant ? plant.shortDesc : "The plant you are looking for could not be found."
  );

  if (!plant) {
    return (
      <div className="plant-details__not-found">
        <h2>Plant Not Found</h2>
        <p>The plant you are looking for is not available.</p>
        <Link to="/plants" className="btn btn--primary">Back to Plants</Link>
      </div>
    );
  }

  const waMessage = `Hello Sri Jithendra Nursery, I would like to enquire about ${plant.name}.`;

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__pattern" />
        <div className="page-hero__content">
          <h1>{plant.name}</h1>
          <p>{plant.category}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <button className="btn btn--ghost plant-details__back" onClick={() => navigate(-1)}>
            <ArrowLeft size={18} /> Back to Plants
          </button>

          <div className="plant-details">
            <div className="plant-details__image-wrap">
              <img src={plant.image} alt={plant.name} className="plant-details__image" />
              <span className="plant-details__category">{plant.category}</span>
            </div>

            <div className="plant-details__info">
              <h2 className="plant-details__name">{plant.name}</h2>
              <p className="plant-details__desc">{plant.description}</p>

              <div className="plant-details__price-row">
                <span className="plant-details__price">{plant.price}</span>
                <a
                  href={whatsappLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp"
                >
                  <MessageCircle size={18} /> Enquire Now
                </a>
              </div>

              {/* Requirements */}
              <div className="plant-details__requirements">
                <div className="plant-details__req">
                  <Sun size={20} />
                  <div>
                    <h4>Sunlight</h4>
                    <p>{plant.sunlight}</p>
                  </div>
                </div>
                <div className="plant-details__req">
                  <Droplets size={20} />
                  <div>
                    <h4>Water</h4>
                    <p>{plant.water}</p>
                  </div>
                </div>
                <div className="plant-details__req">
                  <Sprout size={20} />
                  <div>
                    <h4>Soil</h4>
                    <p>{plant.soil}</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="plant-details__benefits">
                <h4>Benefits</h4>
                <ul>
                  {plant.benefits.map((b, i) => (
                    <li key={i}><Check size={16} /> {b}</li>
                  ))}
                </ul>
              </div>

              {/* Care */}
              <div className="plant-details__care">
                <h4>Care Instructions</h4>
                <p>{plant.care}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

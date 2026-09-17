import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, Sprout, Handshake, BadgeCheck, Headphones } from "lucide-react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import PlantCard from "../components/PlantCard";
import CTASection from "../components/CTASection";
import { plants } from "../data/plants";
import useSEO from "../hooks/useSEO";
import useReveal from "../hooks/useReveal";
import "../styles/Home.css";

const whyChooseUs = [
  { icon: Heart, title: "Healthy Plants", desc: "Carefully maintained plants for healthy growth." },
  { icon: Leaf, title: "Wide Variety", desc: "Explore different types of indoor, outdoor and flowering plants." },
  { icon: Sprout, title: "Expert Guidance", desc: "Get helpful guidance for choosing and caring for plants." },
  { icon: BadgeCheck, title: "Affordable Pricing", desc: "Quality plants at reasonable prices." },
  { icon: Leaf, title: "Fresh & Quality", desc: "Focus on healthy and well-maintained plants." },
  { icon: Headphones, title: "Customer Support", desc: "Friendly assistance for your gardening needs." },
];

export default function Home() {
  useSEO(
    "Sri Jithendra Nursery | Quality Plants & Gardening",
    "Discover beautiful plants, trees and gardening essentials at Sri Jithendra Nursery. Quality plants, expert guidance and affordable prices."
  );
  const featured = plants.slice(0, 8);
  const { ref, visible } = useReveal();

  return (
    <>
      <Hero />

      {/* Why Choose Us */}
      <section className="section section--alt">
        <div className="container">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Why Choose Sri Jithendra Nursery?"
            subtitle="We are committed to providing healthy plants and genuine guidance to help your green spaces flourish."
          />
          <div className="why-grid">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`why-card ${visible ? "reveal" : ""}`}
                  style={{ animationDelay: `${i * 0.03}s` }}
                >
                  <div className="why-card__icon"><Icon size={26} /></div>
                  <h3 className="why-card__title">{item.title}</h3>
                  <p className="why-card__desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Plants */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Our Collection"
            title="Our Featured Plants"
            subtitle="A handpicked selection of our most loved plants, ready to bring life to your space."
          />
          <div className="plants-grid" ref={ref}>
            {featured.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
          <div className="home__view-all">
            <Link to="/plants" className="btn btn--outline-dark btn--large">
              View All Plants <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

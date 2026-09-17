import { Leaf, Target, Eye, Heart, Check } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import useSEO from "../hooks/useSEO";
import useReveal from "../hooks/useReveal";
import "../styles/About.css";

const values = [
  "Quality and health of every plant",
  "Honest and helpful guidance",
  "Affordable and fair pricing",
  "Care for nature and environment",
  "Friendly customer service",
];

export default function About() {
  useSEO(
    "About Us | Sri Jithendra Nursery",
    "Learn about Sri Jithendra Nursery — our story, mission, vision and values. We help people bring greenery and natural beauty into their homes and gardens."
  );

  const { ref, visible } = useReveal();

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__pattern" />
        <div className="page-hero__content">
          <h1>About Sri Jithendra Nursery</h1>
          <p>Bringing greenery and natural beauty into homes, gardens and surroundings.</p>
        </div>
      </section>

      {/* Intro + Image */}
      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className={`about-intro__image ${visible ? "reveal" : "reveal--hidden"}`} ref={ref}>
              <img
                src="https://images.pexels.com/photos/4531685/pexels-photo-4531685.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Sri Jithendra Nursery greenhouse"
                loading="lazy"
              />
            </div>
            <div className="about-intro__text">
              <SectionTitle
                eyebrow="Our Story"
                title="A Passion for Plants and Nature"
                center={false}
              />
              <p className="about-intro__para">
                At Sri Jithendra Nursery, our goal is to make it easier for people
                to bring greenery and natural beauty into their homes, gardens and
                surroundings. We believe that every space — big or small — can be
                transformed with the right plants and a little care.
              </p>
              <p className="about-intro__para">
                From everyday indoor plants to flowering favourites and fruit trees,
                we carefully nurture each plant so it arrives healthy and ready to
                thrive. Our team is always happy to share guidance so your plants
                flourish for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section section--alt">
        <div className="container">
          <div className="about-cards">
            <div className="about-card">
              <div className="about-card__icon"><Target size={28} /></div>
              <h3>Our Mission</h3>
              <p>
                To make quality plants and genuine gardening guidance accessible to
                everyone, helping people create greener, healthier and more beautiful
                living spaces.
              </p>
            </div>
            <div className="about-card">
              <div className="about-card__icon"><Eye size={28} /></div>
              <h3>Our Vision</h3>
              <p>
                To be a trusted nursery that inspires and supports a community of
                plant lovers — bringing nature closer to homes, one plant at a time.
              </p>
            </div>
            <div className="about-card">
              <div className="about-card__icon"><Heart size={28} /></div>
              <h3>Our Values</h3>
              <ul className="about-card__values">
                {values.map((v, i) => (
                  <li key={i}><Check size={16} /> {v}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Choose Us */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Trusted by Customers"
            title="Why Customers Choose Us"
            subtitle="We focus on what matters — healthy plants, honest guidance and a welcoming experience."
          />
          <div className="about-choose">
            <div className="about-choose__item">
              <Leaf size={24} />
              <div>
                <h4>Healthy, Well-Cared-For Plants</h4>
                <p>Every plant is nurtured with attention so it reaches you in its best condition.</p>
              </div>
            </div>
            <div className="about-choose__item">
              <Leaf size={24} />
              <div>
                <h4>Friendly, Expert Guidance</h4>
                <p>From choosing the right plant to caring for it, our team is here to help.</p>
              </div>
            </div>
            <div className="about-choose__item">
              <Leaf size={24} />
              <div>
                <h4>A Wide Selection for Every Space</h4>
                <p>Indoor, outdoor, flowering, fruit and ornamental plants — all in one place.</p>
              </div>
            </div>
            <div className="about-choose__item">
              <Leaf size={24} />
              <div>
                <h4>Fair and Affordable Prices</h4>
                <p>Quality greenery should be accessible — and we keep our pricing honest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

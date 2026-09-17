import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import { services } from "../data/services";
import useSEO from "../hooks/useSEO";

export default function Services() {
  useSEO(
    "Our Services | Sri Jithendra Nursery",
    "Plant sales, gardening guidance, plant care, home gardening, landscaping, bulk orders and garden consultation at Sri Jithendra Nursery."
  );

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__pattern" />
        <div className="page-hero__content">
          <h1>Our Services</h1>
          <p>From plant sales to expert guidance — we are here to help your garden thrive.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="What We Offer"
            title="How We Can Help You"
            subtitle="Whether you are starting out or an experienced gardener, our services are designed to support you at every step."
          />
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

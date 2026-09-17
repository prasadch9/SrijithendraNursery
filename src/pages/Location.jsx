import { MapPin, Phone, Mail, Clock } from "lucide-react";
import MapLocation from "../components/MapLocation";
import CTASection from "../components/CTASection";
import { site } from "../data/site";
import useSEO from "../hooks/useSEO";
import "../styles/Location.css";

export default function Location() {
  useSEO(
    "Visit Sri Jithendra Nursery | Location & Contact",
    "Find Sri Jithendra Nursery — address, phone, email, opening hours and directions. Visit us for quality plants and friendly guidance."
  );

  const infoItems = [
    { icon: MapPin, label: "Address", value: site.address },
    { icon: Phone, label: "Phone", value: site.phone },
    { icon: Mail, label: "Email", value: site.email },
    { icon: Clock, label: "Opening Hours", value: site.hours },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__pattern" />
        <div className="page-hero__content">
          <h1>Visit Sri Jithendra Nursery</h1>
          <p>We would love to welcome you. Find us, call us or message us on WhatsApp.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-layout">
            {/* Contact info */}
            <div className="location-info">
              {infoItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div className="location-info__item" key={i}>
                    <div className="location-info__icon"><Icon size={22} /></div>
                    <div>
                      <h3 className="location-info__label">{item.label}</h3>
                      <p className="location-info__value">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map */}
            <MapLocation />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

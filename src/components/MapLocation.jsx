import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { site, whatsappLink } from "../data/site";
import "../styles/MapLocation.css";

export default function MapLocation() {
  return (
    <div className="map-location">
      <div className="map-location__buttons">
        <a
          href={site.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          <Navigation size={17} /> Get Directions
        </a>
        <a href={`tel:${site.phone}`} className="btn btn--outline-dark">
          <Phone size={17} /> Call Now
        </a>
        <a
          href={whatsappLink("Hello Sri Jithendra Nursery, I would like to visit your nursery.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--whatsapp"
        >
          <MessageCircle size={17} /> WhatsApp Us
        </a>
      </div>

      <div className="map-location__embed">
        {site.mapsEmbedUrl.startsWith("http") ? (
          <iframe
            src={site.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Jithendra Nursery Location"
          />
        ) : (
          <div className="map-location__placeholder">
            <MapPin size={48} />
            <p>Google Maps embed will appear here.</p>
            <p className="map-location__placeholder-hint">
              Add the Google Maps embed URL in <code>src/data/site.js</code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

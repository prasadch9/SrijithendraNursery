import { Link } from "react-router-dom";
import { Leaf, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { site } from "../data/site";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col footer__col--brand">
          <Link to="/" className="footer__logo">
            <Leaf size={24} />
            <span>{site.name}</span>
          </Link>
          <p className="footer__tagline">"{site.tagline}"</p>
          <p className="footer__desc">
            Your trusted nursery for healthy plants, expert guidance and
            beautiful greenery for your home and garden.
          </p>
          <div className="footer__social">
            <a href="https://wa.me/919381608126" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
            <a href="https://www.instagram.com/srijithendranursey_veeravaram/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61594766455124" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            {/* <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube size={18} />
            </a> */}
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/plants">Plants</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Useful Links</h3>
          <ul className="footer__list">
            <li><Link to="/location">Location</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__contact">
            <li><MapPin size={16} /> <span>{site.address}</span></li>
            <li><Phone size={16} /> <span>{site.phone}</span></li>
            <li><Mail size={16} /> <span>{site.email}</span></li>
            <li><Clock size={16} /> <span>{site.hours}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} {site.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

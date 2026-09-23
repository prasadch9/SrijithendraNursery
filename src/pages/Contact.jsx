
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Check,
  Navigation,
} from "lucide-react";

import { site, whatsappLink } from "../data/site";
import useSEO from "../hooks/useSEO";
import "../styles/Contact.css";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const leftVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const rightVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  useSEO(
    "Contact Us | Sri Jithendra Nursery",
    "Get in touch with Sri Jithendra Nursery for plants, gardening needs, bulk orders and nursery enquiries."
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  /* =========================
     NURSERY LOCATIONS
  ========================== */

  const locations = [
    {
      id: 1,
      title: "First Nursery Location",
      address:
        "To, Veeravaram Rd, Kadiam, Veeravaram, Andhra Pradesh 533126",
      phone: "9381608126",
      directions:
        "https://share.google/23KdH5c9bChJiphM9",
    },
    {
      id: 2,
      title: "Second Nursery Location",
      address: "VRFJ+JPP, Madiki, Andhra Pradesh",
      phone: "9701138021",
      directions:
        "https://www.google.com/maps/dir/?api=1&destination=16.8740833,81.8318333",
    },
  ];

  /* =========================
     FORM CHANGE
  ========================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  /* =========================
     FORM SUBMIT
  ========================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `Hello Sri Jithendra Nursery,

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}

Message:
${form.message}`;

    if (site.whatsapp) {
      window.open(
        whatsappLink(msg),
        "_blank",
        "noopener,noreferrer"
      );

      setSent(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 5000);
    } else {
      alert(
        "WhatsApp contact is not configured yet. Please add the actual WhatsApp number in data/site.js."
      );
    }
  };

  return (
    <>
      {/* =========================
          PAGE HERO
      ========================== */}

      <section className="page-hero">
        <div className="page-hero__pattern"></div>

        <motion.div
          className="page-hero__content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.span
            className="page-hero__eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            SRI JITHENDRA NURSERY
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
          >
            Have a question about plants or gardening?
            We would love to hear from you.
          </motion.p>
        </motion.div>
      </section>

      {/* =========================
          CONTACT SECTION
      ========================== */}

      <section className="section contact-section">
        <div className="container">
          <div className="contact-layout">

            {/* =========================
                LEFT SIDE
            ========================== */}

            <motion.div
              className="contact-info"
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <motion.span
                className="section-eyebrow"
                variants={itemVariants}
              >
                GET IN TOUCH
              </motion.span>

              <motion.h2 variants={itemVariants}>
                We'd Love to Hear From You
              </motion.h2>

              <motion.p
                className="contact-info__intro"
                variants={itemVariants}
              >
                Whether you are looking for a specific plant,
                need gardening advice, or want to place a bulk
                order, our team is happy to help.
              </motion.p>

              {/* =========================
                  TWO NURSERY LOCATIONS
              ========================== */}

              <motion.div
                className="contact-locations"
                variants={staggerContainer}
              >
                {locations.map((location) => (
                  <motion.div
                    className="contact-location-card"
                    key={location.id}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                  >
                    <h3>{location.title}</h3>

                    {/* Address */}

                    <div className="contact-info__item">
                      <motion.div
                        className="contact-info__icon"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                        }}
                      >
                        <MapPin
                          size={21}
                          strokeWidth={1.8}
                        />
                      </motion.div>

                      <div className="contact-info__text">
                        <h4>Address</h4>

                        <p>{location.address}</p>
                      </div>
                    </div>

                    {/* Phone */}

                    <div className="contact-info__item">
                      <motion.div
                        className="contact-info__icon"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                        }}
                      >
                        <Phone
                          size={21}
                          strokeWidth={1.8}
                        />
                      </motion.div>

                      <div className="contact-info__text">
                        <h4>Phone</h4>

                        <a
                          href={`tel:${location.phone}`}
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    {/* Directions */}

                    <a
                      href={location.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-location-directions"
                    >
                      <Navigation size={17} />
                      Get Directions
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              {/* =========================
                  COMMON INFORMATION
              ========================== */}

              <motion.div
                className="contact-common-info"
                variants={staggerContainer}
              >
                {/* Opening Hours */}

                <motion.div
                  className="contact-common-item"
                  variants={itemVariants}
                >
                  <Clock size={20} />

                  <div>
                    <h4>Opening Hours</h4>

                    <p>{site.hours}</p>
                  </div>
                </motion.div>

                {/* Email */}

                <motion.div
                  className="contact-common-item"
                  variants={itemVariants}
                >
                  <Mail size={20} />

                  <div>
                    <h4>Email</h4>

                    <a
                      href={`mailto:${site.email}`}
                    >
                      {site.email}
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* =========================
                  WHATSAPP
              ========================== */}

              {site.whatsapp && (
                <motion.a
                  href={whatsappLink(
                    "Hello Sri Jithendra Nursery, I would like to know more about your plants."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp"
                  variants={itemVariants}
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </motion.a>
              )}
            </motion.div>

            {/* =========================
                RIGHT SIDE - FORM
            ========================== */}

            <motion.div
              className="contact-form-wrap"
              variants={rightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <motion.div
                className="contact-form-header"
                variants={itemVariants}
              >
                <span className="section-eyebrow">
                  ENQUIRY
                </span>

                <h2>Send an Enquiry</h2>

                <p>
                  Tell us what you are looking for and
                  we will be happy to assist you.
                </p>
              </motion.div>

              {/* =========================
                  SUCCESS MESSAGE
              ========================== */}

              <AnimatePresence>
                {sent && (
                  <motion.div
                    className="contact-form__success"
                    role="status"
                    initial={{
                      opacity: 0,
                      y: -15,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <Check size={19} />

                    <span>
                      Thank you! Your enquiry has been
                      forwarded to WhatsApp.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =========================
                  FORM
              ========================== */}

              <motion.form
                className="contact-form"
                onSubmit={handleSubmit}
                variants={staggerContainer}
              >
                {/* Name */}

                <motion.div
                  className="contact-form__field"
                  variants={itemVariants}
                >
                  <label htmlFor="name">
                    Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                  />
                </motion.div>

                {/* Phone + Email */}

                <motion.div
                  className="contact-form__row"
                  variants={itemVariants}
                >
                  <div className="contact-form__field">
                    <label htmlFor="phone">
                      Phone <span>*</span>
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="Enter email address"
                    />
                  </div>
                </motion.div>

                {/* Message */}

                <motion.div
                  className="contact-form__field"
                  variants={itemVariants}
                >
                  <label htmlFor="message">
                    Message <span>*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help you..."
                  />
                </motion.div>

                {/* Submit */}

                <motion.button
                  type="submit"
                  className="btn btn--primary btn--large contact-form__submit"
                  variants={itemVariants}
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Send size={18} />
                  Send Enquiry
                </motion.button>
              </motion.form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}


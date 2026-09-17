
import { useState } from "react";
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `Hello Sri Jithendra Nursery,

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}

Message:
${form.message}`;

    if (site.whatsapp) {
      window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");

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

  const infoItems = [
    {
      icon: MapPin,
      label: "Address",
      value: site.address,
    },
    {
      icon: Clock,
      label: "Opening Hours",
      value: site.hours,
    },

    // Show phone only when a real number is available
    ...(site.phone
      ? [
          {
            icon: Phone,
            label: "Phone",
            value: site.phone,
          },
        ]
      : []),

    // Show email only when a real email is available
    ...(site.email
      ? [
          {
            icon: Mail,
            label: "Email",
            value: site.email,
          },
        ]
      : []),
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__pattern"></div>

        <div className="page-hero__content">
          <span className="page-hero__eyebrow">SRI JITHENDRA NURSERY</span>

          <h1>Contact Us</h1>

          <p>
            Have a question about plants or gardening?
            We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">

          <div className="contact-layout">

            {/* =========================
                LEFT SIDE
            ========================== */}
            <div className="contact-info">

              <span className="section-eyebrow">
                GET IN TOUCH
              </span>

              <h2>We'd Love to Hear From You</h2>

              <p className="contact-info__intro">
                Whether you are looking for a specific plant, need
                gardening advice, or want to place a bulk order,
                our team is happy to help.
              </p>

              {/* Information Cards */}
              <div className="contact-info__items">

                {infoItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      className="contact-info__item"
                      key={`${item.label}-${index}`}
                    >
                      <div className="contact-info__icon">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <div className="contact-info__text">
                        <h4>{item.label}</h4>

                        <p>{item.value}</p>
                      </div>
                    </div>
                  );
                })}

              </div>

              {/* WhatsApp */}
              {site.whatsapp && (
                <a
                  href={whatsappLink(
                    "Hello Sri Jithendra Nursery, I would like to know more about your plants."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              )}

              {/* Directions */}
              {site.mapsDirectionsUrl && (
                <a
                  href={site.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  <Navigation size={18} />
                  Get Directions
                </a>
              )}
            </div>

            {/* =========================
                RIGHT SIDE - FORM
            ========================== */}
            <div className="contact-form-wrap">

              <div className="contact-form-header">
                <span className="section-eyebrow">
                  ENQUIRY
                </span>

                <h2>Send an Enquiry</h2>

                <p>
                  Tell us what you are looking for and
                  we will be happy to assist you.
                </p>
              </div>

              {/* Success Message */}
              {sent && (
                <div
                  className="contact-form__success"
                  role="status"
                >
                  <Check size={19} />

                  <span>
                    Thank you! Your enquiry has been
                    forwarded to WhatsApp.
                  </span>
                </div>
              )}

              {/* Form */}
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* Name */}
                <div className="contact-form__field">
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
                </div>

                {/* Phone + Email */}
                <div className="contact-form__row">

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

                </div>

                {/* Message */}
                <div className="contact-form__field">
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
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn--primary btn--large contact-form__submit"
                >
                  <Send size={18} />
                  Send Enquiry
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}


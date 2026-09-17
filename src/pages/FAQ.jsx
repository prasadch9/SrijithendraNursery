import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faq";
import CTASection from "../components/CTASection";
import useSEO from "../hooks/useSEO";
import "../styles/FAQ.css";

export default function FAQ() {
  useSEO(
    "FAQ | Sri Jithendra Nursery",
    "Frequently asked questions about plants, plant care, bulk orders, gardening guidance and visiting Sri Jithendra Nursery."
  );

  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__pattern" />
        <div className="page-hero__content">
          <h1>Frequently Asked Questions</h1>
          <p>Answers to some of the most common questions we receive.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                >
                  <button
                    className="faq-item__question"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`faq-item__chevron ${isOpen ? "faq-item__chevron--open" : ""}`}
                    />
                  </button>
                  <div className={`faq-item__answer ${isOpen ? "faq-item__answer--open" : ""}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

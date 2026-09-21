import { motion } from "framer-motion";

import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import { services } from "../data/services";
import useSEO from "../hooks/useSEO";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Services() {
  useSEO(
    "Our Services | Sri Jithendra Nursery",
    "Plant sales, gardening guidance, plant care, home gardening, landscaping, bulk orders and garden consultation at Sri Jithendra Nursery."
  );

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero__pattern" />

        <motion.div
          className="page-hero__content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            From plant sales to expert guidance — we are here to help your
            garden thrive.
          </motion.p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">

          {/* SECTION TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <SectionTitle
              eyebrow="What We Offer"
              title="How We Can Help You"
              subtitle="Whether you are starting out or an experienced gardener, our services are designed to support you at every step."
            />
          </motion.div>

          {/* SERVICE CARDS */}
          <motion.div
            className="services-grid"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
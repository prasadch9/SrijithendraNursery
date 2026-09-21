import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import MapLocation from "../components/MapLocation";
import CTASection from "../components/CTASection";
import { site } from "../data/site";
import useSEO from "../hooks/useSEO";
import "../styles/Location.css";

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

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
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero__pattern" />

        <motion.div
          className="page-hero__content"
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            Visit Sri Jithendra Nursery
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            We would love to welcome you. Find us, call us or message us on
            WhatsApp.
          </motion.p>
        </motion.div>
      </section>

      {/* LOCATION + CONTACT */}
      <section className="section">
        <div className="container">
          <div className="location-layout">

            {/* CONTACT INFO */}
            <motion.div
              className="location-info"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              {infoItems.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="location-info__item"
                    key={i}
                    variants={itemVariants}
                    whileHover={{
                      x: 5,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                  >
                    <motion.div
                      className="location-info__icon"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                      }}
                    >
                      <Icon size={22} />
                    </motion.div>

                    <div>
                      <h3 className="location-info__label">
                        {item.label}
                      </h3>

                      <p className="location-info__value">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* MAP */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <MapLocation />
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
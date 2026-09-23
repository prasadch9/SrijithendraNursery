import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
} from "lucide-react";

import CTASection from "../components/CTASection";
import { site } from "../data/site";
import useSEO from "../hooks/useSEO";
import "../styles/Location.css";

const branchVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -25,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Location() {
  useSEO(
    "Visit Sri Jithendra Nursery | Locations & Contact",
    "Find Sri Jithendra Nursery locations, phone numbers, opening hours and directions."
  );

  const branches = [
    {
      id: 1,

      name: " Sri Jithendra Nursery",

      subtitle: "First Nursery Location",

      address:
      "To, Veeravaram Rd, Kadiam, Veeravaram, Andhra Pradesh 533126",

      phone: "9381608126",

      email: site.email,

      hours: site.hours,

      // First nursery Google Maps share link
      mapUrl:
        "https://www.google.com/maps?q=Jithendra+Nursery&output=embed",

      directionsUrl:
        "https://share.google/23KdH5c9bChJiphM9",
    },

    {
      id: 2,

      name: "Sri Jithendra Nursery",

      subtitle: "Second Nursery Location",

      address:
        "VRFJ+JPP, Madiki, Andhra Pradesh",

      phone: "9701138021",

      email: site.email,

      hours: site.hours,

      // Second nursery exact coordinates
mapUrl:
  "https://www.google.com/maps?q=16.8740833,81.8318333&output=embed",

directionsUrl:
  "https://www.google.com/maps/dir/?api=1&destination=16.8740833,81.8318333",
},
  ];

  return (
    <>
      {/* =====================================
          PAGE HERO
      ===================================== */}

      <section className="page-hero location-page-hero">

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

          <motion.p
            className="location-hero-label"

            initial={{
              opacity: 0,
              y: 15,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
            }}
          >
            🌿 FIND US
          </motion.p>

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
            Find us at either of our two convenient nursery
            locations and explore our beautiful collection of plants.
          </motion.p>

        </motion.div>

      </section>


      {/* =====================================
          LOCATIONS
      ===================================== */}

      <section className="section locations-section">

        <div className="container">

          <div className="location-section-heading">

            <span>OUR LOCATIONS</span>

            <h2>
              Two Locations.
              <br />
              One Love for Nature.
            </h2>

            <p>
              Visit the Sri Jithendra Nursery location that is
              convenient for you.
            </p>

          </div>


          <div className="branches-grid">

            {branches.map((branch, index) => (

              <motion.article
                className="branch-card"
                key={branch.id}

                variants={branchVariants}

                initial="hidden"

                whileInView="visible"

                viewport={{
                  once: true,
                  amount: 0.15,
                }}

                whileHover={{
                  y: -8,
                }}
              >

                {/* HEADER */}

                <div className="branch-card__header">

                  <div className="branch-number">
                    0{index + 1}
                  </div>

                  <div>

                    <span className="branch-label">
                      {branch.subtitle}
                    </span>

                    <h3>
                      {branch.name}
                    </h3>

                  </div>

                </div>


                {/* MAP */}

                <div className="branch-map">

                  <iframe
                    title={`${branch.name} Map`}
                    src={branch.mapUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                </div>


                {/* DETAILS */}

                <motion.div
                  className="branch-details"

                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}

                  initial="hidden"
                  whileInView="visible"

                  viewport={{
                    once: true,
                  }}
                >

                  {/* ADDRESS */}

                  <motion.div
                    className="branch-detail"
                    variants={itemVariants}
                  >

                    <div className="branch-detail__icon">
                      <MapPin size={20} />
                    </div>

                    <div>

                      <span>
                        Address
                      </span>

                      <p>
                        {branch.address}
                      </p>

                    </div>

                  </motion.div>


                  {/* PHONE */}

                  <motion.div
                    className="branch-detail"
                    variants={itemVariants}
                  >

                    <div className="branch-detail__icon">
                      <Phone size={20} />
                    </div>

                    <div>

                      <span>
                        Phone
                      </span>

                      <a
                        href={`tel:${branch.phone.replace(
                          /\D/g,
                          ""
                        )}`}
                      >
                        {branch.phone}
                      </a>

                    </div>

                  </motion.div>


                  {/* EMAIL */}

                  <motion.div
                    className="branch-detail"
                    variants={itemVariants}
                  >

                    <div className="branch-detail__icon">
                      <Mail size={20} />
                    </div>

                    <div>

                      <span>
                        Email
                      </span>

                      <a
                        href={`mailto:${branch.email}`}
                      >
                        {branch.email}
                      </a>

                    </div>

                  </motion.div>


                  {/* HOURS */}

                  <motion.div
                    className="branch-detail"
                    variants={itemVariants}
                  >

                    <div className="branch-detail__icon">
                      <Clock size={20} />
                    </div>

                    <div>

                      <span>
                        Opening Hours
                      </span>

                      <p>
                        {branch.hours}
                      </p>

                    </div>

                  </motion.div>

                </motion.div>


                {/* ACTION BUTTONS */}

                <div className="branch-actions">

                  <motion.a
                    href={`tel:${branch.phone.replace(
                      /\D/g,
                      ""
                    )}`}

                    className="branch-btn branch-btn--call"

                    whileHover={{
                      scale: 1.03,
                    }}

                    whileTap={{
                      scale: 0.97,
                    }}
                  >

                    <Phone size={18} />

                    Call Now

                  </motion.a>


                  <motion.a
                    href={branch.directionsUrl}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="branch-btn branch-btn--direction"

                    whileHover={{
                      scale: 1.03,
                    }}

                    whileTap={{
                      scale: 0.97,
                    }}
                  >

                    <Navigation size={18} />

                    Get Directions

                  </motion.a>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <CTASection />

    </>
  );
}
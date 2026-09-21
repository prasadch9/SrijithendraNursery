
import { Leaf, Target, Eye, Heart, Check } from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import useSEO from "../hooks/useSEO";
import "../styles/About.css";

const values = [
  "Quality and health of every plant",
  "Honest and helpful guidance",
  "Affordable and fair pricing",
  "Care for nature and environment",
  "Friendly customer service",
];

const cardVariants = {
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function About() {
  useSEO(
    "About Us | Sri Jithendra Nursery",
    "Learn about Sri Jithendra Nursery — our story, mission, vision and values. We help people bring greenery and natural beauty into their homes and gardens."
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
            About Sri Jithendra Nursery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            Bringing greenery and natural beauty into homes, gardens and
            surroundings.
          </motion.p>
        </motion.div>
      </section>

      {/* INTRO + IMAGE */}
      <section className="section">
        <div className="container">
          <div className="about-intro">

            {/* IMAGE */}
            <motion.div
              className="about-intro__image"
              initial={{
                opacity: 0,
                x: -70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                scale: 1.02,
              }}
            >
              <motion.img
                src="https://images.pexels.com/photos/4531685/pexels-photo-4531685.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Sri Jithendra Nursery greenhouse"
                loading="lazy"
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.5,
                }}
              />
            </motion.div>

            {/* STORY CONTENT */}
            <motion.div
              className="about-intro__text"
              initial={{
                opacity: 0,
                x: 70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <SectionTitle
                eyebrow="Our Story"
                title="A Passion for Plants and Nature"
                center={false}
              />

              <motion.p
                className="about-intro__para"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                }}
                viewport={{ once: true }}
              >
                At Sri Jithendra Nursery, our goal is to make it easier for
                people to bring greenery and natural beauty into their homes,
                gardens and surroundings. We believe that every space — big or
                small — can be transformed with the right plants and a little
                care.
              </motion.p>

              <motion.p
                className="about-intro__para"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
                viewport={{ once: true }}
              >
                From everyday indoor plants to flowering favourites and fruit
                trees, we carefully nurture each plant so it arrives healthy
                and ready to thrive. Our team is always happy to share
                guidance so your plants flourish for years to come.
              </motion.p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="section section--alt">
        <div className="container">

          <motion.div
            className="about-cards"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >

            {/* MISSION */}
            <motion.div
              className="about-card"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <motion.div
                className="about-card__icon"
                whileHover={{
                  rotate: 8,
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <Target size={28} />
              </motion.div>

              <h3>Our Mission</h3>

              <p>
                To make quality plants and genuine gardening guidance
                accessible to everyone, helping people create greener,
                healthier and more beautiful living spaces.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              className="about-card"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <motion.div
                className="about-card__icon"
                whileHover={{
                  rotate: -8,
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <Eye size={28} />
              </motion.div>

              <h3>Our Vision</h3>

              <p>
                To be a trusted nursery that inspires and supports a community
                of plant lovers — bringing nature closer to homes, one plant at
                a time.
              </p>
            </motion.div>

            {/* VALUES */}
            <motion.div
              className="about-card"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <motion.div
                className="about-card__icon"
                whileHover={{
                  scale: 1.1,
                  rotate: 8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <Heart size={28} />
              </motion.div>

              <h3>Our Values</h3>

              <motion.ul className="about-card__values">
                {values.map((value, index) => (
                  <motion.li
                    key={value}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    <Check size={16} />
                    {value}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* WHY CUSTOMERS CHOOSE US */}
      <section className="section">
        <div className="container">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <SectionTitle
              eyebrow="Trusted by Customers"
              title="Why Customers Choose Us"
              subtitle="We focus on what matters — healthy plants, honest guidance and a welcoming experience."
            />
          </motion.div>

          <motion.div
            className="about-choose"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >

            {/* ITEM 1 */}
            <motion.div
              className="about-choose__item"
              variants={cardVariants}
              whileHover={{
                y: -5,
                x: 3,
              }}
            >
              <motion.div
                whileHover={{
                  rotate: 12,
                  scale: 1.1,
                }}
              >
                <Leaf size={24} />
              </motion.div>

              <div>
                <h4>Healthy, Well-Cared-For Plants</h4>
                <p>
                  Every plant is nurtured with attention so it reaches you in
                  its best condition.
                </p>
              </div>
            </motion.div>

            {/* ITEM 2 */}
            <motion.div
              className="about-choose__item"
              variants={cardVariants}
              whileHover={{
                y: -5,
                x: 3,
              }}
            >
              <motion.div
                whileHover={{
                  rotate: 12,
                  scale: 1.1,
                }}
              >
                <Leaf size={24} />
              </motion.div>

              <div>
                <h4>Friendly, Expert Guidance</h4>
                <p>
                  From choosing the right plant to caring for it, our team is
                  here to help.
                </p>
              </div>
            </motion.div>

            {/* ITEM 3 */}
            <motion.div
              className="about-choose__item"
              variants={cardVariants}
              whileHover={{
                y: -5,
                x: 3,
              }}
            >
              <motion.div
                whileHover={{
                  rotate: 12,
                  scale: 1.1,
                }}
              >
                <Leaf size={24} />
              </motion.div>

              <div>
                <h4>A Wide Selection for Every Space</h4>
                <p>
                  Indoor, outdoor, flowering, fruit and ornamental plants —
                  all in one place.
                </p>
              </div>
            </motion.div>

            {/* ITEM 4 */}
            <motion.div
              className="about-choose__item"
              variants={cardVariants}
              whileHover={{
                y: -5,
                x: 3,
              }}
            >
              <motion.div
                whileHover={{
                  rotate: 12,
                  scale: 1.1,
                }}
              >
                <Leaf size={24} />
              </motion.div>

              <div>
                <h4>Fair and Affordable Prices</h4>
                <p>
                  Quality greenery should be accessible — and we keep our
                  pricing honest.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}


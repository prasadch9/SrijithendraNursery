import { motion } from "framer-motion";
import { Star } from "lucide-react";

import ReviewCard from "../components/ReviewCard";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import { reviews } from "../data/reviews";
import useSEO from "../hooks/useSEO";
import "../styles/Reviews.css";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
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

export default function Reviews() {
  useSEO(
    "Customer Reviews | Sri Jithendra Nursery",
    "Read what our customers say about Sri Jithendra Nursery — quality plants, helpful guidance and friendly service."
  );

  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

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
            Customer Reviews
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
            What our customers say about their experience with Sri Jithendra
            Nursery.
          </motion.p>
        </motion.div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container">

          {/* RATING SUMMARY */}
          <motion.div
            className="reviews-summary"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <motion.div
              className="reviews-summary__rating"
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
                type: "spring",
                stiffness: 180,
              }}
              viewport={{
                once: true,
              }}
            >
              {avgRating.toFixed(1)}
            </motion.div>

            <motion.div
              className="reviews-summary__stars"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.5,
                      y: 8,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: {
                        duration: 0.35,
                        type: "spring",
                        stiffness: 250,
                      },
                    },
                  }}
                >
                  <Star
                    size={24}
                    className={
                      i < Math.round(avgRating)
                        ? "review-card__star--filled"
                        : "review-card__star--empty"
                    }
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="reviews-summary__count"
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              viewport={{
                once: true,
              }}
            >
              Based on {reviews.length} reviews
            </motion.p>
          </motion.div>

          {/* SECTION TITLE */}
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
              title="What Our Customers Say"
              subtitle="We are grateful for every customer who trusts us with their green spaces."
            />
          </motion.div>

          {/* REVIEW CARDS */}
          <motion.div
            className="reviews-grid"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </motion.div>

          {/* DEMO NOTE */}
          <motion.p
            className="reviews-demo-note"
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >
            These are sample reviews shown for demonstration. Real customer
            reviews will be added as they become available.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
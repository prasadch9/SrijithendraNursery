import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

import PlantCard from "../components/PlantCard";
import { plants, plantCategories } from "../data/plants";
import useSEO from "../hooks/useSEO";
import "../styles/Plants.css";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Plants() {
  useSEO(
    "Plants Collection | Sri Jithendra Nursery",
    "Browse our full collection of indoor, outdoor, flowering, fruit, ornamental and medicinal plants at Sri Jithendra Nursery."
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return plants.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || p.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

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
            Our Plants Collection
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            Explore a wide variety of healthy plants for your home, garden and
            surroundings.
          </motion.p>
        </motion.div>
      </section>

      {/* PLANTS SECTION */}
      <section className="section">
        <div className="container">

          {/* SEARCH + FILTER */}
          <motion.div
            className="plants-controls"
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
            {/* SEARCH */}
            <motion.div
              className="plants-search"
              whileFocus={{
                scale: 1.01,
              }}
            >
              <Search size={18} />

              <input
                type="text"
                placeholder="Search plants by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search plants"
              />
            </motion.div>

            {/* FILTERS */}
            <motion.div
              className="plants-filters"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              viewport={{
                once: true,
              }}
            >
              <motion.button
                className={`plants-chip ${
                  category === "All" ? "plants-chip--active" : ""
                }`}
                onClick={() => setCategory("All")}
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                All
              </motion.button>

              {plantCategories.map((cat) => (
                <motion.button
                  key={cat}
                  className={`plants-chip ${
                    category === cat ? "plants-chip--active" : ""
                  }`}
                  onClick={() => setCategory(cat)}
                  whileHover={{
                    y: -2,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* PLANT CARDS */}
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                key={`${category}-${search}`}
                className="plants-grid"
                variants={gridVariants}
                initial="hidden"
                animate="visible"
              >
                {filtered.map((plant) => (
                  <motion.div
                    key={plant.id}
                    variants={cardVariants}
                    layout
                  >
                    <motion.div
                      whileHover={{
                        y: -6,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                    >
                      <PlantCard plant={plant} />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                className="plants-empty"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <p>
                  No plants found. Try a different search or category.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </>
  );
}
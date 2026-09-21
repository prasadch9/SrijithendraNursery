import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import GalleryCard from "../components/GalleryCard";
import { galleryImages, galleryCategories } from "../data/gallery";
import useSEO from "../hooks/useSEO";
import "../styles/Gallery.css";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
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

export default function Gallery() {
  useSEO(
    "Gallery | Sri Jithendra Nursery",
    "Browse our gallery of plants, flowers, trees, gardens, nursery and landscaping at Sri Jithendra Nursery."
  );

  const [category, setCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    category === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === category);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex(
      (prev) => (prev + 1) % filtered.length
    );
  }, [filtered.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex(
      (prev) => (prev - 1 + filtered.length) % filtered.length
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", onKey);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [
    lightboxIndex,
    closeLightbox,
    nextImage,
    prevImage,
  ]);

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
            Our Gallery
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
            A glimpse into the beauty of our plants, flowers and nursery.
          </motion.p>
        </motion.div>
      </section>

      {/* GALLERY */}
      <section className="section">
        <div className="container">

          {/* CATEGORY FILTER */}
          <motion.div
            className="gallery-filters"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {galleryCategories.map((cat) => (
              <motion.button
                key={cat}
                className={`plants-chip ${
                  category === cat
                    ? "plants-chip--active"
                    : ""
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

          {/* MASONRY GRID */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={category}
              className="gallery-masonry"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
            >
              {filtered.map((img, idx) => (
                <motion.div
                  key={img.id}
                  variants={cardVariants}
                  layout
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                >
                  <GalleryCard
                    image={img}
                    onOpen={() => setLightboxIndex(idx)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox"
            onClick={closeLightbox}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {/* CLOSE */}
            <motion.button
              className="lightbox__close"
              onClick={closeLightbox}
              aria-label="Close"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.1,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <X size={28} />
            </motion.button>

            {/* PREVIOUS */}
            <motion.button
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous"
              whileHover={{
                scale: 1.1,
                x: -3,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <ChevronLeft size={32} />
            </motion.button>

            {/* IMAGE + CAPTION */}
            <motion.div
              className="lightbox__content"
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <motion.img
                key={filtered[lightboxIndex].url}
                src={filtered[lightboxIndex].url}
                alt={filtered[lightboxIndex].title}
                initial={{
                  opacity: 0,
                  scale: 1.04,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.35,
                }}
              />

              <motion.div
                className="lightbox__caption"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                }}
              >
                <span className="lightbox__category">
                  {filtered[lightboxIndex].category}
                </span>

                <span className="lightbox__title">
                  {filtered[lightboxIndex].title}
                </span>
              </motion.div>
            </motion.div>

            {/* NEXT */}
            <motion.button
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next"
              whileHover={{
                scale: 1.1,
                x: 3,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <ChevronRight size={32} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
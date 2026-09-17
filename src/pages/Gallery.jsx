import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import GalleryCard from "../components/GalleryCard";
import { galleryImages, galleryCategories } from "../data/gallery";
import useSEO from "../hooks/useSEO";
import "../styles/Gallery.css";

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

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filtered.length);
  }, [filtered.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
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
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__pattern" />
        <div className="page-hero__content">
          <h1>Our Gallery</h1>
          <p>A glimpse into the beauty of our plants, flowers and nursery.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Category filter */}
          <div className="gallery-filters">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                className={`plants-chip ${category === cat ? "plants-chip--active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="gallery-masonry">
            {filtered.map((img, idx) => (
              <GalleryCard
                key={img.id}
                image={img}
                onOpen={() => setLightboxIndex(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
            <X size={28} />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightboxIndex].url} alt={filtered[lightboxIndex].title} />
            <div className="lightbox__caption">
              <span className="lightbox__category">{filtered[lightboxIndex].category}</span>
              <span className="lightbox__title">{filtered[lightboxIndex].title}</span>
            </div>
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
}

import "../styles/GalleryCard.css";

export default function GalleryCard({ image, onOpen }) {
  return (
    <button className="gallery-card" onClick={() => onOpen(image)}>
      <img src={image.url} alt={image.title} loading="lazy" className="gallery-card__image" />
      <div className="gallery-card__overlay">
        <span className="gallery-card__category">{image.category}</span>
        <span className="gallery-card__title">{image.title}</span>
      </div>
    </button>
  );
}

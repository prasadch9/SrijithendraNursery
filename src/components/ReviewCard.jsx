import { Star } from "lucide-react";
import useReveal from "../hooks/useReveal";
import "../styles/ReviewCard.css";

export default function ReviewCard({ review }) {
  const { ref, visible } = useReveal();

  return (
    <article
      ref={ref}
      className={`review-card ${visible ? "reveal" : "reveal--hidden"}`}
    >
      <div className="review-card__stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < review.rating ? "review-card__star--filled" : "review-card__star--empty"}
          />
        ))}
      </div>
      <p className="review-card__text">"{review.text}"</p>
      <div className="review-card__author">
        {/* <img src={review.avatar} alt={review.name} className="review-card__avatar" loading="lazy" /> */}
        <div>
          <p className="review-card__name">{review.name}</p>
          {review.demo && <span className="review-card__demo">Demo Review</span>}
        </div>
      </div>
    </article>
  );
}

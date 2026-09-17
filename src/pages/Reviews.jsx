import { Star } from "lucide-react";
import ReviewCard from "../components/ReviewCard";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import { reviews } from "../data/reviews";
import useSEO from "../hooks/useSEO";
import "../styles/Reviews.css";

export default function Reviews() {
  useSEO(
    "Customer Reviews | Sri Jithendra Nursery",
    "Read what our customers say about Sri Jithendra Nursery — quality plants, helpful guidance and friendly service."
  );

  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__pattern" />
        <div className="page-hero__content">
          <h1>Customer Reviews</h1>
          <p>What our customers say about their experience with Sri Jithendra Nursery.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Rating summary */}
          <div className="reviews-summary">
            <div className="reviews-summary__rating">{avgRating.toFixed(1)}</div>
            <div className="reviews-summary__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={i < Math.round(avgRating) ? "review-card__star--filled" : "review-card__star--empty"}
                />
              ))}
            </div>
            <p className="reviews-summary__count">Based on {reviews.length} reviews</p>
          </div>

          <SectionTitle
            title="What Our Customers Say"
            subtitle="We are grateful for every customer who trusts us with their green spaces."
          />

          <div className="reviews-grid">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <p className="reviews-demo-note">
            These are sample reviews shown for demonstration. Real customer reviews will be added as they become available.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}

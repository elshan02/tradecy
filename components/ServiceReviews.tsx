export interface ManualReview {
  author: string;
  date: string;
  rating: number;
  text: string;
}

interface ServiceReviewsProps {
  reviews: ManualReview[];
  googleMapsUrl?: string;
}

export default function ServiceReviews({
  reviews,
  googleMapsUrl,
}: ServiceReviewsProps) {
  return (
    <div>
      {googleMapsUrl && (
        <div style={{ marginTop: "8px" }}>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
            style={{ marginTop: 0 }}
          >
            Read all verified reviews on Google →
          </a>
        </div>
      )}

      <div className="grid-3">
        {reviews.map((review) => (
          <article key={`${review.author}-${review.date}`} className="card">
            <div>
              <div
                style={{
                  color: "var(--accent)",
                  fontWeight: 700,
                  letterSpacing: "2px",
                }}
                aria-label={`${review.rating} out of 5 stars`}
              >
                {"★".repeat(review.rating)}
              </div>
              <p className="card-text" style={{ marginTop: "12px" }}>
                &ldquo;{review.text}&rdquo;
              </p>
            </div>

            <div style={{ marginTop: "18px", fontSize: "0.85rem" }}>
              <strong>{review.author}</strong>
              <span style={{ color: "var(--text-muted)", marginLeft: "8px" }}>
                • {review.date}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
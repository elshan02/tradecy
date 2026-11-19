interface PlaceReview {
  name: string;
  rating: number;
  relativePublishTimeDescription: string;
  text?: { text: string };
  authorAttribution: {
    displayName: string;
    uri?: string;
  };
}

interface PlaceDetailsResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlaceReview[];
}

export default async function GoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return (
      <div className="reviews-placeholder">
        Add <strong>GOOGLE_PLACES_API_KEY</strong> and{" "}
        <strong>GOOGLE_PLACE_ID</strong> to your <code>.env.local</code> file to
        load live Google reviews.
      </div>
    );
  }

  let data: PlaceDetailsResponse | null = null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
        },
        next: { revalidate: 86400 }, // Cache for 24 hours (~30 API calls/month)
      }
    );

    if (res.ok) {
      data = await res.json();
    }
  } catch {
    data = null;
  }

  const reviews = data?.reviews ?? [];

  if (!data || reviews.length === 0) {
    return (
      <div className="reviews-placeholder">
        Unable to load Google reviews right now. Double-check your{" "}
        <code>GOOGLE_PLACES_API_KEY</code> (with Places API (New) enabled) and{" "}
        <code>GOOGLE_PLACE_ID</code>.
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          marginTop: "12px",
        }}
      >
        <p className="lead-text" style={{ marginTop: 0 }}>
          <strong style={{ color: "var(--accent)" }}>
            ★ {data.rating ?? 4.9} / 5.0
          </strong>{" "}
          based on <strong>{data.userRatingCount ?? reviews.length}</strong>{" "}
          verified Google reviews
        </p>

        {data.googleMapsUri && (
          <a
            href={data.googleMapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
            style={{ marginTop: 0 }}
          >
            View all reviews on Google →
          </a>
        )}
      </div>

      <div className="grid-3">
        {reviews.map((review) => (
          <article key={review.name} className="card">
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
              {review.text?.text && (
                <p className="card-text" style={{ marginTop: "12px" }}>
                  &ldquo;{review.text.text}&rdquo;
                </p>
              )}
            </div>

            <div style={{ marginTop: "18px", fontSize: "0.85rem" }}>
              <strong>{review.authorAttribution.displayName}</strong>
              <span style={{ color: "var(--text-muted)", marginLeft: "8px" }}>
                • {review.relativePublishTimeDescription}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
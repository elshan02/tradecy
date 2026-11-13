import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Renovations in London, Ontario",
  description:
    "Upgrade your home with custom kitchen renovations in London, ON. Tradecy Inc. handles layout design, cabinetry, countertops, lighting, and flooring.",
  alternates: {
    canonical: "/services/kitchen",
  },
};

export default function KitchenPage() {
  return (
    <section className="section">
      <div className="container">
        {/* 1. SEO Header & Intro */}
        <header>
          <span className="eyebrow">Kitchen Remodeling — London, ON</span>
          <h1 className="page-title">
            Custom Kitchen Renovations in London, Ontario
          </h1>
          <p className="lead-text">
            Tradecy Inc. designs and builds custom kitchens across London,
            Ontario—from open-concept wall removals and custom cabinetry to
            quartz countertops, tile backsplashes, islands, and lighting.
          </p>
        </header>

        {/* 2. Kitchen Photo Gallery Skeleton */}
        <div style={{ marginTop: "48px" }}>
          <h2 className="section-title">Kitchen Project Gallery</h2>
          <div className="grid-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-box">
                [Kitchen Photo {item} + Alt Text]
              </div>
            ))}
          </div>
        </div>

        {/* 3. Imported Kitchen Reviews Placeholder */}
        <div style={{ marginTop: "56px" }}>
          <h2 className="section-title">Kitchen Renovation Reviews</h2>
          <div className="reviews-placeholder">
            [Imported Kitchen-Filtered Google Reviews Render Here]
          </div>
        </div>

        {/* 4. CTA Banner */}
        <div className="cta-banner">
          <div>
            <h2 className="card-title" style={{ color: "#ffffff" }}>
              Planning a Kitchen Remodel in London, ON?
            </h2>
            <p className="card-text" style={{ color: "#cbd5e1" }}>
              Contact Tradecy Inc. at 226-224-5070 for a free consultation.
            </p>
          </div>
          <Link href="/#free-estimate" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
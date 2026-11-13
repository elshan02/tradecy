import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bathroom Renovations in London, Ontario",
  description:
    "Custom bathroom renovations in London, ON by Tradecy Inc. Walk-in showers, vanities, tile work, waterproofing, and complete bathroom remodeling.",
  alternates: {
    canonical: "/bathroom",
  },
};

export default function BathroomPage() {
  return (
    <section className="section">
      <div className="container">
        {/* 1. SEO Header & Intro */}
        <header>
          <span className="eyebrow">Bathroom Remodeling — London, ON</span>
          <h1 className="page-title">
            Bathroom Renovations &amp; Remodeling in London, Ontario
          </h1>
          <p className="lead-text">
            Upgrade your en-suite, main bathroom, or powder room with Tradecy
            Inc. We specialize in custom walk-in glass showers, waterproof
            tiling, freestanding tubs, double vanities, and heated floors in
            London, ON.
          </p>
        </header>

        {/* 2. Bathroom Photo Gallery Skeleton */}
        <div style={{ marginTop: "48px" }}>
          <h2 className="section-title">Bathroom Project Gallery</h2>
          <div className="grid-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-box">
                [Bathroom Photo {item} + Alt Text]
              </div>
            ))}
          </div>
        </div>

        {/* 3. Imported Bathroom Reviews Placeholder */}
        <div style={{ marginTop: "56px" }}>
          <h2 className="section-title">
            What London, Ontario Homeowners Say About Our Bathroom Renovations
          </h2>
          <div className="reviews-placeholder">
            [Imported Bathroom-Filtered Google Reviews Render Here]
          </div>
        </div>

        {/* 4. CTA Banner */}
        <div className="cta-banner">
          <div>
            <h2 className="card-title" style={{ color: "#ffffff" }}>
              Planning a Bathroom Renovation in London, ON?
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
import type { Metadata } from "next";
import Link from "next/link";

import ServiceReviews, { type ManualReview } from "@/components/ServiceReviews";

export const metadata: Metadata = {
  title: "Painting Services in London, Ontario",
  description:
    "Upgrade your home with custom painting services in London, ON. Tradecy Inc. handles interior and exterior painting, staining, and finishing.",
  alternates: {
    canonical: "/services/painting",
  },
};

const paintingReviews: ManualReview[] = [
  {
    author: "Michael Carter",
    date: "Google Review",
    rating: 5,
    text: "Tradecy did an excellent job painting my garage door. Very professional and reliable team. I’ll definitely call them again for future projects."
  },
  // {
  //   author: "[Client Name 2]",
  //   date: "Google Review",
  //   rating: 5,
  //   text: "[Paste a second kitchen renovation review from Google Maps here]",
  // },
  // {
  //   author: "[Client Name 3]",
  //   date: "Google Review",
  //   rating: 5,
  //   text: "[Paste a third kitchen renovation review from Google Maps here]",
  // }
  
];

const PaintingSchemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Painting Services in London, Ontario",
  serviceType: "Painting",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Tradecy Inc.",
    telephone: "+1-226-224-5070",
    url: "https://tradecy.ca",
  },
  areaServed: {
    "@type": "City",
    name: "London, Ontario",
  },
  description:
    "Custom painting services in London, Ontario including interior and exterior painting, staining, and finishing.",
};

export default function PaintingPage() {
  return (
    <section className="section">
        <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(PaintingSchemaJsonLd),
      }}
      />
      <div className="container">
        {/* 1. SEO Header & Intro */}
        <header>
          <span className="eyebrow">Painting Services — London, ON</span>
          <h1 className="page-title">
            Custom Painting Services in London, Ontario
          </h1>
          <p className="lead-text">
            Tradecy Inc. designs and builds custom painting services across London,
            Ontario—from interior and exterior painting to staining and finishing.
          </p>
        </header>

        {/* 2. Painting Photo Gallery Skeleton */}
        <div style={{ marginTop: "48px" }}>
          <h2 className="section-title">Painting Project Gallery</h2>
          <div className="grid-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-box">
                [Painting Photo {item} + Alt Text]
              </div>
            ))}
          </div>
        </div>

        {/* 3. Imported Painting Reviews Placeholder */}
        <div style={{ marginTop: "56px" }}>
          <h2 className="section-title">
            What London, Ontario Homeowners Say About Our Painting Services
          </h2>
          <ServiceReviews
            reviews={paintingReviews}
            googleMapsUrl="https://www.google.com/maps/search/?api=1&query=Tradecy+Inc+London+Ontario"
          />
        </div>

        {/* 4. CTA Banner */}
        <div className="cta-banner">
          <div>
            <h2 className="card-title" style={{ color: "#ffffff" }}>
              Planning a Painting Project in London, ON?
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
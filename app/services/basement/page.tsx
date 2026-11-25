import type { Metadata } from "next";
import Link from "next/link";

import ServiceReviews, { type ManualReview } from "@/components/ServiceReviews";

export const metadata: Metadata = {
  title: "Basement Renovations in London, Ontario",
  description:
    "Transform your basement with custom renovations in London, ON. Tradecy Inc. specializes in finishing, lighting, and creating functional living spaces.",
  alternates: {
    canonical: "/services/basement",
  },
};

const basementReviews: ManualReview[] = [
  {
    author: "Sarah O'Connor",
    date: "November, 2025",
    rating: 5,
    text: "Tradecy Handyman Services did a great job with my basement renovation. Very professional and reliable—thank you!"
  },
  // {
  //   author: "[Client Name 2]",
  //   date: "Google Review",
  //   rating: 5,
  //   text: "[Paste a second basement renovation review from Google Maps here]",
  // },
  // {
  //   author: "[Client Name 3]",
  //   date: "Google Review",
  //   rating: 5,
  //   text: "[Paste a third basement renovation review from Google Maps here]",
  // }
  
];

const BasementSchemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Basement Renovations in London, Ontario",
  serviceType: "Basement Remodeling",
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
    "Custom basement renovations in London, Ontario including layout redesign, custom cabinetry, quartz countertops, islands, tile backsplashes, plumbing, and lighting.",
};

export default function BasementPage() {
  return (
    <section className="section">
        <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(BasementSchemaJsonLd),
      }}
      />
      <div className="container">
        {/* 1. SEO Header & Intro */}
        <header>
          <span className="eyebrow">Basement Remodeling — London, ON</span>
          <h1 className="page-title">
            Custom Basement Renovations in London, Ontario
          </h1>
          <p className="lead-text">
            Tradecy Inc. designs and builds custom basements across London,
            Ontario—from open-concept wall removals and custom cabinetry to
            quartz countertops, tile backsplashes, islands, and lighting.
          </p>
        </header>

        {/* 2. Basement Photo Gallery Skeleton */}
        <div style={{ marginTop: "48px" }}>
          <h2 className="section-title">Basement Project Gallery</h2>
          <div className="grid-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-box">
                [Basement Photo {item} + Alt Text]
              </div>
            ))}
          </div>
        </div>

        {/* 3. Imported Basement Reviews Placeholder
        <div style={{ marginTop: "56px" }}>
          <h2 className="section-title">
            What London, Ontario Homeowners Say About Our Basement Renovations
          </h2>
          <ServiceReviews
            reviews={basementReviews}
            googleMapsUrl="https://www.google.com/maps/search/?api=1&query=Tradecy+Inc+London+Ontario"
          />
        </div> */}

        {/* 4. CTA Banner */}
        <div className="cta-banner">
          <div>
            <h2 className="card-title" style={{ color: "#ffffff" }}>
              Planning a Basement Remodel in London, ON?
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
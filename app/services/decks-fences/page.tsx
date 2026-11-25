import type { Metadata } from "next";
import Link from "next/link";

import ServiceReviews, { type ManualReview } from "@/components/ServiceReviews";

export const metadata: Metadata = {
  title: "Decks and Fences in London, Ontario",
  description:
    "Upgrade your home with custom decks and fences in London, ON. Tradecy Inc. handles layout design, cabinetry, countertops, lighting, and flooring.",
  alternates: {
    canonical: "/services/decks-fences",
  },
};

const decksFencesReviews: ManualReview[] = [
  // {
  //   author: "Sarah O'Connor",
  //   date: "Google Review",
  //   rating: 5,
  //   text: "Tradecy Handyman Services did a great job with my deck and fence installation. Very professional and reliable—thank you!"
  // },
  // {
  //   author: "[Client Name 2]",
  //   date: "Google Review",
  //   rating: 5,
  //   text: "[Paste a second deck and fence review from Google Maps here]",
  // },
  // {
  //   author: "[Client Name 3]",
  //   date: "Google Review",
  //   rating: 5,
  //   text: "[Paste a third deck and fence review from Google Maps here]",
  // }
  
];

const DeckFenceSchemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Decks and Fences in London, Ontario",
  serviceType: "Decks and Fences",
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
    "Custom decks and fences in London, Ontario including layout redesign, custom cabinetry, quartz countertops, islands, tile backsplashes, plumbing, and lighting.",
};

export default function DeckFencesPage() {
  return (
    <section className="section">
        <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(DeckFenceSchemaJsonLd),
      }}
      />
      <div className="container">
        {/* 1. SEO Header & Intro */}
        <header>
          <span className="eyebrow">Decks & Fences — London, ON</span>
          <h1 className="page-title">
            Custom Decks and Fences in London, Ontario
          </h1>
          <p className="lead-text">
            Tradecy Inc. designs and builds custom decks and fences across London,
            Ontario—from open-concept wall removals and custom cabinetry to
            quartz countertops, tile backsplashes, islands, and lighting.
          </p>
        </header>

        {/* 2. Decks & Fences Photo Gallery Skeleton */}
        <div style={{ marginTop: "48px" }}>
          <h2 className="section-title">Decks & Fences Project Gallery</h2>
          <div className="grid-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-box">
                [Decks & Fences Photo {item} + Alt Text]
              </div>
            ))}
          </div>
        </div>

        {/* 3. Imported Deck & Fences Reviews Placeholder */}
        {/* <div style={{ marginTop: "56px" }}>
          <h2 className="section-title">
            What London, Ontario Homeowners Say About Our Decks and Fences
          </h2>
          <ServiceReviews
            reviews={deckReviews}
            googleMapsUrl="https://www.google.com/maps/search/?api=1&query=Tradecy+Inc+London+Ontario"
          />
        </div> */}

        {/* 4. CTA Banner */}
        <div className="cta-banner">
          <div>
            <h2 className="card-title" style={{ color: "#ffffff" }}>
              Planning a Decks or Fences Installation in London, ON?
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
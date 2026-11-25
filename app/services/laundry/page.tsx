import type { Metadata } from "next";
import Link from "next/link";

import ServiceReviews, { type ManualReview } from "@/components/ServiceReviews";

export const metadata: Metadata = {
  title: "Laundry Room Renovations in London, Ontario",
  description:
    "Upgrade your home with custom laundry room renovations in London, ON. Tradecy Inc. handles layout design, cabinetry, countertops, lighting, and flooring.",
  alternates: {
    canonical: "/services/laundry",
  },
};

const laundryReviews: ManualReview[] = [
  // {
  //   author: "Sarah O'Connor",
  //   date: "November, 2025",
  //   rating: 5,
  //   text: "Tradecy Handyman Services did a great job with my laundry room renovation. Very professional and reliable—thank you!"
  // },
  // {
  //   author: "[Client Name 2]",
  //   date: "Google Review",
  //   rating: 5,
  //   text: "[Paste a second laundry room renovation review from Google Maps here]",
  // },
  // {
  //   author: "[Client Name 3]",
  //   date: "Google Review",
  //   rating: 5,
  //   text: "[Paste a third laundry room renovation review from Google Maps here]",
  // }
  
];

const LaundrySchemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Laundry Room Renovations in London, Ontario",
  serviceType: "Laundry Room Remodeling",
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
    "Custom laundry room renovations in London, Ontario including layout redesign, custom cabinetry, quartz countertops, islands, tile backsplashes, plumbing, and lighting.",
};

export default function LaundryPage() {
  return (
    <section className="section">
      <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(LaundrySchemaJsonLd),
      }}
      />
      <div className="container">
        {/* 1. SEO Header & Intro */}
        <header>
          <span className="eyebrow">Laundry Room Remodeling — London, ON</span>
          <h1 className="page-title">
            Custom Laundry Room Renovations in London, Ontario
          </h1>
          <p className="lead-text">
            Tradecy Inc. designs and builds custom laundry rooms across London,
            Ontario—from open-concept wall removals and custom cabinetry to
            quartz countertops, tile backsplashes, islands, and lighting.
          </p>
        </header>

        {/* 2. Laundry Photo Gallery Skeleton */}
        <div style={{ marginTop: "48px" }}>
          <h2 className="section-title">Laundry Project Gallery</h2>
          <div className="grid-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-box">
                [Laundry Photo {item} + Alt Text]
              </div>
            ))}
          </div>
        </div>

        {/* 3. Imported Laundry Reviews Placeholder */}
        {/* <div style={{ marginTop: "56px" }}>
          <h2 className="section-title">
            What London, Ontario Homeowners Say About Our Laundry Renovations
          </h2>
          <ServiceReviews
            reviews={laundryReviews}
            googleMapsUrl="https://www.google.com/maps/search/?api=1&query=Tradecy+Inc+London+Ontario"
          />
        </div> */}

        {/* 4. CTA Banner */}
        <div className="cta-banner">
          <div>
            <h2 className="card-title" style={{ color: "#ffffff" }}>
              Planning a Laundry Room Remodel in London, ON?
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
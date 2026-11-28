import type { Metadata } from "next";
import Link from "next/link";

import ServiceReviews, { type ManualReview } from "@/components/ServiceReviews";

export const metadata: Metadata = {
  title: "Handyman services in London, Ontario",
  description:
    "Upgrade your home with custom handyman renovations in London, ON. Tradecy Inc. handles layout design, cabinetry, countertops, lighting, and flooring.",
  alternates: {
    canonical: "/services/handyman",
  },
};

const handymanReviews: ManualReview[] = [
  {
    author: "Fadi Obeid",
    date: "Google Review",
    rating: 5,
    text: "We hired Asir to install curtain rods and blinds in our living room, and he did an excellent job. He was punctual, professional, and very detail-oriented. He also helped with some minor touch-ups in our powder room and assisted with hanging artwork, making sure everything was properly aligned and secure. His work was efficient, clean, and done with care. We really appreciated his helpful attitude and willingness to go the extra mile. Highly recommend Asir for any home installation or handyman work."
  },
  {
    author: "Falonne Ntelo",
    date: "Google Review",
    rating: 5,
    text: "I’m name is FALONNE and Asir did a great job at my house with my TV and I loved the result his put on two tv’s up for me just in a couple minutes and his was really nice",
  },
  {
    author: "Cory G",
    date: "Google Review",
    rating: 5,
    text: "Fantastic work mounting our TV! A fast professional job and i would recommend Asir if you need yours mounted as well!",
  },
  {
    author: "Nahid Modaressi",
    date: "Google Review",
    rating: 5,
    text: "Their work is excellent and professional, and I am completely satisfied with entrusting them with the TV installation.",
  }
  
];

const HandymanSchemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Handyman Services in London, Ontario",
  serviceType: "Handyman Services",
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
    "Custom handyman projects in London, Ontario including layout redesign, custom cabinetry, quartz countertops, islands, tile backsplashes, plumbing, and lighting.",
};

export default function HandymanPage() {
  return (
    <section className="section">
      {/* Renders the JSON-LD structured data in the HTML for Googlebot */}
      <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(HandymanSchemaJsonLd),
      }}
      />
      <div className="container">
        {/* 1. SEO Header & Intro */}
        <header>
          <span className="eyebrow">Handyman — London, ON</span>
          <h1 className="page-title">
            Custom Handyman Projects in London, Ontario
          </h1>
          <p className="lead-text">
            Tradecy Inc. designs and builds custom handyman projects across London,
            Ontario—from open-concept wall removals and custom cabinetry to
            quartz countertops, tile backsplashes, islands, and lighting.
          </p>
        </header>

        {/* 2. Handyman Photo Gallery Skeleton */}
        <div style={{ marginTop: "48px" }}>
          <h2 className="section-title">Handyman Project Gallery</h2>
          <div className="grid-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-box">
                [Handyman Photo {item} + Alt Text]
              </div>
            ))}
          </div>
        </div>

        {/* 3. Imported Handyman Reviews Placeholder */}
        <div style={{ marginTop: "56px" }}>
          <h2 className="section-title">
            What London, Ontario Homeowners Say About Our Handyman Projects
          </h2>
          <ServiceReviews
            reviews={handymanReviews}
            googleMapsUrl="https://www.google.com/maps/search/?api=1&query=Tradecy+Inc+London+Ontario"
          />
        </div>

        {/* 4. CTA Banner */}
        <div className="cta-banner">
          <div>
            <h2 className="card-title" style={{ color: "#ffffff" }}>
              Planning a Handyman Project in London, ON?
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
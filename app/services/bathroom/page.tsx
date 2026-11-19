import type { Metadata } from "next";
import Link from "next/link";

import ServiceReviews, { type ManualReview } from "@/components/ServiceReviews";

export const metadata: Metadata = {
  title: "Bathroom Renovations in London, Ontario",
  description:
    "Custom bathroom renovations in London, ON by Tradecy Inc. Walk-in showers, vanities, tile work, waterproofing, and complete bathroom remodeling.",
  alternates: {
    canonical: "/bathroom",
  },
};

const bathroomReviews: ManualReview[] = [
  {
    author: "T L",
    date: "Google Review",
    rating: 5,
    text: "We used this company, Tradecy, for some home renovations, and couldn’t be more pleased with the outcome. We had a leak in our upstairs tub that ruined our kitchen ceiling below. He fixed the ceiling and painted it and changed out a light fixture, and he did a beautiful job! After he fixed the leak in the tub, he renovated our outdated bathroom. He did a wonderful job! Very professional, trustworthy, and kept the house clean throughout the process. He covered all the floors where he was working and cleaned up after himself. I highly recommend this company for renovations. We will definitely use them on any future renovations that we do!!!"
  },
  {
    author: "Ram Mehta",
    date: "Google Review",
    rating: 5,
    text: "Asir is great! He fixed a big hole in my bathroom ceiling, replaced my faucet and lights, painted, and even repaired a tough sink leak. He’s professional, friendly, and clearly takes pride in his work. I’d definitely call him again and recommend him to others.",
  },
  {
    author: "Krishanthy Shu",
    date: "Google Review",
    rating: 5,
    text: "Reliable, Hardworking and Professional individuals with affordable service. Renovated our bathrooms…excellent",
  }
];

const BathroomSchemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bathroom Renovations in London, Ontario",
  serviceType: "Bathroom Remodeling",
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
    "Custom bathroom renovations in London, Ontario including walk-in showers, vanities, tile work, waterproofing, and complete bathroom remodeling.",
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
          <ServiceReviews
            reviews={bathroomReviews}
            googleMapsUrl="https://www.google.com/maps/search/?api=1&query=Tradecy+Inc+London+Ontario"
          />
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
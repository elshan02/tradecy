import { Suspense } from "react";
import Link from "next/link";
import GoogleReviews from "@/components/GoogleReviews";

const SERVICES = [
  {
    title: "Bathroom Renovations",
    href: "/services/bathroom",
    description:
      "Walk-in glass showers, waterproof tile work, freestanding tubs, and modern vanities in London, ON.",
  },
  {
    title: "Kitchen Renovations",
    href: "/services/kitchen",
    description:
      "Open-concept kitchen remodeling, custom cabinetry, quartz countertops, islands, and backsplashes.",
  },
  {
    title: "Basement Renovations",
    href: "/services/basement",
    description:
      "Finished family rec rooms, extra bedrooms, 3-piece bathrooms, wet bars, and legal secondary suites.",
  },
  {
    title: "Handyman Services",
    href: "/services/handyman",
    description:
      "Custom handyman projects in London, Ontario including layout redesign, custom cabinetry, quartz countertops, islands, tile backsplashes, plumbing, and lighting.",
  },
  {
    title: "Laundry Renovations",
    href: "/services/laundry",
    description:
      "Custom laundry room renovations in London, Ontario including cabinetry, countertops, sinks, and lighting.",
  },
  // {
  //   title: "Commercial Renovations",
  //   href: "/services/commercial",
  //   description:
  //     "Office build-outs, retail store remodeling, commercial framing, washrooms, and interior fit-outs.",
  // },
  {
    title: "Interior & Exterior Painting",
    href: "/services/painting",
    description:
      "Drywall prep, wall and ceiling painting, trim and door spraying, cabinet refinishing, and staining.",
  },
  {
    title: "Decks & Fences",
    href: "/services/decks-fences",
    description:
      "Custom wood and composite decks, pergolas, porch rebuilds, and privacy fences in London, ON.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section id="free-estimate" className="hero">
        <div className="container hero-grid">
          {/* Left Column: SEO Headline & Trust */}
          <div className="hero-content">
            <span className="eyebrow">
              ★ 4.9 Rated Contractor • London, Ontario
            </span>
            <h1 className="page-title">
              Home Renovations &amp; General Contracting in London, Ontario
            </h1>
            <p className="lead-text">
              Tradecy Inc. designs, builds, and renovates custom kitchens,
              bathrooms, finished basements, full homes, decks, and commercial
              spaces across London, ON.
            </p>
          </div>

          {/* Right Column: Free Quote Card */}
          <div className="hero-form-card">
            <h2 className="hero-form-title">Get a Free Renovation Quote</h2>
            <p className="hero-form-subtitle">
              Serving London, Byron, Masonville, Oakridge &amp; St. Thomas.
            </p>

            <form className="quote-form" style={{ marginTop: "18px" }}>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                className="form-input"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address "
                className="form-input"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code (e.g. N6G 0L7) *"
                required
                className="form-input"
              />
              {/* <select name="service" className="form-input full-span" required>
                <option value="">Select Service Needed *</option>
                <option value="Kitchen Renovation">Kitchen Renovation</option>
                <option value="Bathroom Renovation">Bathroom Renovation</option>
                <option value="Basement Renovation">Basement Renovation</option>
                <option value="Full Home Renovation">Full Home Renovation</option>
                <option value="Commercial Renovation">Commercial Renovation</option>
                <option value="Interior & Exterior Painting">
                  Interior &amp; Exterior Painting
                </option>
                <option value="Decks & Fences">Decks &amp; Fences</option>
              </select> */}
              <textarea
                name="message"
                rows={3}
                placeholder="Briefly describe your project..."
                className="form-textarea full-span"
              />
              <button type="submit" className="btn-primary full-span">
                Request Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 2. Services Overview Grid */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Renovation Services in London, ON</h2>
          <div className="grid-3">
            {SERVICES.map((service) => (
              <div key={service.title} className="card">
                <div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                </div>
                <Link href={service.href} className="card-link">
                  View More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Mission Section */}
      <section className="section-alt">
        <div className="container-narrow">
          <h2 className="section-title">Our Mission</h2>
          <p className="lead-text">
            Tradecy Inc. is a full-service design, build, and renovation
            contractor serving London, Ontario and surrounding communities
            including Byron, Masonville, Oakridge, Wortley Village, Hyde Park,
            and St. Thomas. From initial 3D design and building permits to
            framing and finishing, we manage every stage of your remodel.
          </p>
        </div>
      </section>

      {/* 4. Imported Google Reviews (Live via Google Places API) */}
      <section id="google-reviews" className="section">
        <div className="container">
          <h2 className="section-title">Read Our Rave Reviews</h2>
          <Suspense
            fallback={
              <div className="reviews-placeholder">
                Loading Google reviews...
              </div>
            }
          >
            <GoogleReviews />
          </Suspense>
        </div>
      </section>

      {/* 5. Contact / Quote Form */}
      <section id="contact" className="section-dark">
        <div className="container-narrow">
          <h2 className="section-title">Request a Free Renovation Quote</h2>
          <form className="quote-form">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              required
              className="form-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              className="form-input"
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code (e.g. N6G 0L7) *"
              required
              className="form-input"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your renovation project..."
              className="form-textarea full-span"
            />
            <button type="submit" className="btn-primary full-span">
              Send Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
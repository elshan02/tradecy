import Link from "next/link";

const SERVICES = [
  {
    title: "Bathroom Renovations",
    href: "/bathroom",
    description:
      "Walk-in glass showers, waterproof tile work, freestanding tubs, and modern vanities in London, ON.",
  },
  {
    title: "Kitchen Renovations",
    href: "/kitchen",
    description:
      "Open-concept kitchen remodeling, custom cabinetry, quartz countertops, islands, and backsplashes.",
  },
  {
    title: "Basement Renovations",
    href: "/basement",
    description:
      "Finished family rec rooms, extra bedrooms, 3-piece bathrooms, wet bars, and legal secondary suites.",
  },
  {
    title: "Full Home Renovations",
    href: "/residential",
    description:
      "Whole-home remodeling, structural wall removals, flooring, drywall, trim carpentry, and additions.",
  },
  {
    title: "Commercial Renovations",
    href: "/commercial",
    description:
      "Office build-outs, retail store remodeling, commercial framing, washrooms, and interior fit-outs.",
  },
  {
    title: "Interior & Exterior Painting",
    href: "/services#painting",
    description:
      "Drywall prep, wall and ceiling painting, trim and door spraying, cabinet refinishing, and staining.",
  },
  {
    title: "Decks & Fences",
    href: "/services#decks-fences",
    description:
      "Custom wood and composite decks, pergolas, porch rebuilds, and privacy fences in London, ON.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Design • Build • Renovate — London, Ontario</span>
          <h1 className="page-title">
            Home Renovations &amp; General Contracting in London, Ontario
          </h1>
          <p className="lead-text">
            Tradecy Inc. delivers residential and commercial renovations across
            London, ON—backed by architectural and engineering expertise.
          </p>
          <div className="button-group">
            <a href="#free-estimate" className="btn-primary">
              Get a Free Estimate
            </a>
            <Link href="/projects" className="btn-secondary">
              View Projects
            </Link>
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

      {/* 4. Imported Google Reviews Placeholder */}
      <section id="google-reviews" className="section">
        <div className="container">
          <h2 className="section-title">Read Our Rave Reviews</h2>
          <div className="reviews-placeholder">
            [Imported Google Reviews Widget / API Feed Renders Here]
          </div>
        </div>
      </section>

      {/* 5. Contact / Quote Form */}
      <section id="free-estimate" className="section-dark">
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
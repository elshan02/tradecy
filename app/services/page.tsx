import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Renovation Services in London, ON",
  description:
    "Explore residential and commercial renovation services in London, Ontario: bathroom, kitchen, basement, full home, commercial, painting, and decks & fences.",
  alternates: {
    canonical: "/services",
  },
};

const ALL_SERVICES = [
  {
    id: "bathroom",
    title: "Bathroom Renovations",
    href: "/bathroom",
    summary:
      "Walk-in showers, waterproof tile systems, freestanding tubs, vanities, and heated floors.",
  },
  {
    id: "kitchen",
    title: "Kitchen Renovations",
    href: "/kitchen",
    summary:
      "Open-concept wall removals, custom cabinetry, quartz countertops, islands, and tile backsplashes.",
  },
  {
    id: "basement",
    title: "Basement Renovations",
    href: "/basement",
    summary:
      "Basement finishing, family rec rooms, extra bedrooms, 3-piece bathrooms, and legal suites.",
  },
  {
    id: "full-home",
    title: "Full Home Renovations",
    href: "/residential",
    summary:
      "Complete interior remodeling, structural framing, hardwood/LVP flooring, drywall, and trim carpentry.",
  },
  {
    id: "commercial",
    title: "Commercial Renovations",
    href: "/commercial",
    summary:
      "Retail fit-outs, office build-outs, steel-stud framing, acoustic ceilings, and washrooms.",
  },
  {
    id: "painting",
    title: "Interior & Exterior Painting",
    href: "#painting",
    summary:
      "Wall, ceiling, trim, and door painting, drywall patching, cabinet spraying, and exterior staining.",
  },
  {
    id: "decks-fences",
    title: "Decks & Fences",
    href: "#decks-fences",
    summary:
      "Custom pressure-treated, cedar, and composite decks, pergolas, and privacy fences in London, ON.",
  },
];

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">What We Do</span>
        <h1 className="page-title">
          Home &amp; Commercial Renovation Services in London, Ontario
        </h1>
        <p className="lead-text">
          Tradecy Inc. provides complete design, build, and remodeling services
          for homeowners and businesses across London, ON.
        </p>

        <div className="grid-2">
          {ALL_SERVICES.map((service) => (
            <div key={service.id} id={service.id} className="card">
              <div>
                <h2 className="card-title">{service.title}</h2>
                <p className="card-text">{service.summary}</p>
              </div>
              <Link href={service.href} className="card-link">
                View More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
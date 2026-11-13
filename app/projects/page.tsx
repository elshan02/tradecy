import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Renovation Portfolio in London, ON",
  description:
    "View recent kitchen, bathroom, basement, residential, and commercial renovation projects completed across London, Ontario by Tradecy Inc.",
  alternates: {
    canonical: "/projects",
  },
};

const CATEGORIES = [
  { title: "Kitchen Projects", href: "/kitchen" },
  { title: "Bathroom Projects", href: "/bathroom" },
  { title: "Basement Projects", href: "/basement" },
  { title: "Residential / Full Home Projects", href: "/residential" },
  { title: "Commercial Projects", href: "/commercial" },
];

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Portfolio</span>
        <h1 className="page-title">
          Our Renovation Projects in London, Ontario
        </h1>
        <p className="lead-text">
          Browse our completed design-build and renovation galleries by category.
        </p>

        <div className="grid-3">
          {CATEGORIES.map((category) => (
            <Link key={category.title} href={category.href} className="card">
              <div className="gallery-box">[Project Cover Image]</div>
              <h2 className="card-title" style={{ marginTop: "16px" }}>
                {category.title}
              </h2>
              <span className="card-link">View Gallery →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
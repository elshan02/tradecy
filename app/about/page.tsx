import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tradecy Inc. | London, ON Renovation Contractors",
  description:
    "Learn how Tradecy Inc. brings architectural and engineering expertise to residential and commercial renovations across London, Ontario.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container-narrow prose">
        <span className="eyebrow">Who We Are</span>
        <h1 className="page-title">About Tradecy Design • Build • Renovate</h1>
        <p className="lead-text">
          Tradecy Inc. was founded in London, Ontario by professionals with
          backgrounds in architecture and engineering who share a passion for
          residential and commercial construction.
        </p>
        <p className="lead-text">
          From initial design and building permits to structural framing,
          finishing, and project management, our goal is to make home
          renovations in London transparent, dependable, and stress-free.
        </p>
      </div>
    </section>
  );
}
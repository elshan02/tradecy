import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./about.css";

export const metadata: Metadata = {
  title: "About Tradecy Inc. | London, ON Renovation Contractors",
  description:
    "Meet Asir and Cansu at Tradecy Design • Build • Renovate. Home renovation experts in London, Ontario delivering kitchen, bathroom, basement, and full home upgrades since 2010.",
  alternates: {
    canonical: "/about",
  },
};

const aboutSchemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Tradecy Inc.",
  url: "https://tradecy.ca/about",
  mainEntity: {
    "@type": "HomeAndConstructionBusiness",
    name: "Tradecy Inc.",
    alternateName: "Tradecy Design • Build • Renovate",
    foundingDate: "2010",
    telephone: "+1-226-224-5070",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2491 Tokala Trail",
      addressLocality: "London",
      addressRegion: "ON",
      postalCode: "N6G 0L7",
      addressCountry: "CA",
    },
    founder: [
      {
        "@type": "Person",
        name: "Asir",
        jobTitle: "Founder & Architectural Technologist",
        alumniOf: "Humber College",
      },
      {
        "@type": "Person",
        name: "Cansu",
        jobTitle: "Co-Founder & Client Relations",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchemaJsonLd),
        }}
      />

      {/* Page Header */}
      <section className="about-header">
        <div className="container">
          <span className="eyebrow">Proudly Canadian Owned &amp; Operated</span>
          <h1 className="about-main-title">About Us</h1>
          <div className="about-title-divider" aria-hidden="true" />
        </div>
      </section>

      {/* Section 1: Our History */}
      <section className="about-section">
        <div className="container about-split">
          <div className="about-image-wrap">
            {/* Save your kitchen design/sketch photo as public/about-history.jpg */}
            <Image
              src="/about-history.jpg"
              alt="Kitchen design blending realistic and sketched elements with a central island and hanging lights by Tradecy Inc."
              width={640}
              height={480}
              className="about-image"
              priority
            />
          </div>

          <div className="about-content">
            <span className="about-kicker">Our History</span>
            <h2 className="about-heading">
              Home Renovation Experts in London, Ontario
            </h2>

            <div className="about-copy">
              <p>
                Tradecy Design • Build • Renovate is a London, Ontario based
                renovation company focused on delivering clean, well-executed
                spaces with attention to detail. Led by Asir, who has been
                working in the construction and renovation field since 2010, our
                work is built on years of hands-on experience across a wide
                range of residential projects.
              </p>
              <p>
                We specialize in{" "}
                <Link href="/services/kitchen" className="about-inline-link">
                  kitchen
                </Link>
                ,{" "}
                <Link href="/services/bathroom" className="about-inline-link">
                  bathroom
                </Link>
                , and{" "}
                <Link href="/services/basement" className="about-inline-link">
                  basement renovations
                </Link>
                , as well as full home upgrades. Our approach is simple: to
                understand the space, understand the people living in it, and
                build in a way that makes everyday life easier and more
                functional.
              </p>
              <p>
                Every project is handled with care, from the first conversation
                to the final details. We focus on practical solutions, clear
                communication, and results that feel balanced, refined, and
                built to last.
              </p>
              <p className="about-quote">
                At Tradecy, we believe that a well-done renovation is not just
                about how it looks, but how it works for you every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Team */}
      <section className="about-section about-section-alt">
        <div className="container about-split about-split-reverse">
          <div className="about-image-wrap">
            {/* Save Asir & Cansu's team photo as public/about-team.jpg */}
            <Image
              src="/about-team.jpg"
              alt="Asir and Cansu, Founders of Tradecy Design • Build • Renovate in London, Ontario"
              width={640}
              height={480}
              className="about-image"
            />
          </div>

          <div className="about-content">
            <span className="about-kicker">Our Team</span>
            <h2 className="about-heading">
              London Ontario&apos;s Renovation Experts
            </h2>

            <div className="about-copy">
              <p>
                Tradecy Design • Build • Renovate is led by{" "}
                <strong>Asir, Founder</strong>, an Architectural Technologist
                who graduated from Humber College in 2009, bringing a strong
                combination of technical knowledge and hands-on experience to
                every project.
              </p>
              <p>
                His focus is on clean execution, thoughtful design, and precise
                detailing, ensuring each space is both functional and
                well-built.
              </p>
              <p>
                <strong>Cansu, Co-Founder &amp; Client Relations</strong>,
                manages the client experience from the first conversation to the
                final stage of the project. She ensures clear communication,
                smooth coordination, and a thoughtful approach to each home and
                client.
              </p>
              <p>
                Together, they offer a balanced approach to home renovations in
                London, Ontario — combining technical expertise with a
                client-focused process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner" style={{ marginTop: 0 }}>
            <div>
              <h2 className="card-title" style={{ color: "#ffffff" }}>
                Ready to Start Your Renovation in London, Ontario?
              </h2>
              <p className="card-text" style={{ color: "#cbd5e1" }}>
                Speak directly with Asir &amp; Cansu at 226-224-5070 for a free
                consultation.
              </p>
            </div>
            <Link href="/#free-estimate" className="btn-primary">
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
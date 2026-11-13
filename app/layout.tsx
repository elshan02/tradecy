import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tradecy.ca"),
  title: {
    default: "London Ontario Home Renovations & General Contractor | Tradecy Inc.",
    template: "%s | Tradecy Inc. — London, ON",
  },
  description:
    "Full-service home renovations in London, Ontario. Custom kitchens, bathrooms, basements, painting, decks, and commercial remodeling by Tradecy Inc. Call 226-224-5070.",
  alternates: {
    canonical: "/",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://tradecy.ca/#organization",
  name: "Tradecy Inc.",
  alternateName: "Tradecy Design • Build • Renovate",
  url: "https://tradecy.ca",
  telephone: "+1-226-224-5070",
  email: "tradecycanada@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2491 Tokala Trail",
    addressLocality: "London",
    addressRegion: "ON",
    postalCode: "N6G 0L7",
    addressCountry: "CA",
  },
  areaServed: ["London, Ontario", "Byron", "Masonville", "Oakridge", "Wortley Village", "Hyde Park", "St. Thomas"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="site-wrapper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        {/* Top Announcement Banner */}
        <div className="top-bar">
          Serving London, Ontario &amp; Surrounding Areas |{" "}
          <a href="tel:+12262245070">Call 226-224-5070 for a Free Quote</a>
        </div>

        {/* Sticky Navigation Header */}
        <header className="site-header">
          <div className="navbar">
            <Link href="/" className="brand">
              <span className="brand-name">
                TRADECY <span className="brand-accent">INC.</span>
              </span>
              <span className="brand-tagline">Design • Build • Renovate</span>
            </Link>

            <nav className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/kitchen">Kitchen</Link>
              <Link href="/bathroom">Bathroom</Link>
              <Link href="/basement">Basement</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
            </nav>

            <a href="tel:+12262245070" className="btn-primary">
              226-224-5070
            </a>
          </div>
        </header>

        {/* Main Page Content */}
        <main className="main-content">{children}</main>

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-grid">
            <div>
              <p className="brand-name" style={{ color: "#ffffff" }}>
                TRADECY <span className="brand-accent">INC.</span>
              </p>
              <p className="card-text" style={{ color: "#94a3b8" }}>
                Residential and commercial renovations across London, Ontario and
                surrounding areas.
              </p>
            </div>

            <div>
              <h2 className="footer-heading">Services</h2>
              <ul className="footer-list">
                <li><Link href="/kitchen">Kitchen Renovations</Link></li>
                <li><Link href="/bathroom">Bathroom Renovations</Link></li>
                <li><Link href="/basement">Basement Renovations</Link></li>
                <li><Link href="/residential">Full Home Renovations</Link></li>
                <li><Link href="/commercial">Commercial Renovations</Link></li>
                <li><Link href="/services">Painting, Decks &amp; Fences</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="footer-heading">Contact Tradecy Inc.</h2>
              <ul className="footer-list">
                <li>2491 Tokala Trail, London, ON N6G 0L7</li>
                <li><a href="tel:+12262245070">226-224-5070</a></li>
                <li><a href="mailto:tradecycanada@gmail.com">tradecycanada@gmail.com</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} Tradecy Inc. All rights reserved. London, Ontario.
          </div>
        </footer>
      </body>
    </html>
  );
}
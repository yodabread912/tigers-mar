"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const PARTNERS = [
  { id: 1, name: "AMSI Supply", logo: "/partners/01-amsi.png" },
  { id: 2, name: "Bottom Blocks Inc.", logo: "/partners/02-bottom-blocks.png" },
  {
    id: 3,
    name: "CT Consigna Construction Corp",
    logo: "/partners/03-ct-consigna.png",
  },
  { id: 4, name: "DUCATI Philippines", logo: "/partners/04-ducati.png" },
  { id: 5, name: "Fursys Philippines", logo: "/partners/05-fursys.png" },
  {
    id: 6,
    name: "Goldshine Pharmaceuticals",
    logo: "/partners/06-goldshine.png",
  },
  {
    id: 7,
    name: "Dreambuilders Pro, Inc.",
    logo: "/partners/07-dreambuilders.png",
  },
  { id: 8, name: "Krispy Kreme", logo: "/partners/08-krispy-kreme.png" },
  { id: 9, name: "Llaollao", logo: "/partners/09-llaollao.png" },
  {
    id: 10,
    name: "Metal Alliance Rolling Mills Corporation",
    logo: "/partners/10-metal-alliance.png",
  },
  {
    id: 11,
    name: "Balai Pandesal",
    logo: "/partners/11-balai-pandesal.png",
  },
  {
    id: 12,
    name: "Dylan Patisserie",
    logo: "/partners/12-dylan-patisserie.png",
  },
  { id: 13, name: "EO Executive Optical" },
  { id: 14, name: "Golden Gibbon" },
  { id: 15, name: "Jamaican" },
  { id: 16, name: "MINISO" },
  { id: 17, name: "SHAKA" },
  { id: 18, name: "Philippine National Bank" },
];

const ITEMS_PER_PAGE = 12;

export default function PartnersPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(PARTNERS.length / ITEMS_PER_PAGE);

  const visiblePartners = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return PARTNERS.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, index) => index + 1),
    [totalPages],
  );

  return (
    <div className="partners-page">
      <section className="partners-hero">
        <div className="container partners-hero-inner">
          <h1 className="partners-title">Partners and Clients</h1>
          <p className="partners-subtitle">
            Trusted by leading organizations across various industries
          </p>
        </div>
      </section>

      <section className="partners-grid-wrap">
        <div className="container partners-grid">
          {visiblePartners.map((partner) => (
            <article className="partner-card" key={`partner-${partner.id}`}>
              <div className="partner-logo">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="partner-logo-img"
                    sizes="(max-width: 768px) 42vw, (max-width: 1200px) 220px, 260px"
                  />
                ) : null}
              </div>
              <p className="partner-name">{partner.name}</p>
            </article>
          ))}
        </div>

        <div className="container projects-pagination">
          <button
            className="pager-link"
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              className={`pager-number ${currentPage === page ? "active" : ""}`}
              type="button"
              onClick={() => setCurrentPage(page)}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          ))}

          <button
            className="pager-link"
            type="button"
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}

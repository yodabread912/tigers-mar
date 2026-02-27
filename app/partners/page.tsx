export default function PartnersPage() {
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
          {Array.from({ length: 12 }).map((_, index) => (
            <article className="partner-card" key={`partner-${index}`}>
              <div className="partner-logo" aria-hidden="true">
                <span className="partner-logo-mark" />
              </div>
              <p className="partner-name">Lorem Ipsum</p>
            </article>
          ))}
        </div>

        <div className="container partners-pagination">
          <button className="partners-page-btn" type="button">
            &lt; Previous
          </button>
          <button className="partners-page-btn is-active" type="button">
            1
          </button>
          <button className="partners-page-btn" type="button">
            2
          </button>
          <button className="partners-page-btn" type="button">
            3
          </button>
          <span className="partners-page-dots">...</span>
          <button className="partners-page-btn" type="button">
            Next &gt;
          </button>
        </div>
      </section>
    </div>
  );
}

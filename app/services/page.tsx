export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container services-hero-inner">
          <h1 className="services-title">Services</h1>
          <p className="services-subtitle">
            Trusted by leading organizations across various industries
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="container services-grid">
          <article className="service-card">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M4 11l8-7 8 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M6 10v10h12V10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M10 20v-5h4v5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <h2>Residential Construction</h2>
            <p>
              Building durable, elegant homes tailored to your family's needs
              and dreams.
            </p>
          </article>

          <article className="service-card">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <rect
                  x="3"
                  y="8"
                  width="18"
                  height="11"
                  rx="1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M9 8V6h6v2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M3 12h18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <h2>Commercial Projects</h2>
            <p>
              Creating commercial spaces that are both functional and
              impressive.
            </p>
          </article>

          <article className="service-card">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M6 7h12l-1 12H7L6 7z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M9 7V5h6v2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <h2>Project Management</h2>
            <p>
              From planning to execution, we ensure your project stays on time
              and on budget.
            </p>
          </article>

          <article className="service-card">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="m15 12-8.5 8.5a1.5 1.5 0 1 1-2.121-2.121L13 9.757"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M14 8.5 16.5 6a2.121 2.121 0 1 0-3-3L11 5.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="m9 7 8 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="m5 12 8 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <h2>Interior Fit-outs</h2>
            <p>
              Transforming your space with modern, efficient, and stylish
              upgrades.
            </p>
          </article>

          <article className="service-card">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <circle
                  cx="9"
                  cy="8"
                  r="2.6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="16"
                  cy="9"
                  r="2.1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M4.5 18c1.2-2.8 7.2-2.8 8.4 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M13 18c0.7-2 4.7-2 5.4 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <h2>Architectural Designs</h2>
            <p>
              Crafting innovative and sustainable designs to bring your vision
              to life.
            </p>
          </article>

          <article className="service-card">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M14.7 6.3a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0L22 7a6 6 0 0 1-7.84 7.84l-6.91 6.91a2 2 0 1 1-2.83-2.83l6.91-6.91A6 6 0 0 1 14.7 6.3z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <h2>Engineering Designing</h2>
            <p>
              Ensuring safety, strength, and integrity across all our builds.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

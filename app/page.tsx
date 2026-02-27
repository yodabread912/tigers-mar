import Hero from "./components/Hero";

const WHY_CHOOSE_US = [
  {
    icon: "🛡️",
    title: "Safety First",
    description:
      "Stringent safety protocols and zero-compromise approach to worker and site safety.",
  },
  {
    icon: "🏅",
    title: "Industry Recognition",
    description:
      "Multiple awards and certifications recognizing our commitment to excellence.",
  },
  {
    icon: "🕒",
    title: "On-time Delivery",
    description:
      "99% of our projects completed on or ahead of schedule with meticulous planning.",
  },
  {
    icon: "👍",
    title: "Quality Assurance",
    description:
      "Rigorous quality control at every stage ensuring superior construction standards.",
  },
  {
    icon: "🧰",
    title: "Expert Team",
    description:
      "Highly skilled engineers, architects, and construction professionals at your service.",
  },
  {
    icon: "✅",
    title: "On-time Delivery",
    description:
      "13+ years of successful project delivery across diverse construction sectors.",
  },
];

const OUR_PROCESS = [
  {
    icon: "📋",
    title: "Feasibility Study",
    description:
      "We assess your vision, requirements, and budget to determine the project's viability.",
  },
  {
    icon: "✏️",
    title: "Design Development",
    description:
      "Our team prepares detailed plans and 3D visualizations to bring your ideas to life.",
  },
  {
    icon: "👷",
    title: "LGU Permit",
    description:
      "We manage all local government permits and approvals to ensure full compliance.",
  },
  {
    icon: "🏠",
    title: "Construction Phase",
    description:
      "Our skilled professionals deliver high-quality workmanship with precision and care.",
  },
  {
    icon: "🔑",
    title: "Project Handover",
    description:
      "We conduct final inspections to guarantee quality before officially turning over the project.",
  },
  {
    icon: "🛠️",
    title: "Post-Construction",
    description:
      "We provide ongoing assistance and maintenance to ensure long-term satisfaction.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      {/* add next sections here */}
      <section className="why-choose" aria-labelledby="why-choose-heading">
        <div className="container why-choose-inner">
          <h2
            id="why-choose-heading"
            className="section-title text-[clamp(2.5rem,6vw,3.5rem)] leading-[1.1] font-extrabold text-[#0b1f44]"
          >
            Why Choose Us
          </h2>
          <p className="section-subtitle text-[1.125rem] leading-[1.4] text-[#3f5068]">
            Trusted by leading organizations across various industries
          </p>

          <div className="why-choose-grid">
            {WHY_CHOOSE_US.map((item) => (
              <article
                key={item.title + item.description}
                className="why-choose-card"
              >
                <span className="why-choose-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process" aria-labelledby="process-heading">
        <div className="container process-inner">
          <h2
            id="process-heading"
            className="section-title text-[clamp(2.5rem,6vw,3.5rem)] leading-[1.1] font-extrabold text-[#0b1f44]"
          >
            Our Process of Excellence
          </h2>
          <p className="section-subtitle text-[1.125rem] leading-[1.4] text-[#3f5068]">
            We follow a meticulous process to ensure every project is completed
            to the highest standards
          </p>
          <div className="process-grid">
            {OUR_PROCESS.map((step) => (
              <article key={step.title} className="process-card">
                <span className="process-icon" aria-hidden="true">
                  {step.icon}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact-us"
        className="contact-section"
        aria-labelledby="contact-heading"
      >
        <div className="container contact-inner">
          <div className="contact-header">
            <h2 id="contact-heading">Contact Us</h2>
            <p>
              Visit us at our headquarters or get in touch with our team
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path
                      d="M12 3c-3.3 0-6 2.7-6 6 0 4.6 6 12 6 12s6-7.4 6-12c0-3.3-2.7-6-6-6z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="9"
                      r="2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <h3>Address</h3>
                <p>
                  Tigers Mark Corporation Building
                  <br />
                  17, Road 10 Visayas Ave, Quezon City,
                  <br />
                  1128 Metro Manila Philippines
                </p>
              </div>

              <div className="contact-card">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path
                      d="M6 3h12v18H6z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 7h4M10 11h4M10 15h4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <h3>Phone</h3>
                <p>0917 623 1675</p>
              </div>

              <div className="contact-card">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M4 7l8 6 8-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <h3>Email</h3>
                <p>sales@tigersmarkcorp.com</p>
              </div>

              <div className="contact-card">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 7v5l3 2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <h3>Business Hours</h3>
                <p>
                  Monday - Saturday: 8:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="contact-map">
              <div className="map-frame" role="img" aria-label="Map preview" />
              <div className="contact-socials" aria-label="Social links">
                <span className="social-icon">X</span>
                <span className="social-icon">IG</span>
                <span className="social-icon">FB</span>
                <span className="social-icon">IN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}




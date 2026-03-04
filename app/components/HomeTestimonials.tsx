"use client";

import { useMemo, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

type HomeTestimonialsProps = {
  testimonials: Testimonial[];
};

export default function HomeTestimonials({
  testimonials,
}: HomeTestimonialsProps) {
  const safeTestimonials = useMemo(
    () =>
      testimonials.filter((item) => item.quote && item.name && item.company),
    [testimonials],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  if (safeTestimonials.length === 0) {
    return null;
  }

  const activeItem = safeTestimonials[activeIndex] ?? safeTestimonials[0];
  const total = safeTestimonials.length;

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  return (
    <section
      className="home-testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container home-testimonials-inner">
        <h2 id="testimonials-heading" className="home-testimonials-title">
          Client Testimonials
        </h2>
        <p className="home-testimonials-subtitle">
          What our clients say about working with Tigers Mark Corporation
        </p>

        <div className="home-testimonials-slider">
          <div className="home-testimonial-panels">
            <article className="home-testimonial-card">
              <p className="home-testimonial-stars" aria-label="Five stars">
                ★★★★★
              </p>
              <p className="home-testimonial-quote">{activeItem.quote}</p>
              <p className="home-testimonial-name">{activeItem.name}</p>
              <p className="home-testimonial-company">{activeItem.company}</p>
            </article>
          </div>

          <div
            className="home-testimonial-nav"
            aria-label="Previous and next testimonial"
          >
            <button
              type="button"
              className="home-testimonial-btn"
              aria-label="Previous testimonial"
              onClick={goPrev}
            >
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M15 6l-6 6 6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </button>
            <button
              type="button"
              className="home-testimonial-btn"
              aria-label="Next testimonial"
              onClick={goNext}
            >
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M9 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </button>
          </div>

          <div
            className="home-testimonial-dots"
            aria-label="Testimonial navigation"
          >
            {safeTestimonials.map((_, index) => (
              <button
                key={`testimonial-dot-${index + 1}`}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

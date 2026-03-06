"use client";

import { useState } from "react";

const videos = [
  {
    title: "Corporate Overview",
    detail: "Discover our journey and commitment to excellence.",
  },
  {
    title: "Project Highlights",
    detail: "Explore our most remarkable completed projects.",
  },
  {
    title: "Construction Process",
    detail: "Behind the scenes of our building excellence.",
  },
];

export default function AboutExperienceVideos() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const openVideo = (index: number) => {
    setActiveVideo(index);
    setIsPaused(false);
  };

  const closeVideo = () => {
    setActiveVideo(null);
    setIsPaused(false);
  };

  return (
    <section
      className="about-experience"
      aria-labelledby="about-experience-heading"
    >
      <div className="container about-experience-inner">
        <h2 id="about-experience-heading" className="about-experience-title">
          Experience Our Excellence
        </h2>
        <p className="about-experience-subtitle">
          Watch our journey of transforming visions into remarkable realities
        </p>

        <div className="about-experience-grid">
          {videos.map((video, index) => (
            <article className="about-video-card" key={video.title}>
              <button
                type="button"
                className="about-video-play-btn"
                aria-label={`Play ${video.title}`}
                onClick={() => openVideo(index)}
              >
                <span className="about-video-play" aria-hidden="true" />
              </button>
              <div className="about-video-text">
                <h3 className="about-video-title">{video.title}</h3>
                <p className="about-video-detail">{video.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeVideo !== null ? (
        <div
          className="about-video-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-video-modal-title"
          onClick={closeVideo}
        >
          <div
            className="about-video-modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="about-video-modal-close"
              aria-label="Close video preview"
              onClick={closeVideo}
            >
              ×
            </button>
            <div className="about-video-modal-placeholder" aria-hidden="true">
              <button
                type="button"
                className="about-video-modal-toggle"
                aria-label={
                  isPaused ? "Play video preview" : "Pause video preview"
                }
                onClick={(event) => {
                  event.stopPropagation();
                  setIsPaused((current) => !current);
                }}
              >
                <span className="about-video-modal-control" aria-hidden="true">
                  {isPaused ? (
                    <span className="about-video-icon-pause">
                      <span />
                      <span />
                    </span>
                  ) : (
                    <span className="about-video-icon-play" />
                  )}
                </span>
              </button>
            </div>
            <h3
              id="about-video-modal-title"
              className="about-video-modal-title"
            >
              {videos[activeVideo].title}
            </h3>
          </div>
        </div>
      ) : null}
    </section>
  );
}

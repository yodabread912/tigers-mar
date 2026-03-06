"use client";

import { useState } from "react";

const PAGE_SIZE = 3;

const activities = Array.from({ length: 6 }, (_, index) => ({
  title: `Video Showcase ${String(index + 1).padStart(2, "0")}`,
  text: "Lorem Ipsum Lorem Ipsum",
}));

export default function ActivitiesCarousel() {
  const [activePage, setActivePage] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [pausedActivities, setPausedActivities] = useState<
    Record<number, boolean>
  >({});
  const totalPages = Math.ceil(activities.length / PAGE_SIZE);
  const start = activePage * PAGE_SIZE;
  const visibleActivities = activities.slice(start, start + PAGE_SIZE);

  const isFirstPage = activePage === 0;
  const isLastPage = activePage === totalPages - 1;

  const goPrev = () => {
    setDirection("prev");
    setActivePage((current) => Math.max(0, current - 1));
  };

  const goNext = () => {
    setDirection("next");
    setActivePage((current) => Math.min(totalPages - 1, current + 1));
  };

  const toggleActivityPlayback = (index: number) => {
    setPausedActivities((current) => ({
      ...current,
      [index]: !current[index],
    }));
  };

  return (
    <>
      <div className="activities-grid-wrap">
        <div
          className={`activities-grid activities-grid-swipe activities-grid-swipe-${direction}`}
          key={`activities-page-${activePage}-${direction}`}
        >
          {visibleActivities.map((item, index) => {
            const activityIndex = start + index;
            const isPaused = Boolean(pausedActivities[activityIndex]);

            return (
              <article
                className={`activity-card activity-card-swipe activity-card-swipe-${direction}`}
                key={`activity-${activePage}-${index}`}
              >
                <button
                  type="button"
                  className="activity-thumb activity-thumb-btn"
                  aria-label={
                    isPaused
                      ? `Play ${item.title} preview`
                      : `Pause ${item.title} preview`
                  }
                  onClick={() => toggleActivityPlayback(activityIndex)}
                >
                  <span
                    className={`activity-play${isPaused ? " is-paused" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <h3 className="activity-card-title">{item.title}</h3>
                <p className="activity-card-text">{item.text}</p>
              </article>
            );
          })}
        </div>

        <button
          className="activities-prev"
          type="button"
          aria-label="Previous videos"
          onClick={goPrev}
          disabled={isFirstPage}
        >
          ←
        </button>
        <button
          className="activities-next"
          type="button"
          aria-label="Next videos"
          onClick={goNext}
          disabled={isLastPage}
        >
          →
        </button>
      </div>

      <div className="activities-dots" aria-label="Activities pages">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={`activities-dot-${index}`}
            type="button"
            aria-label={`Go to activities page ${index + 1}`}
            className={index === activePage ? "active" : ""}
            onClick={() => {
              setDirection(index > activePage ? "next" : "prev");
              setActivePage(index);
            }}
          />
        ))}
      </div>
    </>
  );
}

"use client";

import { useState } from "react";

const PAGE_SIZE = 3;

const activities = [
  {
    id: "1402972074762417",
    title: "Project Site Progress",
    text: "Project highlight from Tigers Mark in action.",
    videoUrl: "https://www.facebook.com/watch/?v=1402972074762417",
  },
  {
    id: "1501658054198462",
    title: "Client Handover Ceremony",
    text: "Commercial site progress and team milestones.",
    videoUrl: "https://www.facebook.com/watch/?v=1501658054198462",
  },
  {
    id: "1707476459934891",
    title: "Steel Structure Installation",
    text: "On-site delivery update from a recent build.",
    videoUrl: "https://www.facebook.com/watch/?v=1707476459934891",
  },
  {
    id: "Team Safety Training",
    title: "Team Safety Training",
    text: "Recent jobsite walkthrough and progress log.",
    videoUrl: "https://www.facebook.com/watch/?v=1067154898483213",
  },
  {
    id: "1101315458121592",
    title: "Drainage System Testing",
    text: "Construction milestone capture from the field.",
    videoUrl: "https://www.facebook.com/watch/?v=1101315458121592",
  },
  {
    id: "1004672505125421",
    title: "Video Showcase 06",
    text: "Team execution update for an active project.",
    videoUrl: "https://www.facebook.com/watch/?v=624760893329310",
  },
];

const getFacebookEmbedUrl = (videoUrl: string) => {
  const parsedUrl = new URL(videoUrl);
  const videoId = parsedUrl.searchParams.get("v");
  const canonicalUrl = videoId
    ? `https://www.facebook.com/watch/?v=${videoId}`
    : videoUrl;

  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(canonicalUrl)}&show_text=false`;
};

export default function ActivitiesCarousel() {
  const [activePage, setActivePage] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
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

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX;
    if (typeof touchEndX !== "number") {
      setTouchStartX(null);
      return;
    }

    const deltaX = touchStartX - touchEndX;
    const swipeThreshold = 45;

    if (deltaX > swipeThreshold && !isLastPage) {
      goNext();
    } else if (deltaX < -swipeThreshold && !isFirstPage) {
      goPrev();
    }

    setTouchStartX(null);
  };

  return (
    <>
      <div
        className="activities-grid-wrap"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`activities-grid activities-grid-swipe activities-grid-swipe-${direction}`}
          key={`activities-page-${activePage}-${direction}`}
        >
          {visibleActivities.map((item, index) => (
            <article
              className={`activity-card activity-card-swipe activity-card-swipe-${direction}`}
              key={`activity-${item.id}-${start + index}`}
            >
              <div className="activity-thumb">
                <iframe
                  className="activity-embed"
                  src={getFacebookEmbedUrl(item.videoUrl)}
                  title={item.title}
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h3 className="activity-card-title">{item.title}</h3>
              <p className="activity-card-text">{item.text}</p>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <>
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
          </>
        )}
      </div>

      {totalPages > 1 && (
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
      )}
    </>
  );
}

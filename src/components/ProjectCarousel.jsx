import { useState, useEffect, useCallback, useRef } from "react";
import "./ProjectCarousel.css";

const slides_default = [
  { title: "Dashboard overview",  desc: "Main analytics view with KPI cards and activity feed." },
  { title: "User profile page",   desc: "Edit profile details, avatar, and notification settings." },
  { title: "Shopping cart flow",  desc: "Step-by-step checkout with inline validation." },
  { title: "Analytics charts",    desc: "Revenue, conversion, and traffic breakdowns by date range." },
  { title: "Settings panel",      desc: "Account security, integrations, and billing management." },
];

export default function ProjectCarousel({
  slides = slides_default,
  placeholderIcon = "ti ti-photo",
    }) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const carouselRef = useRef(null);

  const goTo = useCallback(
    (idx) => setCurrent((idx + total) % total),
    [total]
  );

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft")  { e.preventDefault(); goTo(current - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(current + 1); }
    };
    el.addEventListener("keydown", handler);
    return () => el.removeEventListener("keydown", handler);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <div
      ref={carouselRef}
      tabIndex={0}
      aria-label="Project screenshot carousel"
      className="carousel-root"
    >
      <div className="carousel-track">

        {slides.map((s, i) => (
          <div
            key={i}
            aria-hidden={i !== current}
            className="carousel-slide"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
          >
            {s.image ? (
              <img src={s.image} alt={s.title} />
            ) : (
              <div className="carousel-placeholder">
                <i className={placeholderIcon} aria-hidden="true" />
                <span className="carousel-placeholder-label">{s.title}</span>
              </div>
            )}
          </div>
        ))}

        <ArrowBtn direction="left"  onClick={() => goTo(current - 1)} label="Previous" />
        <ArrowBtn direction="right" onClick={() => goTo(current + 1)} label="Next" />
      </div>

      <div className="carousel-footer">
        <div className="carousel-dots" role="tablist" aria-label="Slide indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === current}
              onClick={() => goTo(i)}
              className={`carousel-dot${i === current ? " active" : ""}`}
            />
          ))}
        </div>
      </div>


      <div className="carousel-caption">
        <p className="carousel-caption-title">{slide.title}</p>
        <p className="carousel-caption-desc">{slide.desc}</p>
      </div>
    </div>
  );
}

function ArrowBtn({ direction, onClick, label }) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`carousel-arrow ${direction}`}
    >
      <i
        className={direction === "left" ? "ti ti-chevron-left" : "ti ti-chevron-right"}
        aria-hidden="true"
      />
    </button>
  );
}
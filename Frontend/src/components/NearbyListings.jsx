import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function NearbyListings({ listings = [] }) {
  const scrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = 2;

  const handleScroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = direction === 'left' ? -320 : 320;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    setCurrentPage((prev) =>
      direction === 'left' ? Math.max(1, prev - 1) : Math.min(maxPages, prev + 1)
    );
  };

  return (
    <section className="nearby-listings-section" aria-label="Nearby stays">
      <div className="nearby-header-row">
        <h3 className="section-title">More stays nearby</h3>
        <div className="nearby-controls">
          <span className="nearby-page-counter">
            {currentPage}/{maxPages}
          </span>
          <button
            type="button"
            aria-label="Previous stays"
            onClick={() => handleScroll('left')}
            disabled={currentPage <= 1}
            className="nearby-nav-btn"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next stays"
            onClick={() => handleScroll('right')}
            disabled={currentPage >= maxPages}
            className="nearby-nav-btn"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="nearby-listings-scroll-row">
        {listings.map((stay) => (
          <div key={stay.id} className="nearby-stay-card">
            <div className="nearby-stay-image-wrap">
              <img
                src={stay.photoSrc}
                alt={stay.title}
                className="nearby-stay-image"
                loading="lazy"
              />
            </div>
            <p className="nearby-stay-title" title={stay.title}>
              {stay.title}
            </p>
            <div className="nearby-stay-meta">
              <span className="nearby-stay-price">
                ₹{stay.price.toLocaleString('en-IN')}
              </span>
              <span className="nearby-stay-rating">
                <Star size={12} fill="#222222" stroke="none" aria-hidden="true" />
                {stay.rating.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

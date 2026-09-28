import React from 'react';
import laurelLeft from '../assets/laurel-left.png';
import laurelRight from '../assets/laurel-right.png';

export default function RatingSummaryBanner({ rating = 4.95 }) {
  return (
    <div className="rating-summary-banner" aria-label="Guest rating summary">
      <div className="rating-summary-hero">
        <img
          src={laurelLeft}
          onError={(e) => {
            if (!e.currentTarget.dataset.fallback) {
              e.currentTarget.dataset.fallback = 'true';
              e.currentTarget.src = '/assets/images/ui/laurel-left.png';
            }
          }}
          alt=""
          className="rating-large-laurel"
          aria-hidden="true"
        />
        <span className="rating-large-number">{rating.toFixed(2)}</span>
        <img
          src={laurelRight}
          onError={(e) => {
            if (!e.currentTarget.dataset.fallback) {
              e.currentTarget.dataset.fallback = 'true';
              e.currentTarget.src = '/assets/images/ui/laurel-right.png';
            }
          }}
          alt=""
          className="rating-large-laurel"
          aria-hidden="true"
        />
      </div>
      <h3 className="rating-favourite-title">Guest favourite</h3>
      <p className="rating-favourite-subtitle">
        This home is a guest favourite based on ratings, reviews and reliability
      </p>
      <button type="button" className="how-reviews-work-link">
        How reviews work
      </button>
    </div>
  );
}

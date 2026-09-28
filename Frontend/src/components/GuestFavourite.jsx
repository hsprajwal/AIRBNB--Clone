import React from 'react';
import { Star } from 'lucide-react';
import laurelLeft from '../assets/laurel-left.png';
import laurelRight from '../assets/laurel-right.png';

export default function GuestFavourite({ rating = 4.95, reviewCount = 19 }) {
  return (
    <div className="guest-favourite-wrapper">
      <div className="guest-favourite-card">
        {/* Left Side: Laurel Badge and Subtitle */}
        <div className="guest-favourite-left">
          <div className="guest-favourite-emblem">
            <img
              src={laurelLeft}
              onError={(e) => {
                if (!e.currentTarget.dataset.fallback) {
                  e.currentTarget.dataset.fallback = 'true';
                  e.currentTarget.src = '/assets/images/ui/laurel-left.png';
                }
              }}
              alt=""
              className="guest-favourite-card-laurel"
              aria-hidden="true"
            />
            <div className="emblem-text-stack">
              <span>Guest</span>
              <span>favourite</span>
            </div>
            <img
              src={laurelRight}
              onError={(e) => {
                if (!e.currentTarget.dataset.fallback) {
                  e.currentTarget.dataset.fallback = 'true';
                  e.currentTarget.src = '/assets/images/ui/laurel-right.png';
                }
              }}
              alt=""
              className="guest-favourite-card-laurel"
              aria-hidden="true"
            />
          </div>

          <p className="guest-favourite-subtitle">
            One of the most loved homes on Airbnb, according to guests
          </p>
        </div>

        {/* Right Side: Rating & Review Count with Divider */}
        <div className="guest-favourite-right">
          <div className="guest-favourite-rating-col">
            <p className="rating-score">{rating.toFixed(2)}</p>
            <div className="rating-stars-row" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} size={11} fill="#222222" stroke="none" />
              ))}
            </div>
          </div>

          <span className="guest-favourite-divider" aria-hidden="true" />

          <div className="guest-favourite-reviews-col">
            <p className="reviews-score">{reviewCount}</p>
            <p className="reviews-label">Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

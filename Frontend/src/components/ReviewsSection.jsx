import React, { useState } from 'react';
import {
  Star,
  CheckCircle2,
  Key,
  MessageSquare,
  Map,
  Tag,
  Sparkles,
} from 'lucide-react';

const SprayBottleIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6" />
    <path d="M12 3v4" />
    <path d="M8 7h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
    <path d="M7 11h10" />
    <path d="M10 4.5 6 7" />
  </svg>
);

const categoryIconMap = {
  spray: SprayBottleIcon,
  'check-circle': CheckCircle2,
  key: Key,
  message: MessageSquare,
  map: Map,
  tag: Tag,
};

export default function ReviewsSection({
  rating = 4.95,
  reviewCount = 19,
  breakdown = [],
  categoryRatings = [],
  highlightTags = [],
  reviews = [],
}) {
  const [selectedTag, setSelectedTag] = useState(null);
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleExpand = (id) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="reviews-section" id="reviews-list-section" aria-label="Customer reviews">
      {/* 7-Column Rating Strip from Reference Screenshot 4 */}
      <div className="ratings-strip-container">
        {/* Col 1: Overall rating bar chart */}
        <div className="rating-strip-col overall-rating-col">
          <p className="strip-col-title">Overall rating</p>
          <div className="breakdown-bars-list">
            {breakdown.map((row) => (
              <div key={row.stars} className="breakdown-row">
                <span className="breakdown-star-num">{row.stars}</span>
                <div className="breakdown-track">
                  <div
                    className="breakdown-fill"
                    style={{ width: `${row.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cols 2-7: Individual Category Ratings */}
        {categoryRatings.map((cat) => {
          const IconComp = categoryIconMap[cat.icon] || Sparkles;
          return (
            <div key={cat.label} className="rating-strip-col category-strip-col">
              <p className="strip-col-title">{cat.label}</p>
              <p className="strip-col-score">{cat.value.toFixed(1)}</p>
              <div className="strip-col-icon" aria-hidden="true">
                <IconComp size={24} strokeWidth={1.5} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Review Highlight Chips / Filter Tags */}
      <div className="highlight-tags-scroll">
        {highlightTags.map((tag) => {
          const isSelected = selectedTag === tag.label;
          return (
            <button
              key={tag.label}
              type="button"
              onClick={() => setSelectedTag(isSelected ? null : tag.label)}
              className={`highlight-tag-pill ${isSelected ? 'active' : ''}`}
            >
              <span className="tag-emoji" aria-hidden="true">{tag.emoji}</span>
              <span className="tag-text">
                {tag.label} {tag.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Guest Reviews Grid (2 columns) */}
      <div className="guest-reviews-grid">
        {reviews.map((rev) => {
          const isExpanded = !!expandedReviews[rev.id];
          const isLong = rev.text.length > 180;
          const displayBody =
            isLong && !isExpanded
              ? rev.text.slice(0, 180).trim() + '...'
              : rev.text;

          return (
            <div key={rev.id} className="review-card">
              {/* Author Row */}
              <div className="review-author-row">
                {rev.avatarUrl ? (
                  <img
                    src={rev.avatarUrl}
                    alt={rev.author}
                    className="review-author-photo"
                  />
                ) : (
                  <div
                    className="review-author-avatar"
                    style={{
                      backgroundColor: rev.avatarColor || '#333333',
                      color: rev.avatarTextColor || '#ffffff',
                    }}
                    aria-hidden="true"
                  >
                    {rev.author[0]}
                  </div>
                )}
                <div className="review-author-meta">
                  <p className="review-author-name">{rev.author}</p>
                  <p className="review-author-membership">{rev.membership}</p>
                </div>
              </div>

              {/* Rating Stars and Date */}
              <div className="review-meta-row">
                <div className="review-stars-group" aria-hidden="true">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} size={9} fill="#222222" stroke="none" />
                  ))}
                </div>
                <span className="review-date-separator">·</span>
                <span className="review-date-text">{rev.date}</span>
              </div>

              {/* Review Body */}
              <p className="review-body-text">{displayBody}</p>

              {isLong && (
                <button
                  type="button"
                  onClick={() => toggleExpand(rev.id)}
                  className="review-show-more-btn"
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Show All Reviews Button */}
      <div className="show-all-reviews-wrap">
        <button type="button" className="show-all-reviews-btn">
          Show all {reviewCount} reviews
        </button>
      </div>
    </section>
  );
}

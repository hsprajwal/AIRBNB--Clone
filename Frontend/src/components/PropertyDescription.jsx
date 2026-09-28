import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export default function PropertyDescription({
  description = '',
  fullDescription = '',
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);

  const displayedText = isExpanded
    ? fullDescription || description
    : description;

  return (
    <section className="property-description-section" aria-label="About this space">
      {/* Translation Notice Pill / Card */}
      <div className="translation-notice-card">
        <span>Some info has been automatically translated. </span>
        <button
          type="button"
          onClick={() => setShowOriginal(!showOriginal)}
          className="translation-link"
        >
          {showOriginal ? 'Show translated' : 'Show original'}
        </button>
      </div>

      {/* Description Text */}
      <div className="property-description-body">
        <p className="property-description-paragraph">{displayedText}</p>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="show-more-description-btn"
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          <ChevronRight
            size={16}
            className={`show-more-chevron ${isExpanded ? 'rotated' : ''}`}
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
}

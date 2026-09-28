import React, { useState } from 'react';
import { Search, Plus, Minus, ChevronRight } from 'lucide-react';

export default function LocationSection({
  location = 'Candolim, Goa, India',
  neighbourhoodHighlight = 'Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.',
}) {
  const [zoomScale, setZoomScale] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText =
    neighbourhoodHighlight +
    ' Just a short stroll away, you will find lively beach shacks serving fresh seafood, local Goan markets, boutiques, and historic coastal viewpoints. The neighborhood is quiet and residential while being close to the center of action.';

  return (
    <section className="location-section" id="location-section" aria-label="Location and neighborhood">
      <h3 className="section-title">Where you'll be</h3>
      <p className="location-address-text">{location}</p>

      {/* Stylized Interactive Map Container */}
      <div
        className="stylized-map-container"
        role="img"
        aria-label={`Stylized map showing the approximate location in ${location}`}
      >
        {/* Transform Layer for Zooming */}
        <div
          className="map-transform-layer"
          style={{
            transform: `scale(${zoomScale})`,
            transformOrigin: 'center center',
          }}
        >
          {/* Geographical Water & Land Shapes */}
          <div className="map-water-layer" aria-hidden="true" />
          <div className="map-park-circle park-1" aria-hidden="true" />
          <div className="map-park-circle park-2" aria-hidden="true" />

          {/* Central Property Pin Marker with House Icon */}
          <div className="map-property-pin" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
            </svg>
          </div>
        </div>

        {/* Map Top-Left Search Control */}
        <button
          type="button"
          aria-label="Search this area"
          className="map-search-btn"
        >
          <Search size={16} />
        </button>

        {/* Map Top-Right Zoom Controls */}
        <div className="map-zoom-controls">
          <button
            type="button"
            aria-label="Zoom in"
            onClick={() => setZoomScale((prev) => Math.min(prev + 0.15, 1.6))}
            disabled={zoomScale >= 1.6}
            className="map-zoom-btn"
          >
            <Plus size={16} />
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            onClick={() => setZoomScale((prev) => Math.max(prev - 0.15, 0.7))}
            disabled={zoomScale <= 0.7}
            className="map-zoom-btn"
          >
            <Minus size={16} />
          </button>
        </div>
      </div>

      <p className="location-disclaimer">
        Exact location will be provided after booking.
      </p>

      {/* Neighbourhood Highlights */}
      <div className="neighbourhood-highlights-wrap">
        <h4 className="neighbourhood-title">Neighbourhood highlights</h4>
        <p className="neighbourhood-desc">
          {isExpanded ? fullText : neighbourhoodHighlight}
        </p>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="neighbourhood-show-more-btn"
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          <ChevronRight
            size={16}
            className={`neighbourhood-chevron ${isExpanded ? 'rotated' : ''}`}
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
}

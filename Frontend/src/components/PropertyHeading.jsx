import React from 'react';
import { Heart, Share } from 'lucide-react';

export default function PropertyHeading({ title = 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10' }) {
  return (
    <section className="property-heading" aria-label="Listing header">
      <h1 className="property-title">{title}</h1>

      <div className="heading-actions">
        <button type="button" className="heading-action-btn">
          <Share size={16} strokeWidth={2} />
          <span>Share</span>
        </button>
        <button type="button" className="heading-action-btn">
          <Heart size={16} strokeWidth={2} />
          <span>Save</span>
        </button>
      </div>
    </section>
  );
}

import React from 'react';
import { Sun, Wind, DoorOpen } from 'lucide-react';

const iconMap = {
  picnic: Sun,
  snowflake: Wind,
  door: DoorOpen,
};

export default function PropertyHighlights({ highlights = [] }) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="property-highlights-section" aria-label="Key property features">
      <div className="property-highlights-list">
        {highlights.map((item, idx) => {
          const IconComponent = iconMap[item.icon] || Sun;
          return (
            <div key={idx} className="highlight-feature-item">
              <div className="highlight-feature-icon" aria-hidden="true">
                <IconComponent size={24} strokeWidth={1.5} />
              </div>
              <div className="highlight-feature-content">
                <h4 className="highlight-feature-title">{item.title}</h4>
                <p className="highlight-feature-desc">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

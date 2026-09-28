import React, { useState } from 'react';
import AmenityIcon from './AmenityIcon';
import AmenitiesModal from './AmenitiesModal';

export default function Amenities({ amenities = [], allAmenitiesGrouped = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="amenities-section" id="amenities-section" aria-label="Amenities">
      <h3 className="section-title">What this place offers</h3>
      <div className="amenities-grid">
        {amenities.map((item) => (
          <div
            key={item.label}
            className={`amenity-item ${item.available ? 'available' : 'unavailable'}`}
          >
            <AmenityIcon icon={item.icon} available={item.available} size={22} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="show-all-amenities-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Show all 50 amenities
      </button>

      <AmenitiesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        groupedAmenities={allAmenitiesGrouped}
      />
    </section>
  );
}

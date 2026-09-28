import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import AmenityIcon from './AmenityIcon';

export default function AmenitiesModal({ isOpen, onClose, groupedAmenities = [] }) {
  const modalScrollRef = useRef(null);

  // Lock body scroll and reset modal scroll when opened
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      if (modalScrollRef.current) {
        modalScrollRef.current.scrollTop = 0;
      }

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="amenities-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Amenities"
    >
      <div className="amenities-modal-dialog">
        {/* Sticky Header with Close Button */}
        <div className="amenities-modal-header">
          <button
            type="button"
            className="amenities-modal-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={16} strokeWidth={2.5} color="#222222" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="amenities-modal-body" ref={modalScrollRef}>
          {groupedAmenities.map((group, groupIdx) => (
            <div key={group.category} className="amenities-modal-group">
              <h3 className={`amenities-group-title ${groupIdx === 0 ? 'first-group' : ''}`}>
                {group.category}
              </h3>
              <div className="amenities-group-list">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className={`amenities-modal-item ${item.available ? 'available' : 'unavailable'}`}
                  >
                    <div className="amenities-item-icon">
                      <AmenityIcon icon={item.icon} available={item.available} size={24} />
                    </div>
                    <span className="amenities-item-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

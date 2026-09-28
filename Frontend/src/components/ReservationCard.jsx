import React, { useState, useRef, useEffect } from 'react';
import { Tag, ChevronDown, Flag, Star } from 'lucide-react';

export default function ReservationCard({
  pricePerStay = 28499,
  nights = 5,
  rating = 4.95,
  reviewCount = 19,
  checkIn = '2026-10-18',
  checkOut = '2026-10-23',
  cancellationDate = '17 October',
  guests = 3,
}) {
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(2);
  const guestsRef = useRef(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    if (!isGuestsOpen) return;

    function handleMouseDown(e) {
      if (guestsRef.current && !guestsRef.current.contains(e.target)) {
        setIsGuestsOpen(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setIsGuestsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isGuestsOpen]);

  const formatPrice = pricePerStay.toLocaleString('en-IN');

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-').map(Number);
    const d = new Date(year, month - 1, day);
    return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`;
  };

  return (
    <div className="reservation-card-wrapper">
      {/* 10% Discount Promotion Card */}
      <div className="promo-discount-card">
        <Tag className="promo-discount-icon" size={20} aria-hidden="true" />
        <p className="promo-discount-text">
          Get 10% off your next stay.{' '}
          <span className="promo-terms-link">Terms apply</span>
        </p>
        <button type="button" className="promo-claim-btn">
          Claim
        </button>
      </div>

      {/* Main Reservation Card */}
      <div className="reservation-card">
        {/* Price & Duration */}
        <div className="reservation-price-row">
          <p className="reservation-price-text">
            <span className="reservation-price-amount">₹{formatPrice}</span>{' '}
            <span className="reservation-price-duration">for {nights} nights</span>
          </p>
        </div>

        {/* Date Selector (Check-in / Checkout) */}
        <div className="reservation-dates-grid">
          <div className="reservation-date-cell border-right">
            <p className="date-cell-label">Check-in</p>
            <p className="date-cell-value">{formatDate(checkIn)}</p>
          </div>
          <div className="reservation-date-cell">
            <p className="date-cell-label">Checkout</p>
            <p className="date-cell-value">{formatDate(checkOut)}</p>
          </div>
        </div>

        {/* Guests Selector */}
        <div className="reservation-guests-box" ref={guestsRef}>
          <button
            type="button"
            className="guests-dropdown-trigger"
            onClick={() => setIsGuestsOpen((prev) => !prev)}
            aria-expanded={isGuestsOpen}
            aria-haspopup="listbox"
          >
            <span className="guests-dropdown-info">
              <span className="date-cell-label">Guests</span>
              <span className="date-cell-value">
                {guestCount} {guestCount === 1 ? 'guest' : 'guests'}
              </span>
            </span>
            <ChevronDown
              size={16}
              className={`guests-chevron-icon ${isGuestsOpen ? 'open' : ''}`}
              aria-hidden="true"
            />
          </button>

          {isGuestsOpen && (
            <div role="listbox" className="guests-dropdown-popover">
              <div className="guests-stepper-row">
                <span className="guests-stepper-label">Guests</span>
                <div className="guests-stepper-controls">
                  <button
                    type="button"
                    className="stepper-btn"
                    onClick={() => setGuestCount((prev) => Math.max(1, prev - 1))}
                    disabled={guestCount <= 1}
                    aria-label="Decrease guests"
                  >
                    −
                  </button>
                  <span className="stepper-count">{guestCount}</span>
                  <button
                    type="button"
                    className="stepper-btn"
                    onClick={() => setGuestCount((prev) => Math.min(guests, prev + 1))}
                    disabled={guestCount >= guests}
                    aria-label="Increase guests"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cancellation Notice Pill */}
        <p className="cancellation-notice-pill">
          Free cancellation before <span className="font-semibold">{cancellationDate}</span>
        </p>

        {/* Reserve Primary Button */}
        <button type="button" className="reserve-action-btn">
          Reserve
        </button>

        <p className="no-charge-reassurance">You won't be charged yet</p>
      </div>

      {/* Report this listing Link */}
      <button type="button" className="report-listing-btn">
        <Flag size={14} aria-hidden="true" />
        <span>Report this listing</span>
      </button>
    </div>
  );
}

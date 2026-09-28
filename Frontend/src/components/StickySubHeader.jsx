import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Photos', id: 'photos-section' },
  { label: 'Amenities', id: 'amenities-section' },
  { label: 'Reviews', id: 'reviews-section' },
  { label: 'Location', id: 'location-section' },
];

export default function StickySubHeader({ price = 28499, nights = 5, rating = 4.95, reviewCount = 19 }) {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Photos');
  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show when scrolled past the top photo gallery (~520px)
      setVisible(scrollY > 520);

      // If user clicked a tab, let the programmatic scroll finish without overriding activeTab
      if (isProgrammaticScroll.current) return;

      const HEADER_OFFSET = 95;

      const locationEl = document.getElementById('location-section');
      const reviewsEl = document.getElementById('reviews-section');
      const amenitiesEl = document.getElementById('amenities-section');

      // Check if user is scrolled to or near bottom of the document
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;

      if (isNearBottom) {
        setActiveTab('Location');
      } else if (locationEl && locationEl.getBoundingClientRect().top <= HEADER_OFFSET + 60) {
        setActiveTab('Location');
      } else if (reviewsEl && reviewsEl.getBoundingClientRect().top <= HEADER_OFFSET + 60) {
        setActiveTab('Reviews');
      } else if (amenitiesEl && amenitiesEl.getBoundingClientRect().top <= HEADER_OFFSET + 60) {
        setActiveTab('Amenities');
      } else {
        setActiveTab('Photos');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const handleNavClick = (item) => {
    setActiveTab(item.label);
    isProgrammaticScroll.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    if (item.label === 'Photos') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(item.id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }

    scrollTimeout.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 750);
  };

  const handleReserveClick = () => {
    const reservationEl = document.querySelector('.listing-reservation-col');
    if (reservationEl) {
      const top = reservationEl.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -72, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -72, opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="sticky-subheader-bar"
        >
          <div className="sticky-subheader-content">
            <nav className="sticky-subheader-nav" aria-label="Listing navigation">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className={`sticky-nav-link ${activeTab === item.label ? 'active' : ''}`}
                >
                  <span className="sticky-nav-text">{item.label}</span>
                  {activeTab === item.label && (
                    <motion.div
                      layoutId="stickyNavUnderline"
                      className="sticky-nav-active-bar"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            <div className="sticky-subheader-right">
              <div className="sticky-subheader-meta">
                <div className="sticky-meta-price-row">
                  <span className="sticky-price-value">₹{price.toLocaleString('en-IN')}</span>
                  <span className="sticky-price-sub"> for {nights} nights</span>
                </div>
                <div className="sticky-meta-rating-row">
                  <span className="sticky-rating-star" aria-hidden="true">★</span>
                  <span className="sticky-rating-val">{rating.toFixed(2)}</span>
                  <span className="sticky-meta-dot">·</span>
                  <span className="sticky-reviews-count">{reviewCount} reviews</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleReserveClick}
                className="sticky-reserve-btn"
              >
                Reserve
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

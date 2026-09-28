import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronLeft, Share, Heart, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PhotoLightbox from './PhotoLightbox';

export default function PhotoTour({
  photos = [],
  rooms = [],
  onClose,
  initialCategory,
  onSelectPhoto,
}) {
  const [isSaved, setIsSaved] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [selectedLightboxPhotoId, setSelectedLightboxPhotoId] = useState(null);
  const scrollContainerRef = useRef(null);

  // Group photos by category based on rooms/photoCategories config from data file
  const categoryData = useMemo(() => {
    return rooms.map((roomItem) => {
      const roomTitle = roomItem.title || roomItem.room || '';
      const matchedPhotos = (roomItem.photoIds || [])
        .map((id) => photos.find((p) => p.id === id))
        .filter(Boolean);

      const fallbackPhotos =
        matchedPhotos.length > 0
          ? matchedPhotos
          : photos.filter((p) => (p.room || p.categoryTitle) === roomTitle);

      const amenitiesText =
        roomItem.amenities ||
        roomItem.amenitiesText ||
        (roomItem.tags || []).join(' · ');

      const layout =
        roomItem.layout ||
        (fallbackPhotos.length >= 3 ? 'hero_then_pair' : fallbackPhotos.length === 2 ? 'pair' : 'hero_then_pair');

      return {
        id: roomItem.id || roomTitle,
        room: roomTitle,
        amenitiesText,
        layout,
        thumbnailUrl: roomItem.thumbnailUrl || fallbackPhotos[0]?.src || '',
        photos: fallbackPhotos,
      };
    });
  }, [rooms, photos]);

  // Lock body scroll, handle Escape key, and sync URL search param with ?modal=PHOTO_TOUR_SCROLLABLE
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Synchronize URL with reference: ?modal=PHOTO_TOUR_SCROLLABLE
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('modal', 'PHOTO_TOUR_SCROLLABLE');
    window.history.pushState({ modal: 'PHOTO_TOUR_SCROLLABLE' }, '', currentUrl.toString());

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    const handlePopState = () => {
      onClose?.();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);

      // Revert URL query parameter
      const cleanUrl = new URL(window.location.href);
      cleanUrl.searchParams.delete('modal');
      window.history.replaceState({}, '', cleanUrl.pathname + (cleanUrl.search ? cleanUrl.search : ''));
    };
  }, [onClose]);

  // Scroll smoothly to selected category section without snapping or re-renders
  const scrollToCategory = (roomName) => {
    const sectionId = `tour-category-${roomName.replace(/\s+/g, '-').toLowerCase()}`;
    const sectionEl = document.getElementById(sectionId);
    const scrollContainer = scrollContainerRef.current;

    if (sectionEl && scrollContainer) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const sectionRect = sectionEl.getBoundingClientRect();
      const headerOffset = 72; // Anchors heading directly below fixed header
      const targetScrollTop =
        scrollContainer.scrollTop + (sectionRect.top - containerRect.top) - headerOffset;

      scrollContainer.scrollTo({
        top: Math.max(0, targetScrollTop),
        behavior: 'smooth',
      });
    }
  };

  // Scroll to initialCategory if provided on mount
  useEffect(() => {
    if (initialCategory) {
      const timer = setTimeout(() => {
        scrollToCategory(initialCategory);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [initialCategory]);

  const handleShare = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 2400);
      }
    } catch {
      // fallback
    }
  };

  const handlePhotoClick = (photoId) => {
    if (onSelectPhoto) {
      onSelectPhoto(photoId);
    } else {
      setSelectedLightboxPhotoId(photoId);
    }
  };

  // Render each category according to its layout defined in the data structure
  const renderCategoryPhotos = (cat) => {
    const { photos: catPhotos = [], layout: layoutType = 'hero_then_pair' } = cat;
    if (!catPhotos || catPhotos.length === 0) return null;

    // Arrangement 1: Two large full-width hero images stacked vertically
    if (layoutType === 'two_large') {
      return (
        <div className="photo-tour-category-gallery">
          {catPhotos.map((photo) => (
            <div
              key={photo.id}
              className="photo-tour-hero-card clickable"
              onClick={() => handlePhotoClick(photo.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePhotoClick(photo.id)}
              aria-label={photo.alt || 'View photo full screen'}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="photo-tour-img"
              />
            </div>
          ))}
        </div>
      );
    }

    // Arrangement 2: Paired smaller images side-by-side (e.g. Full kitchen, Full bathroom, Gym)
    if (layoutType === 'pair') {
      return (
        <div className="photo-tour-category-gallery">
          <div className="photo-tour-pairs-grid">
            {catPhotos.map((photo) => (
              <div
                key={photo.id}
                className="photo-tour-sub-card clickable"
                onClick={() => handlePhotoClick(photo.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePhotoClick(photo.id)}
                aria-label={photo.alt || 'View photo full screen'}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="photo-tour-img"
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Arrangement 3: Large primary image followed by paired smaller images (e.g. Living room 1, Bedroom, Additional photos)
    const primaryPhoto = catPhotos[0];
    const secondaryPhotos = catPhotos.slice(1);

    return (
      <div className="photo-tour-category-gallery">
        {/* Large Primary Image */}
        <div
          className="photo-tour-hero-card clickable"
          onClick={() => handlePhotoClick(primaryPhoto.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePhotoClick(primaryPhoto.id)}
          aria-label={primaryPhoto.alt || 'View photo full screen'}
        >
          <img
            src={primaryPhoto.src}
            alt={primaryPhoto.alt}
            className="photo-tour-img"
          />
        </div>

        {/* Smaller Images Arranged in Pairs */}
        {secondaryPhotos.length > 0 && (
          <div className="photo-tour-pairs-grid">
            {secondaryPhotos.map((photo) => (
              <div
                key={photo.id}
                className="photo-tour-sub-card clickable"
                onClick={() => handlePhotoClick(photo.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePhotoClick(photo.id)}
                aria-label={photo.alt || 'View photo full screen'}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="photo-tour-img"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="photo-tour-fullscreen-root" role="dialog" aria-modal="true" aria-label="Photo tour">
      {/* 1. Fixed Top Header (Pure white, no bottom border) */}
      <header className="photo-tour-top-header">
        <div className="photo-tour-header-container">
          {/* Left: Back chevron */}
          <button
            type="button"
            onClick={onClose}
            className="photo-tour-nav-chevron-btn"
            aria-label="Back to listing"
          >
            <ChevronLeft size={20} strokeWidth={1.8} />
          </button>

          {/* Center: Title */}
          <h1 className="photo-tour-header-title">Photo tour</h1>

          {/* Right: Share & Wishlist Heart */}
          <div className="photo-tour-header-actions">
            <button
              type="button"
              onClick={handleShare}
              className="photo-tour-icon-btn"
              aria-label="Share listing"
              title="Share"
            >
              <Share size={18} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={() => setIsSaved(!isSaved)}
              className="photo-tour-icon-btn"
              aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
              title="Save"
            >
              <Heart
                size={18}
                strokeWidth={1.8}
                fill={isSaved ? '#e00b41' : 'none'}
                color={isSaved ? '#e00b41' : '#222222'}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Share Toast */}
      <AnimatePresence>
        {showShareToast && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="photo-tour-share-toast"
          >
            <Check size={16} className="text-emerald-500" />
            <span>Link copied to clipboard</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Scrollable Body: Contains horizontal thumbnail strip at top (disappears naturally on scroll) + 2-column sections */}
      <div className="photo-tour-scroll-body" ref={scrollContainerRef}>
        <div className="photo-tour-content-container">
          {/* Horizontal Category Thumbnail Strip: 8 in Row 1, 9th in Row 2, disappears naturally as page scrolls */}
          <div className="photo-tour-category-thumbnails-grid">
            {categoryData.map((cat) => {
              const btnId = `tour-thumb-${cat.room.replace(/\s+/g, '-').toLowerCase()}`;
              return (
                <button
                  key={cat.room}
                  id={btnId}
                  type="button"
                  onClick={() => scrollToCategory(cat.room)}
                  className="photo-tour-thumb-card-btn"
                >
                  <div className="photo-tour-thumb-img-wrapper">
                    <img
                      src={cat.thumbnailUrl}
                      alt=""
                      className="photo-tour-thumb-img"
                    />
                  </div>
                  <span className="photo-tour-thumb-title">{cat.room}</span>
                </button>
              );
            })}
          </div>
          <div className="photo-tour-sections-list">
            {categoryData.map((cat) => (
              <section
                key={cat.room}
                id={`tour-category-${cat.room.replace(/\s+/g, '-').toLowerCase()}`}
                data-room={cat.room}
                className="photo-tour-section"
              >
                <div className="photo-tour-section-layout">
                  {/* Left Column: Title & Amenities (moves together with right column as one page) */}
                  <div className="photo-tour-left-col">
                    <div className="photo-tour-left-info">
                      <h2 className="photo-tour-category-heading">{cat.room}</h2>
                      {cat.amenitiesText && (
                        <p className="photo-tour-category-amenities">
                          {cat.amenitiesText}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Photos according to category count */}
                  <div className="photo-tour-right-col">
                    {renderCategoryPhotos(cat)}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Full-Screen Photo Lightbox Viewer */}
      {selectedLightboxPhotoId != null && (
        <PhotoLightbox
          isOpen={true}
          photos={photos}
          rooms={rooms}
          initialPhotoId={selectedLightboxPhotoId}
          onClose={() => setSelectedLightboxPhotoId(null)}
        />
      )}
    </div>
  );
}

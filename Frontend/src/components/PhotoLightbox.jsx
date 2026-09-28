import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Builds a flat array of photos ordered according to Photo Tour room categories.
 */
export function getOrderedTourPhotos(rooms = [], photos = []) {
  const orderedList = [];

  rooms.forEach((roomItem) => {
    const matched = (roomItem.photoIds || [])
      .map((id) => photos.find((p) => p.id === id))
      .filter(Boolean);

    const roomTitle = roomItem.room || roomItem.title || '';
    const roomPhotos =
      matched.length > 0
        ? matched
        : photos.filter((p) => (p.room || p.categoryTitle) === roomTitle);

    roomPhotos.forEach((photo) => {
      orderedList.push({
        ...photo,
        categoryName: roomTitle || photo.categoryTitle || 'Room',
      });
    });
  });

  // Append any photo from photos not included in roomItem
  photos.forEach((photo) => {
    if (!orderedList.some((p) => p.id === photo.id)) {
      orderedList.push({
        ...photo,
        categoryName: photo.room || photo.categoryTitle || 'Additional photos',
      });
    }
  });

  return orderedList;
}

export default function PhotoLightbox({
  isOpen,
  photos = [],
  rooms = [],
  initialPhotoId = null,
  initialIndex = 0,
  onClose,
}) {
  // Ordered photo data matching Photo Tour sequence
  const orderedPhotos = useMemo(() => {
    return getOrderedTourPhotos(rooms, photos);
  }, [rooms, photos]);

  const [currentIndex, setCurrentIndex] = useState(() => {
    if (initialPhotoId != null) {
      const idx = orderedPhotos.findIndex((p) => p.id === initialPhotoId);
      if (idx !== -1) return idx;
    }
    return initialIndex || 0;
  });

  // Synchronize index when initialPhotoId changes
  useEffect(() => {
    if (initialPhotoId != null) {
      const idx = orderedPhotos.findIndex((p) => p.id === initialPhotoId);
      if (idx !== -1) {
        setCurrentIndex(idx);
      }
    }
  }, [initialPhotoId, orderedPhotos]);

  const totalPhotos = orderedPhotos.length;
  const currentPhoto = orderedPhotos[currentIndex] || orderedPhotos[0];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPhotos - 1));
  }, [totalPhotos]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < totalPhotos - 1 ? prev + 1 : 0));
  }, [totalPhotos]);

  // Keyboard navigation: Left/Right arrows, Escape to close
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      className="photo-lightbox-root"
      role="dialog"
      aria-modal="true"
      aria-label="Full-screen photo lightbox"
    >
      {/* Top Header */}
      <header className="photo-lightbox-header">
        <div className="photo-lightbox-header-inner">
          {/* Top Left: Spacer / Action placeholder */}
          <div className="photo-lightbox-header-left" />

          {/* Top Center: Category / Room name */}
          <h2 className="photo-lightbox-category-title">
            {currentPhoto.categoryName || currentPhoto.room || 'Photo'}
          </h2>

          {/* Top Right: Counter e.g. "1 of 21" and X close button */}
          <div className="photo-lightbox-header-right">
            <span className="photo-lightbox-counter">
              {currentIndex + 1} of {totalPhotos}
            </span>
            <button
              type="button"
              className="photo-lightbox-close-btn"
              onClick={onClose}
              aria-label="Close photo viewer"
            >
              <X size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Image Stage */}
      <main className="photo-lightbox-stage">
        {/* Left Arrow Button */}
        <button
          type="button"
          className="photo-lightbox-nav-btn prev-btn"
          onClick={handlePrev}
          aria-label="Previous photo"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        {/* Large Centered Image */}
        <div className="photo-lightbox-image-wrapper">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentPhoto.id || currentIndex}
              src={currentPhoto.src}
              alt={currentPhoto.alt || currentPhoto.categoryName || 'Listing photo'}
              className="photo-lightbox-image"
              initial={{ opacity: 0.85, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.85 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            />
          </AnimatePresence>
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          className="photo-lightbox-nav-btn next-btn"
          onClick={handleNext}
          aria-label="Next photo"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </main>
    </div>
  );
}

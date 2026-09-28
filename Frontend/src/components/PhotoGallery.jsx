import React from 'react';
import { motion } from 'framer-motion';
import { Grid3x3 } from 'lucide-react';

export default function PhotoGallery({ photos = [], onOpenPhoto, onOpenTour }) {
  const displayPhotos = photos.slice(0, 5);
  const heroPhoto = displayPhotos[0];
  const sidePhotos = displayPhotos.slice(1, 5);

  if (!heroPhoto) return null;

  return (
    <section className="photo-gallery-wrapper" id="photos-section" aria-label="Property photos">
      <div className="photo-gallery-grid">
        {/* Main Hero Photo (Left side: 2 columns x 2 rows) */}
        <button
          type="button"
          className="gallery-cell hero-cell"
          onClick={() => onOpenPhoto?.(heroPhoto.id)}
          aria-label={`View photo: ${heroPhoto.alt}`}
        >
          <motion.div
            className="gallery-image-inner"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            <img
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              className="gallery-img"
              loading="eager"
            />
          </motion.div>
        </button>

        {/* 4 Secondary Photos (Right side: 2x2 grid) */}
        {sidePhotos.map((photo) => (
          <button
            key={photo.id}
            type="button"
            className="gallery-cell side-cell"
            onClick={() => onOpenPhoto?.(photo.id)}
            aria-label={`View photo: ${photo.alt}`}
          >
            <motion.div
              className="gallery-image-inner"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="gallery-img"
                loading="lazy"
              />
            </motion.div>
          </button>
        ))}

        {/* "Show all photos" Button */}
        <button
          type="button"
          className="show-all-photos-btn"
          onClick={() => (onOpenTour ? onOpenTour() : onOpenPhoto?.(heroPhoto.id))}
          aria-label="Show all photos"
        >
          <Grid3x3 size={16} strokeWidth={2} />
          <span>Show all photos</span>
        </button>
      </div>
    </section>
  );
}

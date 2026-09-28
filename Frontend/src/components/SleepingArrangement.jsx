import React from 'react';

export default function SleepingArrangement({
  arrangements = [],
  rooms = [],
  photos = [],
}) {
  const sleepingCards =
    arrangements && arrangements.length > 0
      ? arrangements.map((item) => {
          const photo = photos.find((p) => p.id === item.photoId);
          return {
            id: item.id || item.title,
            title: item.title,
            desc: item.description || item.desc || '',
            photo: photo || { src: item.photoSrc, alt: item.title },
          };
        })
      : rooms
          .filter((r) => (r.room || r.title) === 'Bedroom' || (r.room || r.title) === 'Living room 1')
          .map((r) => {
            const photo = photos.find((p) => p.id === r.photoIds?.[0]);
            return {
              id: r.id || r.room,
              title: (r.room || r.title) === 'Living room 1' ? 'Living room' : (r.room || r.title),
              desc: (r.tags && r.tags[0]) || '',
              photo,
            };
          });

  return (
    <section className="sleeping-arrangement-section" aria-label="Sleeping arrangements">
      <h3 className="sleeping-arrangement-heading">Where you'll sleep</h3>
      <div className="sleeping-cards-grid">
        {sleepingCards.map((card) => {
          if (!card.photo) return null;
          return (
            <div key={card.id} className="sleeping-card">
              <div className="sleeping-card-image-wrap">
                <img
                  src={card.photo.src}
                  alt={card.photo.alt}
                  className="sleeping-card-image"
                  loading="lazy"
                />
              </div>
              <p className="sleeping-card-title">{card.title}</p>
              <p className="sleeping-card-desc">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

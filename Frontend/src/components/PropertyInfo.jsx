import React from 'react';

export default function PropertyInfo({
  propertyType = 'Entire serviced apartment in Candolim, India',
  guests = 3,
  bedrooms = 1,
  beds = 1,
  bathrooms = 1,
}) {
  return (
    <div className="property-info-section">
      <h2 className="property-type-title">{propertyType}</h2>
      <p className="property-specs-text">
        {guests} guests · {bedrooms} {bedrooms === 1 ? 'bedroom' : 'bedrooms'} · {beds} {beds === 1 ? 'bed' : 'beds'} · {bathrooms} {bathrooms === 1 ? 'bathroom' : 'bathrooms'}
      </p>
    </div>
  );
}

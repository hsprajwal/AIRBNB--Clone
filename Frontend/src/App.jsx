import React, { useState } from 'react';
import Header from './components/Header';
import StickySubHeader from './components/StickySubHeader';
import PropertyHeading from './components/PropertyHeading';
import PhotoGallery from './components/PhotoGallery';
import PhotoTour from './components/PhotoTour';
import PhotoLightbox from './components/PhotoLightbox';
import PropertyInfo from './components/PropertyInfo';
import GuestFavourite from './components/GuestFavourite';
import HostInfo from './components/HostInfo';
import PropertyHighlights from './components/PropertyHighlights';
import PropertyDescription from './components/PropertyDescription';
import SleepingArrangement from './components/SleepingArrangement';
import Amenities from './components/Amenities';
import CalendarSection from './components/CalendarSection';
import RatingSummaryBanner from './components/RatingSummaryBanner';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import HostProfile from './components/HostProfile';
import ThingsToKnow from './components/ThingsToKnow';
import ReservationCard from './components/ReservationCard';
import NearbyListings from './components/NearbyListings';
import { fetchCompleteListing } from './services/listingService';
import './App.css';

function App() {
  const [listing, setListing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('modal') === 'PHOTO_TOUR_SCROLLABLE';
    }
    return false;
  });
  const [initialTourCategory, setInitialTourCategory] = useState(null);
  const [lightboxPhotoId, setLightboxPhotoId] = useState(null);

  // Fetch listing data, photos, categories, and sleeping arrangements from backend API
  const loadListingData = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchCompleteListing();
      setListing(data);
    } catch (err) {
      console.error('Failed to load listing from backend:', err);
      setError(err.message || 'Unable to connect to backend server on port 5000.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadListingData();
  }, [loadListingData]);

  React.useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setIsPhotoTourOpen(params.get('modal') === 'PHOTO_TOUR_SCROLLABLE');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenPhoto = (photoId) => {
    setLightboxPhotoId(photoId);
  };

  const handleOpenTour = (category = null) => {
    setInitialTourCategory(category);
    setIsPhotoTourOpen(true);
  };

  // Clean Loading State
  if (isLoading) {
    return (
      <div className="airbnb-app">
        <Header />
        <div className="listing-state-container" aria-live="polite">
          <div className="listing-loading-spinner" />
          <p className="listing-state-text">Loading listing details from backend...</p>
        </div>
      </div>
    );
  }

  // Clean Error State
  if (error || !listing) {
    return (
      <div className="airbnb-app">
        <Header />
        <div className="listing-state-container" role="alert">
          <div className="listing-error-icon">⚠️</div>
          <h2 className="listing-error-title">Unable to load listing</h2>
          <p className="listing-state-text">{error || 'Something went wrong while connecting to the backend server.'}</p>
          <button className="listing-retry-btn" onClick={loadListingData}>
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="airbnb-app">
      <Header />
      <StickySubHeader
        price={listing.pricePerStay}
        nights={listing.nights}
        rating={listing.rating}
        reviewCount={listing.reviewCount}
      />
      <main className="listing-main">
        <div className="listing-container">
          <PropertyHeading title={listing.title} />
          <PhotoGallery
            photos={listing.photos}
            onOpenPhoto={handleOpenPhoto}
            onOpenTour={handleOpenTour}
          />

          {/* 2-Column Section: Property Details & Reservation Card */}
          <div className="listing-details-grid">
            {/* Left Column: Property, Host, Rooms, Amenities, Reviews, Location, Host Profile & Policies */}
            <div className="listing-details-col">
              <PropertyInfo
                propertyType={listing.propertyType}
                guests={listing.guests}
                bedrooms={listing.bedrooms}
                beds={listing.beds}
                bathrooms={listing.bathrooms}
              />

              <GuestFavourite
                rating={listing.rating}
                reviewCount={listing.reviewCount}
              />

              <HostInfo
                name={listing.host.name}
                avatarColor={listing.host.avatarColor}
                yearsHosting={listing.host.yearsHosting}
              />

              <PropertyHighlights highlights={listing.propertyHighlights} />

              <PropertyDescription
                description={listing.description}
                fullDescription={listing.fullDescription}
              />

              <SleepingArrangement
                arrangements={listing.sleepingArrangements}
                rooms={listing.rooms}
                photos={listing.photos}
              />

              <Amenities
                amenities={listing.amenities}
                allAmenitiesGrouped={listing.allAmenitiesGrouped}
              />

              <CalendarSection
                nights={listing.nights}
                location={listing.location}
                checkIn={listing.checkIn}
                checkOut={listing.checkOut}
              />
            </div>

            {/* Right Column: Sticky Reservation Card */}
            <aside className="listing-reservation-col" aria-label="Reservation">
              <ReservationCard
                pricePerStay={listing.pricePerStay}
                nights={listing.nights}
                rating={listing.rating}
                reviewCount={listing.reviewCount}
                checkIn={listing.checkIn}
                checkOut={listing.checkOut}
                cancellationDate={listing.cancellationDate}
                guests={listing.guests}
              />
            </aside>
          </div>

          {/* Full-Width Reviews Section */}
          <div className="reviews-unified-container" id="reviews-section">
            <RatingSummaryBanner rating={listing.rating} />

            <ReviewsSection
              rating={listing.rating}
              reviewCount={listing.reviewCount}
              breakdown={listing.overallRatingBreakdown}
              categoryRatings={listing.categoryRatings}
              highlightTags={listing.highlightTags}
              reviews={listing.reviews}
            />
          </div>

          {/* Full-Width Location Section */}
          <LocationSection
            location={listing.location}
            neighbourhoodHighlight={listing.neighbourhoodHighlight}
          />

          {/* Full-Width Host Profile Section */}
          <HostProfile
            name={listing.host.name}
            avatarColor={listing.host.avatarColor}
            reviewCount={listing.host.reviewCount}
            rating={listing.host.rating}
            yearsHosting={listing.host.yearsHosting}
            bornDecade={listing.host.bornDecade}
            responseRate={listing.host.responseRate}
            responseTime={listing.host.responseTime}
            coHosts={listing.coHosts}
          />

          {/* Full-Width Things To Know Section */}
          <ThingsToKnow thingsToKnow={listing.thingsToKnow} />

          {/* Full-Width Section Below 2-Column Grid: More Stays Nearby */}
          <NearbyListings listings={listing.nearbyListings} />
        </div>
      </main>

      {/* Full-Screen Dedicated Photo Tour View */}
      {isPhotoTourOpen && (
        <PhotoTour
          photos={listing.photos}
          rooms={listing.rooms}
          initialCategory={initialTourCategory}
          onClose={() => setIsPhotoTourOpen(false)}
          onSelectPhoto={handleOpenPhoto}
        />
      )}

      {/* Full-Screen Lightbox Viewer */}
      {lightboxPhotoId != null && (
        <PhotoLightbox
          isOpen={true}
          photos={listing.photos}
          rooms={listing.rooms}
          initialPhotoId={lightboxPhotoId}
          onClose={() => setLightboxPhotoId(null)}
        />
      )}
    </div>
  );
}

export default App;
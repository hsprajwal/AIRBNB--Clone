/**
 * Listing Service - API Layer
 * Handles communication between React frontend and Express backend.
 */

// Vercel uses VITE_API_URL.
// Local development falls back to localhost.
const API_BASE_URL = (
  import.meta.env.VITE_API_URL || 'http://localhost:5000'
).replace(/\/$/, '');

const API_PREFIX = `${API_BASE_URL}/api`;

/**
 * Helper to execute API requests.
 */
async function fetchEndpoint(endpoint) {
  const url = `${API_PREFIX}${endpoint}`;

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(
      `Backend request to ${endpoint} failed with status: ${response.status}`
    );
  }

  return await response.json();
}

/**
 * Fetch listing property details.
 */
export async function fetchListing() {
  return await fetchEndpoint('/listing');
}

/**
 * Fetch gallery photos.
 */
export async function fetchPhotos() {
  return await fetchEndpoint('/listing/photos');
}

/**
 * Fetch room and photo categories.
 */
export async function fetchCategories() {
  return await fetchEndpoint('/listing/categories');
}

/**
 * Fetch sleeping arrangements.
 */
export async function fetchSleepingArrangements() {
  return await fetchEndpoint('/listing/sleeping-arrangements');
}

/**
 * Fetch complete listing data.
 */
export async function fetchCompleteListing() {
  const [
    listing,
    photos,
    categories,
    sleepingArrangements,
  ] = await Promise.all([
    fetchListing(),
    fetchPhotos(),
    fetchCategories(),
    fetchSleepingArrangements(),
  ]);

  return {
    ...listing,
    photos: Array.isArray(photos) ? photos : listing.photos,
    rooms: Array.isArray(categories) ? categories : listing.rooms,
    photoCategories: Array.isArray(categories)
      ? categories
      : listing.photoCategories,
    sleepingArrangements: Array.isArray(sleepingArrangements)
      ? sleepingArrangements
      : listing.sleepingArrangements,
  };
}
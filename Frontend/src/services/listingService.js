/**
 * Listing Service - API Layer
 * Handles communication between React frontend and Express backend.
 *
 * Local development:
 *   http://localhost:5000/api
 *
 * Production:
 *   Uses VITE_API_URL from Vercel environment variables.
 */

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000';

const API_ROOT = `${API_BASE_URL}/api`;

/**
 * Helper to execute fetch with error handling.
 */
async function fetchEndpoint(endpoint) {
  let response;

  try {
    response = await fetch(`${API_ROOT}${endpoint}`, {
      headers: {
        Accept: 'application/json',
      },
    });
  } catch (error) {
    throw new Error(
      `Network error connecting to backend: ${error.message}`
    );
  }

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
 * Fetch room & photo categories.
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
 * Fetch complete listing data by fetching listing details,
 * photos, categories, and sleeping arrangements.
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
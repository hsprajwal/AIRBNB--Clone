/**
 * Listing Service - API Layer
 * Handles communication between React frontend and Express backend on port 5000.
 * Verifies CORS support and supports all resource endpoints.
 */

const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Helper to execute fetch with error handling and proxy fallback
 */
async function fetchEndpoint(endpoint) {
  let response;
  try {
    // Direct call to Express backend on port 5000 (verifies CORS)
    response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Accept': 'application/json',
      },
    });
  } catch (directError) {
    // Fallback to Vite proxy /api in case direct port is blocked
    try {
      response = await fetch(`/api${endpoint}`, {
        headers: {
          'Accept': 'application/json',
        },
      });
    } catch (proxyError) {
      throw new Error(`Network error connecting to backend: ${directError.message}`);
    }
  }

  if (!response.ok) {
    throw new Error(`Backend request to ${endpoint} failed with status: ${response.status}`);
  }

  return await response.json();
}

/**
 * Fetch listing property details
 */
export async function fetchListing() {
  return await fetchEndpoint('/listing');
}

/**
 * Fetch gallery photos
 */
export async function fetchPhotos() {
  return await fetchEndpoint('/listing/photos');
}

/**
 * Fetch room & photo categories
 */
export async function fetchCategories() {
  return await fetchEndpoint('/listing/categories');
}

/**
 * Fetch sleeping arrangements
 */
export async function fetchSleepingArrangements() {
  return await fetchEndpoint('/listing/sleeping-arrangements');
}

/**
 * Fetch complete listing data by fetching listing details, photos, categories,
 * and sleeping arrangements from the Express API endpoints.
 */
export async function fetchCompleteListing() {
  const [listing, photos, categories, sleepingArrangements] = await Promise.all([
    fetchListing(),
    fetchPhotos(),
    fetchCategories(),
    fetchSleepingArrangements(),
  ]);

  return {
    ...listing,
    photos: Array.isArray(photos) ? photos : listing.photos,
    rooms: Array.isArray(categories) ? categories : listing.rooms,
    photoCategories: Array.isArray(categories) ? categories : listing.photoCategories,
    sleepingArrangements: Array.isArray(sleepingArrangements) ? sleepingArrangements : listing.sleepingArrangements,
  };
}

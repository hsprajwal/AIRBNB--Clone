/**
 * Listing Service - API Layer
 *
 * Production:
 * https://airbnb-clone-backend-aum7.onrender.com
 *
 * Local development:
 * http://localhost:5000
 */

const PROD_API_URL = 'https://airbnb-clone-backend-aum7.onrender.com';
const LOCAL_API_URL = 'http://localhost:5000';

/**
 * Get the API base URL.
 *
 * Vite sets import.meta.env.PROD to true
 * when creating the production build.
 */
export function getApiBaseUrl() {
  if (import.meta.env.PROD) {
    return `${PROD_API_URL}/api`;
  }

  return `${LOCAL_API_URL}/api`;
}

export const API_BASE_URL = getApiBaseUrl();

/**
 * Execute an API request.
 */
async function fetchEndpoint(endpoint) {
  const url = `${API_BASE_URL}${endpoint}`;

  console.log('API Request:', url);

  const response = await fetch(url, {
    method: 'GET',
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
 * Fetch photo tour categories.
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
 * Fetch all listing data.
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

    photos: Array.isArray(photos)
      ? photos
      : listing.photos,

    rooms: Array.isArray(categories)
      ? categories
      : listing.rooms,

    photoCategories: Array.isArray(categories)
      ? categories
      : listing.photoCategories,

    sleepingArrangements: Array.isArray(sleepingArrangements)
      ? sleepingArrangements
      : listing.sleepingArrangements,
  };
}
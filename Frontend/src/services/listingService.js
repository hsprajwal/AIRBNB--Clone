/**
 * Listing Service - API Layer
 * Connects to the Express backend API.
 * Uses https://airbnb-clone-backend-aum7.onrender.com in production
 * and http://localhost:5000 during local development.
 */

const PROD_API_URL = 'https://airbnb-clone-backend-aum7.onrender.com';
const LOCAL_API_URL = 'http://localhost:5000';

// Resolve API base URL from Vite environment variable or mode
const envBase = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL;
const rawBase = envBase || (import.meta.env.PROD ? PROD_API_URL : LOCAL_API_URL);

// Normalize: remove trailing slash, ensure '/api' suffix is present
const cleanBase = rawBase.replace(/\/+$/, '');
const API_BASE_URL = cleanBase.endsWith('/api') ? cleanBase : `${cleanBase}/api`;

/**
 * Helper to execute API requests to the resolved API_BASE_URL
 */
async function fetchEndpoint(endpoint) {
  const url = `${API_BASE_URL}${endpoint}`;
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
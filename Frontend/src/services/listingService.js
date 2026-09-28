/**
 * Listing Service - API Layer
 * Connects to the Express backend API.
 * Uses https://airbnb-clone-backend-aum7.onrender.com in production
 * and http://localhost:5000 during local development.
 */

const PROD_API_URL = 'https://airbnb-clone-backend-aum7.onrender.com';
const LOCAL_API_URL = 'http://localhost:5000';

/**
 * Resolves the API base URL.
 * - In production: Permanently uses PROD_API_URL. Any env variable containing
 *   localhost or 127.0.0.1 is strictly rejected.
 * - In local development: Uses LOCAL_API_URL (http://localhost:5000).
 */
export function getApiBaseUrl() {
  const isBrowser = typeof window !== 'undefined';
  const hostname = isBrowser ? (window.location.hostname || '') : '';
  const isLocalhost = (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === '[::1]' ||
    hostname.endsWith('.local')
  );

  // Production condition: Vite production mode OR deployed non-localhost browser hostname
  const isProduction = Boolean(import.meta.env.PROD) || (isBrowser && !isLocalhost && hostname !== '');

  if (isProduction) {
    const rawEnv = (import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || '').trim();
    // Strictly disallow localhost or 127.0.0.1 in production
    if (
      rawEnv &&
      !rawEnv.includes('localhost') &&
      !rawEnv.includes('127.0.0.1') &&
      (rawEnv.startsWith('http://') || rawEnv.startsWith('https://'))
    ) {
      const clean = rawEnv.replace(/\/+$/, '');
      return clean.endsWith('/api') ? clean : `${clean}/api`;
    }
    // Default permanently to Render production API URL
    return `${PROD_API_URL}/api`;
  }

  // Local development mode only
  const rawEnv = (import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || LOCAL_API_URL).trim();
  const clean = (rawEnv || LOCAL_API_URL).replace(/\/+$/, '');
  return clean.endsWith('/api') ? clean : `${clean}/api`;
}

export const API_BASE_URL = getApiBaseUrl();

/**
 * Helper to execute API requests to the resolved API_BASE_URL
 */
async function fetchEndpoint(endpoint) {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}${endpoint}`;
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
import express from 'express';
import cors from 'cors';
import {
  propertyDetails,
  galleryPhotos,
  photoCategories,
  sleepingArrangements,
} from './data/listingData.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend requests
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

/**
 * GET /api/listing
 * Returns complete listing details, gallery photos, room categories, and sleeping arrangements.
 */
app.get('/api/listing', (req, res) => {
  res.json(propertyDetails);
});

/**
 * GET /api/listing/photos
 * Returns gallery photos collection.
 */
app.get('/api/listing/photos', (req, res) => {
  res.json(galleryPhotos);
});

/**
 * GET /api/listing/categories
 * Returns photo tour categories.
 */
app.get('/api/listing/categories', (req, res) => {
  res.json(photoCategories);
});

/**
 * GET /api/listing/sleeping-arrangements
 * Returns sleeping arrangements.
 */
app.get('/api/listing/sleeping-arrangements', (req, res) => {
  res.json(sleepingArrangements);
});

// Root informational endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Airbnb Clone Listing API',
    endpoints: {
      listing: '/api/listing',
      photos: '/api/listing/photos',
      categories: '/api/listing/categories',
      sleepingArrangements: '/api/listing/sleeping-arrangements',
      health: '/api/health',
    },
  });
});

app.listen(PORT, () => {
  console.log(`Airbnb Clone backend server running at http://localhost:${PORT}`);
});

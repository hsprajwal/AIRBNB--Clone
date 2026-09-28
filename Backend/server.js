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

// --------------------------------------------------
// CORS
// --------------------------------------------------
// The API is public and does not use cookies/authentication,
// so allow requests from the deployed frontend and other clients.
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  })
);

app.use(express.json());

// --------------------------------------------------
// HEALTH CHECK
// --------------------------------------------------

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

// --------------------------------------------------
// LISTING
// --------------------------------------------------

app.get('/api/listing', (req, res) => {
  res.json(propertyDetails);
});

// --------------------------------------------------
// PHOTOS
// --------------------------------------------------

app.get('/api/listing/photos', (req, res) => {
  res.json(galleryPhotos);
});

// --------------------------------------------------
// PHOTO CATEGORIES
// --------------------------------------------------

app.get('/api/listing/categories', (req, res) => {
  res.json(photoCategories);
});

// --------------------------------------------------
// SLEEPING ARRANGEMENTS
// --------------------------------------------------

app.get('/api/listing/sleeping-arrangements', (req, res) => {
  res.json(sleepingArrangements);
});

// --------------------------------------------------
// ROOT
// --------------------------------------------------

app.get('/', (req, res) => {
  res.json({
    name: 'Airbnb Clone Listing API',
    status: 'running',
    endpoints: {
      listing: '/api/listing',
      photos: '/api/listing/photos',
      categories: '/api/listing/categories',
      sleepingArrangements: '/api/listing/sleeping-arrangements',
      health: '/api/health',
    },
  });
});

// --------------------------------------------------
// START SERVER
// --------------------------------------------------

app.listen(PORT, () => {
  console.log(
    `Airbnb Clone backend server running on port ${PORT}`
  );
});
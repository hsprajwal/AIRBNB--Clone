// Simple, reusable listing and photo data structure for property details, gallery photos, and room categories

/**
 * Gallery photos catalog: Each photo contains unique ID, category relation,
 * display title/alt, image source URL, and hero designation.
 */
export const galleryPhotos = [
  {
    id: 1000,
    categoryId: 'living-room-1',
    categoryTitle: 'Living room 1',
    room: 'Living room 1',
    title: 'Living room 1 main lounge',
    alt: 'Living room 1 photo',
    src: 'https://images.pexels.com/photos/276746/pexels-photo-276746.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: true,
  },
  {
    id: 1001,
    categoryId: 'living-room-1',
    categoryTitle: 'Living room 1',
    room: 'Living room 1',
    title: 'Living room 1 bright white interior view',
    alt: 'Living room 1 photo',
    src: 'https://images.pexels.com/photos/29012619/pexels-photo-29012619/free-photo-of-bright-modern-living-room-with-soft-white-interiors.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1002,
    categoryId: 'living-room-1',
    categoryTitle: 'Living room 1',
    room: 'Living room 1',
    title: 'Living room 1 cozy navy sofa',
    alt: 'Living room 1 photo',
    src: 'https://images.pexels.com/photos/30386991/pexels-photo-30386991/free-photo-of-modern-living-room-with-cozy-navy-sofa.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1003,
    categoryId: 'living-room-2',
    categoryTitle: 'Living room 2',
    room: 'Living room 2',
    title: 'Living room 2 exposed brick lounge and large window',
    alt: 'Living room 2 photo',
    src: 'https://images.pexels.com/photos/33537442/pexels-photo-33537442/free-photo-of-cozy-brick-walled-living-room-with-large-window.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1004,
    categoryId: 'living-room-2',
    categoryTitle: 'Living room 2',
    room: 'Living room 2',
    title: 'Living room 2 art decor seating area',
    alt: 'Living room 2 photo',
    src: 'https://images.pexels.com/photos/28542161/pexels-photo-28542161/free-photo-of-cozy-living-room-with-modern-art-decor.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1005,
    categoryId: 'full-kitchen',
    categoryTitle: 'Full kitchen',
    room: 'Full kitchen',
    title: 'Full kitchen white cabinets and sink',
    alt: 'Full kitchen photo',
    src: 'https://images.pexels.com/photos/19836790/pexels-photo-19836790/free-photo-of-view-of-a-kitchen-with-white-cabinets-and-a-silver-sink.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1006,
    categoryId: 'full-kitchen',
    categoryTitle: 'Full kitchen',
    room: 'Full kitchen',
    title: 'Full kitchen modern oven and counter space',
    alt: 'Full kitchen photo',
    src: 'https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1007,
    categoryId: 'bedroom',
    categoryTitle: 'Bedroom',
    room: 'Bedroom',
    title: 'Bedroom blue accents and natural light',
    alt: 'Bedroom photo',
    src: 'https://images.pexels.com/photos/34574606/pexels-photo-34574606/free-photo-of-elegant-bedroom-interior-with-blue-accents-and-natural-light.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1008,
    categoryId: 'bedroom',
    categoryTitle: 'Bedroom',
    room: 'Bedroom',
    title: 'Bedroom double bed and modern headboard',
    alt: 'Bedroom photo',
    src: 'https://images.pexels.com/photos/30767888/pexels-photo-30767888/free-photo-of-cozy-modern-bedroom-in-santa-teresa-brazil.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1009,
    categoryId: 'bedroom',
    categoryTitle: 'Bedroom',
    room: 'Bedroom',
    title: 'Bedroom rustic wooden bed and warm lighting',
    alt: 'Bedroom photo',
    src: 'https://images.pexels.com/photos/15456211/pexels-photo-15456211/free-photo-of-rustic-pretty-bedroom.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1010,
    categoryId: 'full-bathroom',
    categoryTitle: 'Full bathroom',
    room: 'Full bathroom',
    title: 'Full bathroom walk-in shower and stone tiling',
    alt: 'Full bathroom photo',
    src: 'https://images.pexels.com/photos/6957081/pexels-photo-6957081.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1011,
    categoryId: 'full-bathroom',
    categoryTitle: 'Full bathroom',
    room: 'Full bathroom',
    title: 'Full bathroom illuminated vanity mirror and hot water amenities',
    alt: 'Full bathroom photo',
    src: 'https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1012,
    categoryId: 'gym',
    categoryTitle: 'Gym',
    room: 'Gym',
    title: 'Gym treadmill and workout area',
    alt: 'Gym photo',
    src: 'https://images.pexels.com/photos/11593505/pexels-photo-11593505.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1013,
    categoryId: 'gym',
    categoryTitle: 'Gym',
    room: 'Gym',
    title: 'Gym free weights and fitness space',
    alt: 'Gym photo',
    src: 'https://images.pexels.com/photos/27195989/pexels-photo-27195989/free-photo-of-a-gym-room-with-exercise-equipment-and-a-ceiling-light.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1014,
    categoryId: 'exterior',
    categoryTitle: 'Exterior',
    room: 'Exterior',
    title: 'Building exterior view with private balconies',
    alt: 'Exterior photo',
    src: 'https://images.pexels.com/photos/18153132/pexels-photo-18153132/free-photo-of-apartments-with-balconies.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1015,
    categoryId: 'exterior',
    categoryTitle: 'Exterior',
    room: 'Exterior',
    title: 'Urban modern building architecture under blue sky',
    alt: 'Exterior photo',
    src: 'https://images.pexels.com/photos/37301680/pexels-photo-37301680/free-photo-of-modern-urban-building-architecture-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1016,
    categoryId: 'pool',
    categoryTitle: 'Pool',
    room: 'Pool',
    title: 'Rooftop pool crystal clear water and sun loungers',
    alt: 'Pool photo',
    src: 'https://images.pexels.com/photos/15088502/pexels-photo-15088502/free-photo-of-a-rooftop-swimming-pool.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1017,
    categoryId: 'pool',
    categoryTitle: 'Pool',
    room: 'Pool',
    title: 'Aerial view of rooftop pool and cityscape',
    alt: 'Pool photo',
    src: 'https://images.pexels.com/photos/33819401/pexels-photo-33819401/free-photo-of-aerial-view-of-rooftop-pool-and-surrounding-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1018,
    categoryId: 'additional-photos',
    categoryTitle: 'Additional photos',
    room: 'Additional photos',
    title: 'Additional cozy living room setting',
    alt: 'Additional photos photo',
    src: 'https://images.pexels.com/photos/6980724/pexels-photo-6980724.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1019,
    categoryId: 'additional-photos',
    categoryTitle: 'Additional photos',
    room: 'Additional photos',
    title: 'Additional bright interior view',
    alt: 'Additional photos photo',
    src: 'https://images.pexels.com/photos/6899357/pexels-photo-6899357.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
  {
    id: 1020,
    categoryId: 'additional-photos',
    categoryTitle: 'Additional photos',
    room: 'Additional photos',
    title: 'Additional apartment corner details',
    alt: 'Additional photos photo',
    src: 'https://images.pexels.com/photos/4488754/pexels-photo-4488754.jpeg?auto=compress&cs=tinysrgb&w=1200',
    isHero: false,
  },
];

/**
 * Photo categories structure:
 * Holds category titles, exact amenities strings, gallery layout composition,
 * photo relationships, and thumbnails.
 */
export const photoCategories = [
  {
    id: 'living-room-1',
    title: 'Living room 1',
    room: 'Living room 1',
    amenities: 'Sofa · Air conditioning · Ceiling fan · TV',
    amenitiesText: 'Sofa · Air conditioning · Ceiling fan · TV',
    layout: 'hero_then_pair', // 1 large hero (3:2) + 2 paired images (4:3)
    tags: ['Sofa', 'Air conditioning', 'Ceiling fan', 'TV'],
    photoIds: [1000, 1001, 1002],
    thumbnailUrl: 'https://images.pexels.com/photos/276746/pexels-photo-276746.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'living-room-2',
    title: 'Living room 2',
    room: 'Living room 2',
    amenities: 'Ceiling fan · Hot tub',
    amenitiesText: 'Ceiling fan · Hot tub',
    layout: 'two_large', // 2 large hero images stacked (3:2)
    tags: ['Lounge seating', 'Reading nook'],
    photoIds: [1003, 1004],
    thumbnailUrl: 'https://images.pexels.com/photos/33537442/pexels-photo-33537442/free-photo-of-cozy-brick-walled-living-room-with-large-window.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'full-kitchen',
    title: 'Full kitchen',
    room: 'Full kitchen',
    amenities: 'Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery',
    amenitiesText: 'Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery',
    layout: 'pair', // 1 pair of 2 images side-by-side (4:3)
    tags: ['Refrigerator', 'Stove', 'Cookware'],
    photoIds: [1005, 1006],
    thumbnailUrl: 'https://images.pexels.com/photos/19836790/pexels-photo-19836790/free-photo-of-view-of-a-kitchen-with-white-cabinets-and-a-silver-sink.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    room: 'Bedroom',
    amenities: 'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds',
    amenitiesText: 'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds',
    layout: 'hero_then_pair', // 1 large hero (3:2) + 2 paired images (4:3)
    tags: ['1 double bed', 'Wardrobe', 'Blackout curtains'],
    photoIds: [1007, 1008, 1009],
    thumbnailUrl: 'https://images.pexels.com/photos/34574606/pexels-photo-34574606/free-photo-of-elegant-bedroom-interior-with-blue-accents-and-natural-light.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'full-bathroom',
    title: 'Full bathroom',
    room: 'Full bathroom',
    amenities: 'Hot water · Hair dryer · Shower',
    amenitiesText: 'Hot water · Hair dryer · Shower',
    layout: 'pair', // 1 pair of 2 images side-by-side (4:3)
    tags: ['Hot water', 'Hair dryer', 'Shower'],
    photoIds: [1010, 1011],
    thumbnailUrl: 'https://images.pexels.com/photos/6957081/pexels-photo-6957081.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'gym',
    title: 'Gym',
    room: 'Gym',
    amenities: 'Free weights · Treadmill',
    amenitiesText: 'Free weights · Treadmill',
    layout: 'pair', // 1 pair of 2 images side-by-side (4:3)
    tags: ['Free weights', 'Treadmill'],
    photoIds: [1012, 1013],
    thumbnailUrl: 'https://images.pexels.com/photos/11593505/pexels-photo-11593505.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'exterior',
    title: 'Exterior',
    room: 'Exterior',
    amenities: 'Building view · Parking',
    amenitiesText: 'Building view · Parking',
    layout: 'two_large', // 2 large hero images stacked (3:2)
    tags: ['Building view', 'Parking'],
    photoIds: [1014, 1015],
    thumbnailUrl: 'https://images.pexels.com/photos/18153132/pexels-photo-18153132/free-photo-of-apartments-with-balconies.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'pool',
    title: 'Pool',
    room: 'Pool',
    amenities: 'Rooftop pool · Loungers',
    amenitiesText: 'Rooftop pool · Loungers',
    layout: 'two_large', // 2 large hero images stacked (3:2)
    tags: ['Rooftop pool', 'Loungers'],
    photoIds: [1016, 1017],
    thumbnailUrl: 'https://images.pexels.com/photos/15088502/pexels-photo-15088502/free-photo-of-a-rooftop-swimming-pool.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'additional-photos',
    title: 'Additional photos',
    room: 'Additional photos',
    amenities: '',
    amenitiesText: '',
    layout: 'hero_then_pair', // 1 large hero (3:2) + 2 paired images (4:3)
    tags: [],
    photoIds: [1018, 1019, 1020],
    thumbnailUrl: 'https://images.pexels.com/photos/6980724/pexels-photo-6980724.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

/**
 * Dedicated sleeping arrangements structure:
 * Decoupled from ad-hoc photo searching in UI components.
 */
export const sleepingArrangements = [
  {
    id: 'bedroom',
    title: 'Bedroom',
    description: '1 double bed',
    desc: '1 double bed',
    roomName: 'Bedroom',
    photoId: 1008,
  },
  {
    id: 'living-room',
    title: 'Living room',
    description: '1 sofa',
    desc: '1 sofa',
    roomName: 'Living room 1',
    photoId: 1000,
  },
];

/**
 * Complete Property Details & Listing Data
 */
export const propertyDetails = {
  id: 'mirashya-ug10-candolim',
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  propertyType: 'Entire serviced apartment in Candolim, India',
  location: 'Candolim, Goa, India',
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviewCount: 19,
  pricing: {
    pricePerStay: 28499,
    nights: 5,
    checkIn: '2026-10-18',
    checkOut: '2026-10-23',
    cancellationDate: '17 October',
  },
  pricePerStay: 28499,
  nights: 5,
  checkIn: '2026-10-18',
  checkOut: '2026-10-23',
  cancellationDate: '17 October',
  propertyHighlights: [
    {
      icon: 'picnic',
      title: 'Outdoor entertainment',
      description: 'The pool and alfresco dining are great for summer trips.',
    },
    {
      icon: 'snowflake',
      title: 'Designed for staying cool',
      description: 'Beat the heat with the A/C and ceiling fan.',
    },
    {
      icon: 'door',
      title: 'Self check-in',
      description: 'You can check in with the building staff.',
    },
  ],
  description:
    '🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! 💥 Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it\'s',
  fullDescription:
    '🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! 💥 Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it\'s the ideal tropical getaway for couples, solo travelers, and small families. Unwind in the lush garden surroundings or take a refreshing dip in the common swimming pool.',
  host: {
    name: 'Mirashya Homes',
    avatarColor: '#0b3d2e',
    yearsHosting: 2,
    reviewCount: 1463,
    rating: 4.68,
    bornDecade: '80s',
    responseRate: 100,
    responseTime: 'an hour',
  },
  coHosts: [
    {
      name: 'Sharath',
      avatarUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Aman Dev Pahwa',
      avatarUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Maria Karen Priyanka',
      avatarUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Simran',
      avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Pallavi',
      avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Sanyukta',
      avatarUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Shruti',
      avatarColor: '#fce4ec',
      textColor: '#c2185b',
    },
    {
      name: 'Amisha',
      avatarColor: '#e3f2fd',
      textColor: '#1976d2',
    },
  ],
  amenities: [
    { label: 'Kitchen', icon: 'utensils', available: true },
    { label: 'Wifi', icon: 'wifi', available: true },
    { label: 'Dedicated workspace', icon: 'desk', available: true },
    { label: 'Free parking on premises', icon: 'car', available: true },
    { label: 'Pool', icon: 'pool', available: true },
    { label: 'Hot tub', icon: 'hot-tub', available: true },
    { label: 'Pets allowed', icon: 'paw', available: true },
    { label: 'Exterior security cameras on property', icon: 'camera', available: true },
    { label: 'Carbon monoxide alarm', icon: 'no-alarm', available: false },
    { label: 'Smoke alarm', icon: 'no-alarm', available: false },
  ],
  allAmenitiesGrouped: [
    {
      category: 'Bathroom',
      items: [
        { label: 'Hair dryer', icon: 'hair-dryer', available: true },
        { label: 'Cleaning products', icon: 'cleaning', available: true },
        { label: 'Shampoo', icon: 'shampoo', available: true },
        { label: 'Conditioner', icon: 'conditioner', available: true },
        { label: 'Body soap', icon: 'body-soap', available: true },
        { label: 'Hot water', icon: 'hot-water', available: true },
        { label: 'Shower gel', icon: 'shower', available: true },
      ],
    },
    {
      category: 'Bedroom and laundry',
      items: [
        { label: 'Essentials', icon: 'layers', available: true },
        { label: 'Hangers', icon: 'shirt', available: true },
        { label: 'Bed linen', icon: 'bed', available: true },
        { label: 'Extra pillows and blankets', icon: 'bed-double', available: true },
        { label: 'Iron', icon: 'iron', available: true },
        { label: 'Clothes drying rack', icon: 'drying-rack', available: true },
        { label: 'Clothes storage: wardrobe', icon: 'door', available: true },
      ],
    },
    {
      category: 'Entertainment',
      items: [{ label: 'TV', icon: 'tv', available: true }],
    },
    {
      category: 'Family',
      items: [{ label: 'Cot', icon: 'cot', available: true }],
    },
    {
      category: 'Heating and cooling',
      items: [
        { label: 'Air conditioning', icon: 'snowflake', available: true },
        { label: 'Ceiling fan', icon: 'fan', available: true },
      ],
    },
    {
      category: 'Home safety',
      items: [
        { label: 'Exterior security cameras on property', icon: 'camera', available: true },
        { label: 'Carbon monoxide alarm', icon: 'no-co-alarm', available: false },
        { label: 'Smoke alarm', icon: 'no-smoke-alarm', available: false },
        { label: 'Fire extinguisher', icon: 'fire-extinguisher', available: true },
        { label: 'First aid kit', icon: 'first-aid', available: true },
      ],
    },
    {
      category: 'Internet and office',
      items: [
        { label: 'Wifi', icon: 'wifi', available: true },
        { label: 'Dedicated workspace', icon: 'desk', available: true },
      ],
    },
    {
      category: 'Kitchen and dining',
      items: [
        { label: 'Kitchen', icon: 'utensils', available: true },
        { label: 'Fridge', icon: 'fridge', available: true },
        { label: 'Freezer', icon: 'freezer', available: true },
        { label: 'Microwave', icon: 'microwave', available: true },
        { label: 'Cooking basics', icon: 'cooking-pot', available: true },
        { label: 'Crockery and cutlery', icon: 'crockery', available: true },
        { label: 'Kettle', icon: 'kettle', available: true },
        { label: 'Coffee', icon: 'coffee', available: true },
        { label: 'Wine glasses', icon: 'wine', available: true },
        { label: 'Dining table', icon: 'dining-table', available: true },
      ],
    },
    {
      category: 'Location features',
      items: [
        { label: 'Resort access', icon: 'compass', available: true },
        { label: 'Private entrance', icon: 'door', available: true },
      ],
    },
    {
      category: 'Outdoor',
      items: [
        { label: 'Patio or balcony', icon: 'sun', available: true },
        { label: 'Outdoor furniture', icon: 'picnic', available: true },
        { label: 'Outdoor dining area', icon: 'utensils', available: true },
      ],
    },
    {
      category: 'Parking and facilities',
      items: [
        { label: 'Free parking on premises', icon: 'car', available: true },
        { label: 'Free street parking', icon: 'car', available: true },
        { label: 'Pool', icon: 'pool', available: true },
        { label: 'Hot tub', icon: 'hot-tub', available: true },
        { label: 'Lift', icon: 'building', available: true },
      ],
    },
    {
      category: 'Services',
      items: [
        { label: 'Pets allowed', icon: 'paw', available: true },
        { label: 'Luggage drop-off allowed', icon: 'luggage', available: true },
        { label: 'Long-term stays allowed', icon: 'calendar', available: true },
        { label: 'Self check-in', icon: 'key', available: true },
        { label: 'Building staff', icon: 'building', available: true },
      ],
    },
  ],
  sleepingArrangements,
  photoCategories,
  rooms: photoCategories, // Alias for backward compatibility
  photos: galleryPhotos, // Alias for backward compatibility
  overallRatingBreakdown: [
    { stars: 5, percent: 92 },
    { stars: 4, percent: 8 },
    { stars: 3, percent: 0 },
    { stars: 2, percent: 0 },
    { stars: 1, percent: 0 },
  ],
  categoryRatings: [
    { label: 'Cleanliness', value: 5, icon: 'spray' },
    { label: 'Accuracy', value: 5, icon: 'check-circle' },
    { label: 'Check-in', value: 5, icon: 'key' },
    { label: 'Communication', value: 5, icon: 'message' },
    { label: 'Location', value: 4.8, icon: 'map' },
    { label: 'Value', value: 4.8, icon: 'tag' },
  ],
  highlightTags: [
    { emoji: '🛋️', label: 'Comfort', count: 6 },
    { emoji: '✅', label: 'Accuracy', count: 5 },
    { emoji: '🛁', label: 'Hot tub', count: 5 },
    { emoji: '🎁', label: 'Condition', count: 4 },
    { emoji: '🤝', label: 'Hospitality', count: 8 },
    { emoji: '🧼', label: 'Cleanliness', count: 4 },
    { emoji: '🛍️', label: 'Amenities', count: 2 },
  ],
  reviews: [
    {
      id: 'amit',
      author: 'Amit',
      avatarColor: '#e08a3e',
      membership: '2 months on Airbnb',
      rating: 5,
      date: '1 week ago',
      text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
    },
    {
      id: 'aheesh',
      author: 'Aheesh',
      avatarColor: '#3e6de0',
      avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      membership: '3 years on Airbnb',
      rating: 5,
      date: '2 weeks ago',
      text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
    },
    {
      id: 'samiksha',
      author: 'Samiksha',
      avatarColor: '#d63e8a',
      avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      membership: '8 months on Airbnb',
      rating: 5,
      date: 'May 2026',
      text: 'the host nitish was really great help',
    },
    {
      id: 'vedant',
      author: 'Vedant',
      avatarColor: '#9b6de0',
      membership: '4 years on Airbnb',
      rating: 5,
      date: 'May 2026',
      text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....',
    },
    {
      id: 'vaibhav',
      author: 'Vaibhav S',
      avatarColor: '#e0433e',
      membership: '3 years on Airbnb',
      rating: 5,
      date: 'May 2026',
      text: 'Great great experience living out there, can\'t expect more, will always look for it in the future and will recommend my friends too.',
    },
    {
      id: 'mohd',
      author: 'Mohd',
      avatarColor: '#3ee0c7',
      membership: '5 years on Airbnb',
      rating: 5,
      date: 'May 2026',
      text: 'Great place. Exactly as described in the listing.',
    },
  ],
  neighbourhoodHighlight:
    'Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.',
  thingsToKnow: {
    cancellationPolicy:
      'Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.',
    houseRules: [
      'Check-in after 2:00 pm',
      'Checkout before 11:00 am',
      '3 guests maximum',
    ],
    safety: [
      'Carbon monoxide alarm not reported',
      'Smoke alarm not reported',
      'Exterior security cameras on property',
    ],
  },
  nearbyListings: [
    {
      id: 'studio-view',
      title: 'Beautiful Studio with a view to die for',
      price: 24999,
      rating: 4.92,
      photoSrc:
        'https://images.pexels.com/photos/30386991/pexels-photo-30386991/free-photo-of-modern-living-room-with-cozy-navy-sofa.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 'naqab-pool',
      title: 'NAQAB - 1bhk with private pool',
      price: 42218,
      rating: 4.95,
      photoSrc:
        'https://images.pexels.com/photos/15088502/pexels-photo-15088502/free-photo-of-a-rooftop-swimming-pool.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 'greentique-flat',
      title: 'Greentique Luxury Flat with plunge pool',
      price: 38450,
      rating: 4.9,
      photoSrc:
        'https://images.pexels.com/photos/28542161/pexels-photo-28542161/free-photo-of-cozy-living-room-with-modern-art-decor.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 'tropical-studio',
      title: 'The Tropical Studio | 5 mins to Beach',
      price: 19999,
      rating: 4.87,
      photoSrc:
        'https://images.pexels.com/photos/34574606/pexels-photo-34574606/free-photo-of-elegant-bedroom-interior-with-blue-accents-and-natural-light.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 'casa-bella',
      title: 'Luxury Casa Bella 1BHK with plunge pool',
      price: 31200,
      rating: 4.93,
      photoSrc:
        'https://images.pexels.com/photos/33819401/pexels-photo-33819401/free-photo-of-aerial-view-of-rooftop-pool-and-surrounding-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ],
};

// Backwards-compatible aliases
export const listingData = propertyDetails;
export const listingImages = galleryPhotos;
export default propertyDetails;

import React from 'react';
import {
  Utensils,
  Wifi,
  Car,
  Waves,
  Bath,
  PawPrint,
  Tv,
  Snowflake,
  Fan,
  Cctv,
  Layers,
  Shirt,
  Bed,
  BedDouble,
  DoorClosed,
  Compass,
  Sun,
  Building,
  Building2,
  Luggage,
  Calendar,
  KeyRound,
  Flame,
} from 'lucide-react';

export default function AmenityIcon({ icon, available = true, size = 24 }) {
  const strokeColor = available ? '#222222' : '#717171';
  const strokeWidth = 1.5;

  // Custom SVGs matching Airbnb reference screenshots precisely
  switch (icon) {
    case 'cot':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 6v14" />
          <path d="M21 6v14" />
          <path d="M3 10h18" />
          <path d="M3 16h18" />
          <line x1="6" y1="10" x2="6" y2="16" />
          <line x1="8.5" y1="10" x2="8.5" y2="16" />
          <line x1="11" y1="10" x2="11" y2="16" />
          <line x1="13.5" y1="10" x2="13.5" y2="16" />
          <line x1="16" y1="10" x2="16" y2="16" />
          <line x1="18.5" y1="10" x2="18.5" y2="16" />
        </svg>
      );

    case 'tv':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="13" rx="2" />
          <line x1="7" y1="20" x2="9" y2="17" />
          <line x1="17" y1="20" x2="15" y2="17" />
        </svg>
      );

    case 'no-co-alarm':
    case 'no-alarm':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#717171"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="2" y1="2" x2="22" y2="22" />
        </svg>
      );

    case 'no-smoke-alarm':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#717171"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="2" />
          <line x1="3" y1="3" x2="21" y2="21" />
        </svg>
      );

    case 'desk':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Chair on left */}
          <path d="M4 10v6" />
          <path d="M4 14h4" />
          <path d="M6 14v6" />
          {/* Desk with laptop on right */}
          <line x1="10" y1="14" x2="21" y2="14" />
          <line x1="20" y1="14" x2="20" y2="20" />
          <line x1="12" y1="14" x2="12" y2="20" />
          <rect x="13" y="9" width="6" height="4" rx="0.5" />
        </svg>
      );

    case 'fridge':
    case 'freezer':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <line x1="5" y1="9" x2="19" y2="9" />
          <line x1="7.5" y1="6" x2="7.5" y2="7.5" />
          <line x1="7.5" y1="12" x2="7.5" y2="15" />
        </svg>
      );

    case 'microwave':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <rect x="5" y="8" width="10" height="8" rx="1" />
          <circle cx="18" cy="9.5" r="0.8" fill={strokeColor} />
          <circle cx="18" cy="14.5" r="0.8" fill={strokeColor} />
        </svg>
      );

    case 'cooking-pot':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 11h16v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6Z" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6 11V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="5" x2="14" y2="5" />
        </svg>
      );

    case 'crockery':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="7" />
          <path d="M5 8v3a2 2 0 0 0 2 2v6" />
          <path d="M5 8h4v3" />
          <path d="M19 8v11" />
          <path d="M19 8a3 3 0 0 0-3 3v2h3" />
        </svg>
      );

    case 'kettle':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9h11l-1 9H7L6 9Z" />
          <path d="M9 6h5" />
          <line x1="11.5" y1="4" x2="11.5" y2="6" />
          <path d="M16 11h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2.5" />
          <path d="M6 12l-2 2" />
          <line x1="5" y1="20" x2="18" y2="20" />
        </svg>
      );

    case 'coffee':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="5" y="3" width="14" height="4" rx="1" />
          <path d="M7 7v13h10V7" />
          <line x1="7" y1="13" x2="17" y2="13" />
          <path d="M9 13v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5" />
        </svg>
      );

    case 'wine':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
          <line x1="12" y1="12" x2="12" y2="19" />
          <line x1="8" y1="19" x2="16" y2="19" />
        </svg>
      );

    case 'dining-table':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="9" width="18" height="3" rx="1" />
          <line x1="6" y1="12" x2="6" y2="20" />
          <line x1="18" y1="12" x2="18" y2="20" />
        </svg>
      );

    case 'hair-dryer':
    case 'wind':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 8h10a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H4V8Z" />
          <path d="M10 16v4a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v-4" />
          <line x1="18" y1="10" x2="21" y2="10" />
          <line x1="18" y1="14" x2="21" y2="14" />
        </svg>
      );

    case 'cleaning':
    case 'sparkles':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 8h6l2 3v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9l2-3Z" />
          <path d="M10 8V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3" />
          <path d="M10 5l-3 1" />
        </svg>
      );

    case 'shampoo':
    case 'conditioner':
    case 'body-soap':
    case 'shower':
    case 'droplet':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="7" y="8" width="10" height="13" rx="2" />
          <path d="M12 4v4" />
          <path d="M10 4h4" />
          <path d="M10 4l-2 1" />
        </svg>
      );

    case 'hot-water':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 12h8a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2h-3" />
          <path d="M14 12v3" />
          <path d="M16 12l2 4" />
          <path d="M12 12l-2 4" />
        </svg>
      );

    case 'first-aid':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="15" rx="2" />
          <path d="M8 5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
          <line x1="12" y1="9" x2="12" y2="15" />
          <line x1="9" y1="12" x2="15" y2="12" />
        </svg>
      );

    case 'iron':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 17h16a1 1 0 0 0 1-1C21 10 17 6 12 6H5a1 1 0 0 0-1 1v10Z" />
          <path d="M4 10h11" />
          <line x1="4" y1="20" x2="20" y2="20" />
        </svg>
      );

    default:
      break;
  }

  // Lucide icon mappings
  const map = {
    utensils: Utensils,
    wifi: Wifi,
    car: Car,
    pool: Waves,
    'hot-tub': Bath,
    paw: PawPrint,
    camera: Cctv,
    snowflake: Snowflake,
    fan: Fan,
    layers: Layers,
    shirt: Shirt,
    'drying-rack': Shirt,
    bed: Bed,
    'bed-double': BedDouble,
    door: DoorClosed,
    compass: Compass,
    sun: Sun,
    picnic: Utensils,
    building: Building,
    elevator: Building2,
    luggage: Luggage,
    calendar: Calendar,
    key: KeyRound,
    flame: Flame,
    'fire-extinguisher': Flame,
  };

  const Component = map[icon] || Utensils;
  return <Component size={size} strokeWidth={strokeWidth} color={strokeColor} aria-hidden="true" />;
}

import React from 'react';

export function LaurelBranchLeft({ width = 36, height = 54, className = '' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 54"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Central curved stem */}
      <path
        d="M28 2 C22 12, 17 24, 21 48 C20 48, 19 47, 18 45 C15 22, 20 10, 26 2 Z"
        fill="currentColor"
      />
      {/* Leaves branching outward and upward */}
      {/* Top leaf */}
      <path
        d="M26 3 C21 2, 14 6, 12 11 C17 12, 23 9, 26 3 Z"
        fill="currentColor"
      />
      {/* Upper leaf */}
      <path
        d="M22 13 C16 11, 8 14, 6 20 C12 21, 18 19, 22 13 Z"
        fill="currentColor"
      />
      {/* Mid leaf */}
      <path
        d="M20 23 C14 21, 6 25, 4 31 C10 32, 16 29, 20 23 Z"
        fill="currentColor"
      />
      {/* Lower leaf */}
      <path
        d="M20 33 C15 31, 8 36, 7 42 C12 43, 17 39, 20 33 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LaurelBranchRight({ width = 36, height = 54, className = '' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 54"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      style={{ transform: 'scaleX(-1)' }}
    >
      <path
        d="M28 2 C22 12, 17 24, 21 48 C20 48, 19 47, 18 45 C15 22, 20 10, 26 2 Z"
        fill="currentColor"
      />
      <path
        d="M26 3 C21 2, 14 6, 12 11 C17 12, 23 9, 26 3 Z"
        fill="currentColor"
      />
      <path
        d="M22 13 C16 11, 8 14, 6 20 C12 21, 18 19, 22 13 Z"
        fill="currentColor"
      />
      <path
        d="M20 23 C14 21, 6 25, 4 31 C10 32, 16 29, 20 23 Z"
        fill="currentColor"
      />
      <path
        d="M20 33 C15 31, 8 36, 7 42 C12 43, 17 39, 20 33 Z"
        fill="currentColor"
      />
    </svg>
  );
}

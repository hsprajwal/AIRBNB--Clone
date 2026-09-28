import React from 'react';

export default function HostInfo({
  name = 'Mirashya Homes',
  avatarColor = '#0b3d2e',
  yearsHosting = 2,
}) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="host-info-section">
      <div
        className="host-avatar"
        style={{ backgroundColor: avatarColor }}
        aria-hidden="true"
      >
        {initials}
      </div>
      <div className="host-details">
        <p className="host-title">Hosted by {name}</p>
        <p className="host-tenure">{yearsHosting} years hosting</p>
      </div>
    </div>
  );
}

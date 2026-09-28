import React from 'react';
import { Briefcase, Shield } from 'lucide-react';

const BalloonIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2a6 6 0 0 0-6 6c0 4.2 4.2 8.6 5.3 9.7a1 1 0 0 0 1.4 0c1.1-1.1 5.3-5.5 5.3-9.7a6 6 0 0 0-6-6z" />
    <path d="M12 18v4" />
  </svg>
);

const PinkVerifiedBadge = () => (
  <div className="host-pink-badge" aria-label="Identity verified">
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
);

export default function HostProfile({
  name = 'Mirashya Homes',
  avatarColor = '#17382c',
  reviewCount = 1463,
  rating = 4.68,
  yearsHosting = 2,
  bornDecade = '80s',
  responseRate = 100,
  responseTime = 'within an hour',
  coHosts = [],
}) {
  return (
    <section className="host-profile-section" aria-label="Host details">
      <h3 className="section-title mb-6">Meet your Host</h3>

      <div className="host-profile-main-grid">
        {/* Left Column: Host Card & Host Details */}
        <div className="host-left-col">
          {/* Host Card with Shadow */}
          <div className="host-card-floating">
            {/* Top row: Avatar + Name + Host */}
            <div className="host-card-top-row">
              <div className="host-avatar-large-wrap">
                <div
                  className="host-avatar-large"
                  style={{ backgroundColor: avatarColor }}
                  aria-hidden="true"
                >
                  <span className="host-brand-text">MIRASHYA</span>
                </div>
                <PinkVerifiedBadge />
              </div>
              <div className="host-card-titles">
                <p className="host-profile-name">{name}</p>
                <p className="host-profile-role">Host</p>
              </div>
            </div>

            {/* Bottom row: Horizontal Stats with Dividers */}
            <div className="host-stats-horizontal-row">
              <div className="host-stat-col">
                <p className="host-stat-val">{reviewCount.toLocaleString()}</p>
                <p className="host-stat-label">Reviews</p>
              </div>
              <div className="host-stat-col">
                <p className="host-stat-val">
                  {rating.toFixed(2)}<span className="host-stat-star">★</span>
                </p>
                <p className="host-stat-label">Rating</p>
              </div>
              <div className="host-stat-col">
                <p className="host-stat-val">{yearsHosting}</p>
                <p className="host-stat-label">Years hosting</p>
              </div>
            </div>
          </div>

          {/* Details below Host Card */}
          <div className="host-personal-details">
            <div className="host-detail-row">
              <BalloonIcon />
              <span>Born in the {bornDecade}</span>
            </div>
            <div className="host-detail-row">
              <Briefcase size={20} strokeWidth={1.5} aria-hidden="true" />
              <span>My work: Mirashya Homes Goa</span>
            </div>
          </div>
        </div>

        {/* Right Column: Co-Hosts, Host Details & Messaging */}
        <div className="host-right-col">
          {/* Co-Hosts */}
          <div className="co-hosts-box">
            <h4 className="co-hosts-title">Co-Hosts</h4>
            <div className="co-hosts-grid">
              {coHosts.map((ch) => (
                <div key={ch.name} className="co-host-item">
                  {ch.avatarUrl ? (
                    <img
                      src={ch.avatarUrl}
                      alt={ch.name}
                      className="co-host-avatar-img"
                    />
                  ) : (
                    <div
                      className="co-host-avatar-initial"
                      style={{
                        backgroundColor: ch.avatarColor || '#fce4ec',
                        color: ch.textColor || '#c2185b',
                      }}
                      aria-hidden="true"
                    >
                      {ch.name[0]}
                    </div>
                  )}
                  <span className="co-host-name">{ch.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Host Response Details */}
          <div className="host-response-details">
            <h4 className="host-response-title">Host details</h4>
            <p className="host-response-line">Response rate: {responseRate}%</p>
            <p className="host-response-line">
              Responds {responseTime.startsWith('within') ? responseTime : `within ${responseTime}`}
            </p>

            <button type="button" className="message-host-btn">
              Message Host
            </button>
          </div>

          {/* Airbnb Payment Protection Disclaimer */}
          <div className="host-security-disclaimer">
            <Shield size={22} strokeWidth={1.5} className="host-shield-icon" aria-hidden="true" />
            <span className="host-security-text">
              To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

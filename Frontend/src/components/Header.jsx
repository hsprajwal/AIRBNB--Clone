import React from 'react';
import { Globe, Menu, Search } from 'lucide-react';

function AirbnbLogo() {
  return (
    <a href="/" className="brand-link" aria-label="Airbnb home">
      <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 4.25c-2.25 0-3.7 2.1-4.75 4.15C9.95 10.95 8.65 14 7.15 17.25 5.9 19.95 4.5 23.1 5.7 25.45c.55 1.1 1.55 1.75 2.75 1.75 2.1 0 4.15-2.1 5.85-5.05L16 18.9l1.7 3.25c1.7 2.95 3.75 5.05 5.85 5.05 1.2 0 2.2-.65 2.75-1.75 1.2-2.35-.2-5.5-1.45-8.2-1.5-3.25-2.8-6.3-4.1-8.85C19.7 6.35 18.25 4.25 16 4.25Zm0 12.35c-.9-1.7-1.7-3.4-2.25-4.7-.65-1.55-.95-2.65-.35-3.2.3-.25.75-.35 1.2-.35.8 0 1.1.55 1.4 1.15.3-.6.6-1.15 1.4-1.15.45 0 .9.1 1.2.35.6.55.3 1.65-.35 3.2-.55 1.3-1.35 3-2.25 4.7Zm-5.1 7.15c-.5.65-1.2 1.15-1.85 1.15-.55 0-.75-.3-.85-.5-.45-.9.45-3.15 1.3-5l1.8-3.9c.75 1.55 1.55 3.05 2.3 4.4l-2.7 3.85Zm10.2 0-2.7-3.85c.75-1.35 1.55-2.85 2.3-4.4l1.8 3.9c.85 1.85 1.75 4.1 1.3 5-.1.2-.3.5-.85.5-.65 0-1.35-.5-1.85-1.15Z"
          fill="currentColor"
        />
      </svg>
      <span className="brand-text">airbnb</span>
    </a>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <AirbnbLogo />
        </div>

        <div className="header-center">
          <div className="search-pill" role="search">
            <button type="button" className="search-segment search-segment-strong">
              Anywhere
            </button>
            <span className="search-divider" aria-hidden="true" />
            <button type="button" className="search-segment search-segment-strong">
              Anytime
            </button>
            <span className="search-divider" aria-hidden="true" />
            <button type="button" className="search-segment search-segment-muted">
              Add guests
            </button>
            <button type="button" className="search-button" aria-label="Search">
              <Search size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="header-right">
          <a href="#" className="host-link">
            Become a host
          </a>
          <button type="button" className="icon-button globe-button" aria-label="Choose language and region">
            <Globe size={18} strokeWidth={1.8} />
          </button>
          <button type="button" className="menu-button" aria-label="Open main menu">
            <Menu size={16} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </header>
  );
}

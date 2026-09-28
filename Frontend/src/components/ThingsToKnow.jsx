import React from 'react';
import { CalendarX, Key, Shield, ChevronRight } from 'lucide-react';

export default function ThingsToKnow({ thingsToKnow = {} }) {
  const {
    cancellationPolicy = 'Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.',
    houseRules = ['Check-in after 2:00 pm', 'Checkout before 11:00 am', '3 guests maximum'],
    safety = [
      'Carbon monoxide alarm not reported',
      'Smoke alarm not reported',
      'Exterior security cameras on property',
    ],
  } = thingsToKnow;

  return (
    <section className="things-to-know-section" aria-label="Things to know">
      <h3 className="section-title mb-6">Things to know</h3>

      <div className="things-to-know-grid">
        {/* Column 1: Cancellation Policy */}
        <div className="things-col">
          <CalendarX size={24} strokeWidth={1.5} className="things-icon" aria-hidden="true" />
          <p className="things-title">Cancellation policy</p>
          <p className="things-text">{cancellationPolicy}</p>
          <p className="things-text">Review this host's full policy for details.</p>
          <button type="button" className="things-learn-more-btn">
            <span>Show more</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Column 2: House Rules */}
        <div className="things-col">
          <Key size={24} strokeWidth={1.5} className="things-icon" aria-hidden="true" />
          <p className="things-title">House rules</p>
          {houseRules.map((rule) => (
            <p key={rule} className="things-text">
              {rule}
            </p>
          ))}
          <button type="button" className="things-learn-more-btn">
            <span>Show more</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Column 3: Safety & Property */}
        <div className="things-col">
          <Shield size={24} className="things-icon" aria-hidden="true" />
          <p className="things-title">Safety & property</p>
          {safety.map((item) => (
            <p key={item} className="things-text">
              {item}
            </p>
          ))}
          <button type="button" className="things-learn-more-btn">
            <span>Show more</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function parseDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export default function CalendarSection({
  nights = 5,
  location = 'Candolim, Goa, India',
  checkIn = '2026-10-18',
  checkOut = '2026-10-23',
}) {
  const startDate = parseDate(checkIn);
  const endDate = parseDate(checkOut);
  const [monthOffset, setMonthOffset] = useState(0);

  const startMonth = startDate.getMonth() + monthOffset;
  const startYear = startDate.getFullYear();

  const months = [0, 1].map((offset) => {
    const d = new Date(startYear, startMonth + offset, 1);
    return {
      year: d.getFullYear(),
      month: d.getMonth(),
      label: d.toLocaleString('en-US', { month: 'long', year: 'numeric' }),
    };
  });

  const city = location.split(',')[0];
  const dateRangeStr = `${startDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })} - ${endDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })}`;

  function getDaysGrid(year, month) {
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const grid = Array(firstDayIndex).fill(null);
    for (let day = 1; day <= daysInMonth; day++) {
      grid.push(day);
    }
    return grid;
  }

  return (
    <section className="calendar-section" aria-label="Availability calendar">
      <div className="calendar-header-info">
        <h3 className="section-title">
          {nights} nights in {city}
        </h3>
        <p className="calendar-date-range">{dateRangeStr}</p>
      </div>

      <div className="calendar-months-grid">
        {months.map(({ year, month, label }, mIndex) => {
          const days = getDaysGrid(year, month);
          return (
            <div key={`${year}-${month}`} className="calendar-month">
              <div className="calendar-month-header">
                {mIndex === 0 ? (
                  <button
                    type="button"
                    aria-label="Previous month"
                    onClick={() => setMonthOffset((prev) => prev - 1)}
                    className="calendar-nav-btn"
                  >
                    <ChevronLeft size={18} />
                  </button>
                ) : (
                  <span className="calendar-nav-placeholder" aria-hidden="true" />
                )}
                <p className="calendar-month-name">{label}</p>
                {mIndex === 1 ? (
                  <button
                    type="button"
                    aria-label="Next month"
                    onClick={() => setMonthOffset((prev) => prev + 1)}
                    className="calendar-nav-btn"
                  >
                    <ChevronRight size={18} />
                  </button>
                ) : (
                  <span className="calendar-nav-placeholder" aria-hidden="true" />
                )}
              </div>
              <div className="calendar-days-header">
                {dayNames.map((d, i) => (
                  <span key={`${d}-${i}`}>{d}</span>
                ))}
              </div>
              <div className="calendar-dates-grid">
                {days.map((dayNum, idx) => {
                  if (dayNum === null) {
                    return <span key={`empty-${idx}`} className="calendar-date-cell empty" />;
                  }

                  const curDate = new Date(year, month, dayNum);
                  const isPast = curDate < startDate;
                  const isCheckInOrOut =
                    curDate.getTime() === startDate.getTime() ||
                    curDate.getTime() === endDate.getTime();
                  const isInRange = curDate >= startDate && curDate <= endDate;

                  let cellClass = 'calendar-date-cell';
                  if (isCheckInOrOut) cellClass += ' selected';
                  else if (isInRange) cellClass += ' in-range';
                  else if (isPast) cellClass += ' past';

                  return (
                    <span key={dayNum} className={cellClass}>
                      {dayNum}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Calendar Bottom Controls */}
      <div className="calendar-footer-row">
        <button
          type="button"
          className="calendar-keyboard-btn"
          aria-label="Keyboard shortcuts"
          title="Keyboard shortcuts"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => {
            // Clear dates action
          }}
          className="calendar-clear-dates-btn"
        >
          Clear dates
        </button>
      </div>
    </section>
  );
}

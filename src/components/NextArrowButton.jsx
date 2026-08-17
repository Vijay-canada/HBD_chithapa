import React from 'react';

export default function NextArrowButton({ onNextPage }) {
  return (
    <div className="next-arrow-floating-wrapper">
      <button
        className="vintage-next-arrow-btn"
        onClick={onNextPage}
        title="Proceed to Page 2 — Celebration Room"
        aria-label="Proceed to Page 2"
      >
        <div className="arrow-outer-ring">
          <div className="arrow-inner-ring">
            <span className="arrow-glyph">➔</span>
          </div>
        </div>
        <div className="arrow-glow-halo"></div>
      </button>
    </div>
  );
}

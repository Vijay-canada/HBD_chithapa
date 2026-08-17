import React, { useState } from 'react';
import { playSealBreakSound, playScrollUnrollSound } from '../utils/audio';

const FIRST_PAGE_PHOTOS = [
  { id: 1, src: '/photos/WA0031.jpg', alt: 'Cherished Moment 1' },
  { id: 2, src: '/photos/WA0032.jpg', alt: 'Cherished Moment 2' },
  { id: 3, src: '/photos/WA0033.jpg', alt: 'Cherished Moment 3' },
  { id: 4, src: '/photos/WA0034.jpg', alt: 'Cherished Moment 4' },
];

const SECOND_PAGE_PHOTOS = [
  { id: 5, src: '/photos/WA0036.jpg', alt: 'Cherished Moment 5' },
  { id: 6, src: '/photos/WA0038.jpg', alt: 'Cherished Moment 6' },
  { id: 7, src: '/photos/WA0039.jpg', alt: 'Cherished Moment 7' },
  { id: 8, src: '/photos/WA0040.jpg', alt: 'Cherished Moment 8' },
];

export default function RoyalScroll({ onOpenScroll }) {
  const [scrollState, setScrollState] = useState('closed'); // 'closed', 'unrolling', 'revealing', 'complete'
  const [revealStep, setRevealStep] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleScrollClick = () => {
    if (scrollState !== 'closed') return;

    // Step 1: Break wax seal & loosen burgundy ribbon
    playSealBreakSound();
    setScrollState('unrolling');

    // Step 2: Unroll scroll parchment in-place on table
    setTimeout(() => {
      playScrollUnrollSound();
    }, 200);

    // Step 3: Parchment fully open -> start multi-layered ink reveal
    setTimeout(() => {
      setScrollState('revealing');
      startMultiLayerReveal();
    }, 800);
  };

  const startMultiLayerReveal = () => {
    // Beat 1: Parchment blank for 0.5s pause to build anticipation
    setTimeout(() => {
      setRevealStep(1); // Beat 1: Kicker shimmer sweep
    }, 500);

    setTimeout(() => {
      setRevealStep(2); // Beat 2: Heading ink-writing with glowing tip tracer
    }, 1100);

    setTimeout(() => {
      setRevealStep(3); // Beat 3: SVG ornamental flourish stroke drawing
    }, 2300);

    setTimeout(() => {
      setRevealStep(4); // Beat 4: Line-by-line blur-to-focus body paragraphs
    }, 3300);

    setTimeout(() => {
      setRevealStep(5); // Beat 5: Embedded Photo Gallery reveal
    }, 4800);

    setTimeout(() => {
      setRevealStep(6); // Beat 6: Final wish ink writing + golden bloom & room fireworks
      setScrollState('complete');
      onOpenScroll();
    }, 6200);
  };

  return (
    <div className={`in-place-royal-scroll scroll-state-${scrollState}`}>
      {/* Lightbox / Modal for Zoomed Image View */}
      {selectedPhoto && (
        <div className="scroll-lightbox-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="scroll-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setSelectedPhoto(null)}>✕</button>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="lightbox-img" />
          </div>
        </div>
      )}

      {/* ROLLED / IN-PLACE UNROLLING PARCHMENT ON TABLE */}
      <div
        className={`scroll-table-wrapper ${scrollState === 'unrolling' ? 'is-unrolling-inplace' : ''}`}
        onClick={handleScrollClick}
        role="button"
        tabIndex={0}
        aria-label="Royal Parchment Scroll - Click to Open"
      >
        {/* Top Antique Wooden Roller */}
        <div className="scroll-roller roller-top">
          <div className="roller-finial finial-left"></div>
          <div className="roller-shaft"></div>
          <div className="roller-finial finial-right"></div>
        </div>

        {/* Middle Parchment Canvas (Expands In-Place on Table) */}
        <div className={`parchment-inplace-body ${revealStep >= 6 ? 'golden-bloom-active' : ''}`}>
          {/* Burgundy Ribbon & Royal Wax Seal (Visible when closed) */}
          {scrollState === 'closed' && (
            <div className="burgundy-ribbon">
              <div className="royal-wax-seal">
                <span className="seal-emblem">❤️</span>
              </div>
            </div>
          )}

          {/* Closed Parchment Emblem */}
          {scrollState === 'closed' && (
            <div className="closed-parchment-symbol">⚜</div>
          )}

          {/* Ambient Parchment Gold Dust Particles */}
          {scrollState !== 'closed' && (
            <div className="parchment-dust-motes">
              <div className="mote mote-1"></div>
              <div className="mote mote-2"></div>
              <div className="mote mote-3"></div>
            </div>
          )}

          {/* INK REVEAL TEXT ON OPEN PARCHMENT */}
          {scrollState !== 'closed' && scrollState !== 'unrolling' && (
            <div className="inplace-parchment-content">

              {/* SCREEN 1 / PAGE 1: First 4 Photos + First 2 Wishes */}
              {activePage === 1 && (
                <>
                  {revealStep >= 1 && (
                    <div className="eyebrow-shimmer-wrapper">
                      <span className="seal-watermark shimmer-sweep-text">
                        ❖ A SPECIAL DEDICATION FOR MY LOVE ❖
                      </span>
                      <div className="shimmer-sparkle-trail"></div>
                    </div>
                  )}

                  {revealStep >= 2 && (
                    <div className="title-ink-tracer-wrapper">
                      <h1 className="royal-main-title ink-tracing-title">
                        Happy Birthday My Love 💖
                      </h1>
                      <div className="ink-tracer-glow-tip"></div>
                    </div>
                  )}

                  {revealStep >= 3 && (
                    <div className="svg-flourish-wrapper">
                      <svg className="flourish-svg" viewBox="0 0 300 24">
                        <path
                          className="flourish-path"
                          d="M 10 12 Q 75 2, 140 12 T 270 12 M 150 4 L 154 12 L 150 20 L 146 12 Z"
                        />
                      </svg>
                    </div>
                  )}

                  {revealStep >= 4 && (
                    <div className="body-paragraphs-ink-wrapper">
                      <p className="royal-paragraph line-ink-1">
                        Happy Birthday to my favorite human, and the best decision I ever made ❤️
                      </p>
                      <p className="royal-paragraph highlight-gold line-ink-2">
                        Happy Birthday to my future millionaire husband! Here’s to making massive moves and leveling up all the way to the bank this year 🚀💰
                      </p>
                    </div>
                  )}

                  {revealStep >= 5 && (
                    <div className="scroll-photos-gallery line-ink-4">
                      <div className="scroll-photos-grid grid-4-cols">
                        {FIRST_PAGE_PHOTOS.map((photo) => (
                          <div
                            key={photo.id}
                            className="scroll-photo-card"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPhoto(photo);
                            }}
                          >
                            <div className="photo-inner-border">
                              <img src={photo.src} alt={photo.alt} className="scroll-photo-thumb" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {revealStep >= 6 && (
                    <div className="royal-closing-section">

                    </div>
                  )}
                </>
              )}

              {/* SCREEN 2 / PAGE 2: Remaining Photos + 3rd Wish */}
              {activePage === 2 && (
                <>
                  <div className="eyebrow-shimmer-wrapper">
                    <span className="seal-watermark shimmer-sweep-text">
                      ❖ A SPECIAL DEDICATION FOR MY LOVE • PART II ❖
                    </span>
                    <div className="shimmer-sparkle-trail"></div>
                  </div>

                  <div className="title-ink-tracer-wrapper">
                    <h1 className="royal-main-title ink-tracing-title">
                      To My Future Millionaire Husband 💰
                    </h1>
                  </div>

                  <div className="svg-flourish-wrapper">
                    <svg className="flourish-svg" viewBox="0 0 300 24">
                      <path
                        className="flourish-path"
                        d="M 10 12 Q 75 2, 140 12 T 270 12 M 150 4 L 154 12 L 150 20 L 146 12 Z"
                      />
                    </svg>
                  </div>

                  <div className="body-paragraphs-ink-wrapper">
                    <p className="royal-paragraph highlight-gold line-ink-1">
                      Happy Birthday, my love! I believe in your path to millions. Just remember, behind every successful millionaire is a wife who spends it! 😉✨
                    </p>
                  </div>

                  <div className="scroll-photos-gallery line-ink-4">
                    <div className="gallery-header-divider">
                      <span className="gold-sparkle">✦</span>
                      <span className="gallery-section-title">More Precious Memories (5 to 10)</span>
                      <span className="gold-sparkle">✦</span>
                    </div>
                    <div className="scroll-photos-grid grid-remaining">
                      {SECOND_PAGE_PHOTOS.map((photo) => (
                        <div
                          key={photo.id}
                          className="scroll-photo-card"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPhoto(photo);
                          }}
                          title="Click to view photo"
                        >
                          <div className="photo-inner-border">
                            <img src={photo.src} alt={photo.alt} className="scroll-photo-thumb" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="royal-closing-section">
                    <div className="royal-signature signature-ink-fade">
                      Forever & Always, Your Wife ❤️
                    </div>

                    <div className="royal-final-wish final-ink-writing">
                      <span>Happy Birthday once again! 🎉✨</span>
                      <div className="gold-bloom-aura"></div>
                    </div>

                    <button
                      className="scroll-page-toggle-btn secondary-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePage(1);
                      }}
                    >
                      ⬅ Back to Page 1
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Bottom Antique Wooden Roller */}
        <div className="scroll-roller roller-bottom">
          <div className="roller-finial finial-left"></div>
          <div className="roller-shaft"></div>
          <div className="roller-finial finial-right"></div>
        </div>
      </div>
    </div>
  );
}




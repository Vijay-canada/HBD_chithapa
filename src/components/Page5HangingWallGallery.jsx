import React, { useState } from 'react';
import DustParticles from './DustParticles';
import { getAssetUrl } from '../utils/assets';

const HANGING_CARDS = [
  {
    id: 1,
    type: 'quote',
    badge: 'P4',
    title: 'A Blessed Wish',
    text: 'I’m truly blessed to have a Chittapa like you in my life. I wish you good health, endless happiness and many more beautiful years ahead.',
  },
  {
    id: 2,
    type: 'images',
    title: 'Cherished Memories',
    photos: [
      { src: getAssetUrl('photos/p456.jpg'), alt: 'Chittapa Memory p456' },
      { src: getAssetUrl('photos/WA0036.jpg'), alt: 'Chittapa Memory' },
    ],
  },
  {
    id: 3,
    type: 'quote',
    badge: 'P5',
    title: 'With Endless Love',
    text: 'Love you always, Chittapa ❤️',
  },
  {
    id: 4,
    type: 'images',
    title: 'Golden Moments',
    photos: [
      { src: getAssetUrl('photos/p654.jpg'), alt: 'Chittapa Memory p654' },
      { src: getAssetUrl('photos/WA0040.jpg'), alt: 'Chittapa Memory' },
    ],
  },
  {
    id: 5,
    type: 'quote',
    badge: 'P6',
    title: 'Grand Wish',
    text: 'Happy Birthday once again! 🥳🎂❤️',
  },
];

export default function Page5HangingWallGallery({ audioEnabled, onToggleAudio, onNextPage }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleNextCard = () => {
    if (activeCardIndex < HANGING_CARDS.length - 1) {
      setActiveCardIndex((prev) => prev + 1);
    } else if (onNextPage) {
      onNextPage();
    }
  };

  const handlePrevCard = () => {
    if (activeCardIndex > 0) {
      setActiveCardIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="page5-hanging-wall-wrapper">
      {/* Soft Ambient Particles & Warm Lighting */}
      <DustParticles litCount={4} />
      <div className="dynamic-lighting-overlay room-illumination-level-4" />
      <div className="film-grain-overlay" />

      {/* Lightbox / Modal for Zoomed Image View */}
      {selectedPhoto && (
        <div className="scroll-lightbox-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="scroll-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setSelectedPhoto(null)}>✕</button>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="lightbox-img" />
          </div>
        </div>
      )}

      {/* Sound Toggle */}
      <div className="room-audio-toggle">
        <button
          className={`sound-btn ${audioEnabled ? 'active' : ''}`}
          onClick={onToggleAudio}
          aria-label={audioEnabled ? 'Mute Sound' : 'Enable Sound'}
        >
          {audioEnabled ? '🔊' : '🔇'}
        </button>
      </div>

      {/* Hanging Wooden Ceiling Rail */}
      <div className="hanging-wooden-rail">
        <div className="rail-grain"></div>
        <div className="rail-brass-accents"></div>
      </div>

      {/* 3D Camera Scene Container */}
      <div className="hanging-cards-3d-viewport">
        <div className="hanging-cards-camera-track">
          {HANGING_CARDS.map((card, idx) => {
            const offset = idx - activeCardIndex;
            const absOffset = Math.abs(offset);
            const isEven = idx % 2 === 0;
            // Vertical stagger and tilt angle for organic zig-zag wall hanging look
            const vStagger = offset === 0 ? 0 : (isEven ? -18 : 18);
            const tilt = offset === 0 ? 0 : (isEven ? -3.5 : 3.5);

            let status = 'is-active';
            if (offset > 0) status = `is-next-depth offset-${offset}`;
            if (offset < 0) status = `is-prev-depth offset-${absOffset}`;

            return (
              <div
                key={card.id}
                className={`hanging-card-unit ${status}`}
                onClick={() => setActiveCardIndex(idx)}
                style={{
                  '--offset': offset,
                  '--abs-offset': absOffset,
                  '--v-stagger': `${vStagger}px`,
                  '--tilt': `${tilt}deg`,
                  zIndex: 100 - absOffset * 10,
                }}
              >
                {/* Suspended Ropes */}
                <div className="hanging-thread thread-left"></div>
                <div className="hanging-thread thread-right"></div>
                <div className="thread-pin pin-left"></div>
                <div className="thread-pin pin-right"></div>

                {/* Hanging Card Board */}
                <div className="card-board-surface">
                  <div className="card-crown-symbol">⚜</div>

                  {card.type === 'quote' && (
                    <div className="quote-content-container">
                      <span className="card-badge-tag">{card.badge}</span>
                      <h2 className="card-header-title">{card.title}</h2>
                      <div className="gold-flourish-divider">✦ ❖ ✦</div>
                      <p className="card-quote-paragraph">“{card.text}”</p>
                    </div>
                  )}

                  {card.type === 'images' && (
                    <div className="images-content-container">
                      <h2 className="card-header-title">{card.title}</h2>
                      <div className="gold-flourish-divider">✦ ❖ ✦</div>
                      <div className="hanging-photo-duo-grid">
                        {card.photos.map((photo, pIdx) => (
                          <div
                            key={pIdx}
                            className="hanging-photo-card"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPhoto(photo);
                            }}
                            title="Click to expand"
                          >
                            <div className="gold-molded-frame">
                              <img src={photo.src} alt={photo.alt} className="hanging-photo-img" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="card-foot-symbol">⚜</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Camera Navigation Controls */}
        <div className="hanging-gallery-nav-bar">
          <button
            className="gallery-arrow-btn prev-arrow"
            onClick={handlePrevCard}
            disabled={activeCardIndex === 0}
          >
            ⬅ Prev
          </button>

          <div className="hanging-card-indicators">
            {HANGING_CARDS.map((_, idx) => (
              <span
                key={idx}
                className={`indicator-dot ${idx === activeCardIndex ? 'active' : ''}`}
                onClick={() => setActiveCardIndex(idx)}
              />
            ))}
          </div>

          <button
            className="gallery-arrow-btn next-arrow"
            onClick={handleNextCard}
          >
            {activeCardIndex === HANGING_CARDS.length - 1 ? 'Final Wishes ➔' : 'Next Card ➔'}
          </button>
        </div>
      </div>
    </div>
  );
}

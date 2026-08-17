import React, { useState } from 'react';
import DustParticles from './DustParticles';
import NextArrowButton from './NextArrowButton';

const REMAINING_PHOTOS = [
  { id: 5, src: '/photos/WA0036.jpg', alt: 'Cherished Moment 5' },
  { id: 6, src: '/photos/WA0038.jpg', alt: 'Cherished Moment 6' },
  { id: 7, src: '/photos/WA0039.jpg', alt: 'Cherished Moment 7' },
  { id: 8, src: '/photos/WA0040.jpg', alt: 'Cherished Moment 8' },
];

export default function Page4ClosingWishes({ audioEnabled, onToggleAudio, onNextPage, onRestart }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="page4-closing-wishes-wrapper">
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

      {/* Main Closing Scene */}
      <div className="closing-wishes-scene">
        {/* Featured 3rd Birthday Wish Card */}
        <div className="closing-wishes-card husband-wish-card">
          <div className="card-ornament-top">⚜</div>

          <h2 className="closing-sub-title">To My Future Millionaire Husband 💰</h2>

          <p className="closing-main-wish-text">
            “Happy Birthday, my love! I believe in your path to millions. Just remember, behind every successful millionaire is a wife who spends it! 😉✨”
          </p>

          <div className="golden-divider-line">
            <span className="line-arm" />
            <span className="diamond-center">✦</span>
            <span className="line-arm" />
          </div>

          <p className="closing-dedication-signature">
            Forever & Always, Your Wife ❤️
          </p>

          <div className="card-ornament-bottom">⚜</div>
        </div>

        {/* Gallery of Photos */}
        <div className="closing-photos-gallery-section">
          <div className="gallery-header-divider">
            <span className="gold-sparkle">✦</span>
            <span className="gallery-section-title">Our Precious Memories</span>
            <span className="gold-sparkle">✦</span>
          </div>
          <div className="closing-photos-grid">
            {REMAINING_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                className="closing-photo-card"
                onClick={() => setSelectedPhoto(photo)}
                title="Click to expand photo"
              >
                <div className="vintage-gold-molding">
                  <img src={photo.src} alt={photo.alt} className="closing-photo-img" />
                </div>
                <div className="photo-corner-ornament">❖</div>
              </div>
            ))}
          </div>
        </div>

        {onRestart && (
          <button
            className="goldBtn replay-experience-btn"
            onClick={onRestart}
            aria-label="Replay Experience"
          >
            🔄 Replay Experience
          </button>
        )}
      </div>

      {/* Next Arrow to Proceed to Page 6 (Chittapa P1, P2, P3 Page) */}
      {onNextPage && (
        <NextArrowButton onNextPage={onNextPage} />
      )}
    </div>
  );
}




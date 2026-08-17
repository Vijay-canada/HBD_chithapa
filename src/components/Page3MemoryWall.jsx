import React, { useState } from 'react';
import DustParticles from './DustParticles';
import { getAssetUrl } from '../utils/assets';

const MEMORY_PHOTOS = [
  { id: 1, title: 'Cherished Memories', year: '2018', src: getAssetUrl('photos/WA0031.jpg'), caption: 'With Chittapa' },
  { id: 2, title: 'Golden Moments', year: '2019', src: getAssetUrl('photos/WA0032.jpg'), caption: 'Family Celebration' },
  { id: 3, title: 'Invaluable Guidance', year: '2020', src: getAssetUrl('photos/WA0033.jpg'), caption: 'Guiding Light' },
  { id: 4, title: 'Laughter & Warmth', year: '2021', src: getAssetUrl('photos/WA0034.jpg'), caption: 'Unforgettable Days' },
  { id: 5, title: 'Strength & Inspiration', year: '2022', src: getAssetUrl('photos/WA0036.jpg'), caption: 'Role Model' },
  { id: 6, title: 'Everlasting Support', year: '2023', src: getAssetUrl('photos/WA0038.jpg'), caption: 'Always Believed' },
  { id: 7, title: 'Precious Milestones', year: '2024', src: getAssetUrl('photos/WA0039.jpg'), caption: 'Beautiful Years' },
  { id: 8, title: 'With Lots of Love', year: '2026', src: getAssetUrl('photos/WA0040.jpg'), caption: 'Dear Chittapa' },
];

export default function Page3MemoryWall({ audioEnabled, onToggleAudio }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [tamilTextRevealed, setTamilTextRevealed] = useState(false);

  const handlePhotoClick = (index) => {
    if (index === 7) {
      // 8th Photo Fullscreen Reveal
      setActivePhotoIndex(7);
      setIsFullScreen(true);
      setTimeout(() => {
        setTamilTextRevealed(true);
      }, 600);
    } else {
      // Dolly-in forward camera tracking to next photo
      setActivePhotoIndex(index + 1);
    }
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
    setTamilTextRevealed(false);
  };

  // Calculate dolly camera transform offset
  const cameraZOffset = activePhotoIndex * 180;
  const cameraXOffset = (activePhotoIndex % 2 === 0 ? -1 : 1) * (activePhotoIndex * 15);

  return (
    <div className={`page3-memory-wall-wrapper ${isFullScreen ? 'is-fullscreen-active' : ''}`}>
      {/* Ambient Room Lighting & Particles */}
      <DustParticles litCount={4} />
      <div className="dynamic-lighting-overlay room-illumination-level-4" />
      <div className="film-grain-overlay" />

      {/* Audio Toggle */}
      <div className="room-audio-toggle">
        <button
          className={`sound-btn ${audioEnabled ? 'active' : ''}`}
          onClick={onToggleAudio}
          aria-label={audioEnabled ? 'Mute Sound' : 'Enable Sound'}
        >
          {audioEnabled ? '🔊' : '🔇'}
        </button>
      </div>

      {/* Background Room Architecture */}
      <div className="page3-room-wall">
        <div className="wallpaper-pattern" />
        <div className="wall-wainscoting" />

        {/* Vintage Hanging Lights & Twine String */}
        <div className="memory-twine-string-top">
          <div className="fairy-light fl-1" />
          <div className="fairy-light fl-2" />
          <div className="fairy-light fl-3" />
          <div className="fairy-light fl-4" />
          <div className="fairy-light fl-5" />
        </div>
      </div>

      {/* 3D Dolly-In Camera Stage */}
      <div className="memory-wall-stage">
        <div
          className="dolly-camera-viewport"
          style={{
            transform: `perspective(1000px) translate3d(${cameraXOffset}px, 0px, ${cameraZOffset}px)`,
          }}
        >
          {/* 8 Hanging Polaroid Photos */}
          <div className="polaroid-grid-hanging">
            {MEMORY_PHOTOS.map((photo, index) => {
              const isActive = index === activePhotoIndex;
              const isPassed = index < activePhotoIndex;

              return (
                <div
                  key={photo.id}
                  className={`hanging-polaroid-item photo-slot-${index + 1} ${isActive ? 'is-focused' : ''} ${isPassed ? 'is-passed' : ''}`}
                  onClick={() => handlePhotoClick(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo memory ${photo.id}: ${photo.title}`}
                >
                  {/* Wooden Clip & Hanging Ribbon */}
                  <div className="wooden-clothespin">
                    <div className="pin-clip" />
                    <div className="hanging-ribbon-line" />
                  </div>

                  {/* Polaroid Frame */}
                  <div className="vintage-polaroid-frame">
                    <div className="polaroid-image-wrapper">
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="polaroid-img"
                        onError={(e) => {
                          // Fallback vintage photo placeholder SVG if local image file isn't found
                          e.target.onerror = null;
                          e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect width="100%" height="100%" fill="%232b180d"/><circle cx="150" cy="130" r="50" fill="%23d4af37" opacity="0.3"/><path d="M50 240 Q150 160 250 240" stroke="%23d4af37" stroke-width="4" fill="none"/><text x="50%" y="85%" font-family="serif" font-size="20" fill="%23ffdfa0" text-anchor="middle">Photo ${photo.id}</text></svg>`;
                        }}
                      />
                      <div className="polaroid-vignette" />
                    </div>
                    <div className="polaroid-caption-area">
                      <span className="caption-text">{photo.caption}</span>
                      <span className="caption-year">{photo.year}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 8TH PHOTO FULLSCREEN REVEAL & TAMIL GREETING */}
      {isFullScreen && (
        <div className="fullscreen-photo-modal-overlay" onClick={handleCloseFullScreen}>
          <div className="fullscreen-content-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseFullScreen} aria-label="Close photo">
              ✕
            </button>

            <div className="expanded-photo-container">
              <img
                src={MEMORY_PHOTOS[7].src}
                alt="Chittapa Birthday Full Photo"
                className="expanded-photo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="500" viewBox="0 0 600 500"><rect width="100%" height="100%" fill="%23201007"/><circle cx="300" cy="200" r="100" fill="%23d4af37" opacity="0.25"/><path d="M100 420 Q300 280 500 420" stroke="%23d4af37" stroke-width="6" fill="none"/><text x="50%" y="88%" font-family="serif" font-size="28" fill="%23ffdfa0" text-anchor="middle">Special Memories with Chittapa</text></svg>`;
                }}
              />
              <div className="golden-frame-border" />
            </div>

            {/* TAMIL BIRTHDAY GREETING REVEAL */}
            {tamilTextRevealed && (
              <div className="tamil-birthday-reveal-wrapper">
                <div className="tamil-shimmer-kicker">❖ இனிய பிறந்தநாள் நல்வாழ்த்துக்கள் ❖</div>
                <h1 className="tamil-birthday-heading">
                  இனிய பிறந்தநாள் வாழ்த்துக்கள் சித்தப்பா
                </h1>
                <p className="tamil-subline">
                  என்றும் உங்கள் அன்பையும் வழிகாட்டலையும் நினைவில் கொள்ளும் — விஜய்
                </p>
                <div className="gold-sparkle-flourish">✦ ⚜ ✦</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

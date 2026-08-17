import React, { useState } from 'react';
import DustParticles from './DustParticles';
import NextArrowButton from './NextArrowButton';

export default function Page6ChittapaP123({ audioEnabled, onToggleAudio, onNextPage }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photoP123 = { src: '/photos/p123.jpg', alt: 'Chittapa Memory P123' };
  const photoP321 = { src: '/photos/p321.jpg', alt: 'Chittapa Memory P321' };

  return (
    <div className="page6-chittapa-p123-wrapper">
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

      {/* Main Scene: Left Image (p123), Center Card (P1, P2, P3), Right Image (p321) */}
      <div className="chittapa-p123-three-col-layout">
        {/* Left Side: p123 Image */}
        <div
          className="side-photo-frame left-photo-frame"
          onClick={() => setSelectedPhoto(photoP123)}
          title="Click to expand photo"
        >
          <div className="gold-molded-frame">
            <img src={photoP123.src} alt={photoP123.alt} className="side-photo-img" />
          </div>
          <span className="frame-corner-tag">✦-----✦</span>
        </div>

        {/* Center: P1, P2, P3 Wish Card */}
        <div className="chittapa-card-frame center-card-frame">
          <div className="card-ornament-top">⚜</div>

          {/* P1: Title */}
          <h1 className="chittapa-p1-title">
            Happy Birthday to my dearest Chittapa ❤️🎂
          </h1>

          <div className="golden-divider-line">
            <span className="line-arm" />
            <span className="diamond-center">✦</span>
            <span className="line-arm" />
          </div>

          {/* P2: Body Paragraph 1 */}
          <p className="chittapa-p2-text">
            “You are not just my uncle, but one of the people I look up to the most in my life. The love, support, guidance and confidence you have given me have always meant more to me than I can put into words.”
          </p>

          {/* P3: Body Paragraph 2 */}
          <p className="chittapa-p3-text">
            “A lot of who I am today is because of the people who stood by me, believed in me and showed me the right path—and you will always have a special place among them. ❤️”
          </p>

          <div className="card-ornament-bottom">⚜</div>
        </div>

        {/* Right Side: p321 Image */}
        <div
          className="side-photo-frame right-photo-frame"
          onClick={() => setSelectedPhoto(photoP321)}
          title="Click to expand photo"
        >
          <div className="gold-molded-frame">
            <img src={photoP321.src} alt={photoP321.alt} className="side-photo-img" />
          </div>
          <span className="frame-corner-tag">✦-----✦</span>
        </div>
      </div>

      {/* Next Arrow to Proceed to Page 7 (3D Hanging Gallery) */}
      {onNextPage && (
        <NextArrowButton onNextPage={onNextPage} />
      )}
    </div>
  );
}

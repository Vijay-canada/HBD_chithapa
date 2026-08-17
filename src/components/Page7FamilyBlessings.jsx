import React from 'react';
import DustParticles from './DustParticles';
import NextArrowButton from './NextArrowButton';
import { getAssetUrl } from '../utils/assets';

export default function Page7FamilyBlessings({ audioEnabled, onToggleAudio, onNextPage }) {
  return (
    <div className="page7-family-blessings-wrapper">
      {/* Background image limage.jpg with ambient vignette */}
      <div 
        className="blessings-bg-image" 
        style={{ backgroundImage: `url('${getAssetUrl('limage.jpg')}')` }}
      />
      <div className="blessings-dark-overlay" />
      
      {/* Dust particles for magical golden vibe */}
      <DustParticles litCount={4} />
      <div className="dynamic-lighting-overlay room-illumination-level-4" />

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

      {/* Main Quote Card on top of limage background */}
      <div className="blessings-content-container">
        <div className="blessings-quote-card">
          <div className="card-ornament-top">⚜</div>

          <h2 className="blessings-card-header">A Lifetime of Happiness</h2>

          <div className="golden-divider-line">
            <span className="line-arm" />
            <span className="diamond-center">✦</span>
            <span className="line-arm" />
          </div>

          <p className="blessings-quote-text">
            “May you always be happy, healthy, and blessed with lots of love and peace.
            Wishing you a beautiful life surrounded by our family and endless happy moments! ❤️✨”
          </p>

          <div className="golden-divider-line">
            <span className="line-arm" />
            <span className="diamond-center">❖</span>
            <span className="line-arm" />
          </div>

          <div className="card-ornament-bottom">⚜</div>
        </div>
      </div>

      {/* Next Button to proceed to Page 9 (Final Typing Journey) */}
      {onNextPage && (
        <NextArrowButton onNextPage={onNextPage} />
      )}
    </div>
  );
}

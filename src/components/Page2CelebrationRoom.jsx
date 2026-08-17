import React, { useState } from 'react';
import DustParticles from './DustParticles';
import RoundBirthdayCake from './RoundBirthdayCake';
import RoyalScroll from './RoyalScroll';
import NextArrowButton from './NextArrowButton';
import { playCelebrationFireworkSound } from '../utils/audio';

export default function Page2CelebrationRoom({
  litCandles,
  audioEnabled,
  onToggleAudio,
  onNextPage,
}) {
  const [showCelebrationSparks, setShowCelebrationSparks] = useState(false);
  const [scrollOpened, setScrollOpened] = useState(false);

  const handleOpenScroll = () => {
    setShowCelebrationSparks(true);
    setScrollOpened(true);
    playCelebrationFireworkSound();
  };

  return (
    <div className={`page2-celebration-wrapper ${showCelebrationSparks ? 'grand-celebration-active' : ''}`}>
      {/* Ambient Particles & Fireworks */}
      <DustParticles litCount={4} />

      {/* Dynamic Warm Candlelight Overlay */}
      <div className="dynamic-lighting-overlay room-illumination-level-4" />

      {/* Film Grain Noise */}
      <div className="film-grain-overlay"></div>

      {/* Minimalist Sound Toggle */}
      <div className="room-audio-toggle">
        <button
          className={`sound-btn ${audioEnabled ? 'active' : ''}`}
          onClick={onToggleAudio}
          aria-label={audioEnabled ? 'Mute Sound' : 'Enable Sound'}
        >
          {audioEnabled ? '🔊' : '🔇'}
        </button>
      </div>

      {/* Background Architecture (Same Vintage Room, Panned Angle) */}
      <div className="page2-room-wall">
        <div className="wallpaper-pattern"></div>
        <div className="wall-wainscoting"></div>

        {/* Two Vintage Framed Photos (WA0036, WA0038) on the Background Wall */}
        <div className="wall-photo-frame frame-left-p3">
          <div className="gold-ornate-border">
            <img src="/photos/WA0036.jpg" alt="Memory Photo" className="framed-photo-img" />
          </div>
        </div>

        <div className="wall-photo-frame frame-right-p3">
          <div className="gold-ornate-border">
            <img src="/photos/WA0038.jpg" alt="Memory Photo" className="framed-photo-img" />
          </div>
        </div>

        {/* Panned Window Background */}
        <div className="arch-window page2-window">
          <div className="moonlight-beam"></div>
          <div className="window-curtain curtain-left"></div>
          <div className="window-curtain curtain-right"></div>
        </div>
      </div>

      {/* Hero Table Scene (30-45 Degree Elevated View) */}
      <div className="page2-table-scene">
        <div className="hero-wooden-table">
          <div className="table-surface-texture"></div>
          <div className="table-beveled-edge"></div>

          {/* Table Objects Composition */}
          <div className="table-content-grid">
            {/* 1. Large Round Chocolate Birthday Cake with 4 Persistent Burning Candles */}
            <div className="cake-column">
              <RoundBirthdayCake litCandles={litCandles} />
            </div>

            {/* 2. Royal Vintage Message Scroll */}
            <div className="scroll-column">
              <RoyalScroll onOpenScroll={handleOpenScroll} />
            </div>
          </div>
        </div>
      </div>

      {/* Next Arrow to proceed to Page 4 (Photo Wall & Closing Wishes) after Scroll Opens */}
      {scrollOpened && onNextPage && (
        <NextArrowButton onNextPage={onNextPage} />
      )}
    </div>
  );
}



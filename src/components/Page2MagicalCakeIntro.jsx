import React from 'react';
import DustParticles from './DustParticles';

export default function Page2MagicalCakeIntro({ onEnter, audioEnabled, onToggleAudio }) {
  return (
    <div className="page2-magical-cake-wrapper">
      {/* Soft Ambient Particles & Warm Lighting */}
      <DustParticles litCount={2} />
      <div className="film-grain-overlay" />
      <div className="dynamic-lighting-overlay room-illumination-level-2" />

      {/* Audio Toggle Button */}
      <div className="room-audio-toggle">
        <button
          className={`sound-btn ${audioEnabled ? 'active' : ''}`}
          onClick={onToggleAudio}
          aria-label={audioEnabled ? 'Mute Sound' : 'Enable Sound'}
        >
          {audioEnabled ? '🔊' : '🔇'}
        </button>
      </div>

      {/* Main Cake Intro Scene */}
      <div className="cake-intro-scene">
        {/* Two Subtly Placed Vintage Framed Photos (WA0031, WA0032) */}
        <div className="vintage-frame-accent frame-left">
          <div className="gold-ornate-border">
            <img src="/photos/WA0031.jpg" alt="Memory Accent" className="framed-photo-img" />
          </div>
        </div>

        <div className="vintage-frame-accent frame-right">
          <div className="gold-ornate-border">
            <img src="/photos/WA0032.jpg" alt="Memory Accent" className="framed-photo-img" />
          </div>
        </div>

        {/* Coded Glowing Illustrated Cake with Soft Breathing Aura */}
        <div className="coded-glowing-cake-container">
          <div className="cake-breathing-aura" />
          <svg className="coded-cake-svg" viewBox="0 0 240 240">
            <defs>
              <radialGradient id="cakeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffd700" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#ffaa00" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ffaa00" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="cakeGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd700" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#8c5828" />
              </linearGradient>
            </defs>

            {/* Cake Pedestal */}
            <path d="M 40 190 Q 120 210, 200 190 L 180 205 Q 120 220, 60 205 Z" fill="url(#cakeGold)" />

            {/* Cake Bottom Layer */}
            <path d="M 50 140 Q 120 160, 190 140 L 190 185 Q 120 205, 50 185 Z" fill="#231208" stroke="#d4af37" strokeWidth="2" />
            <path d="M 50 140 Q 120 160, 190 140" fill="none" stroke="#f7d6c8" strokeWidth="6" strokeDasharray="8 6" />

            {/* Cake Top Layer */}
            <path d="M 70 100 Q 120 115, 170 100 L 170 140 Q 120 155, 70 140 Z" fill="#150a04" stroke="#d4af37" strokeWidth="2" />
            <path d="M 70 100 Q 120 115, 170 100" fill="none" stroke="#ffb6c1" strokeWidth="5" />

            {/* Piped Frosting Drips */}
            <path d="M 70 100 Q 75 112, 80 100 Q 90 118, 95 100 Q 105 115, 110 100 Q 120 120, 125 100 Q 135 114, 140 100 Q 150 118, 155 100 Q 165 112, 170 100" fill="#381b0e" />

            {/* Glowing Center Candle & Flame */}
            <rect x="116" y="65" width="8" height="35" rx="3" fill="#fff5e6" stroke="#d4af37" strokeWidth="1" />
            <ellipse cx="120" cy="52" rx="7" ry="14" fill="#ffaa00" className="svg-flame-pulse" />
            <ellipse cx="120" cy="54" rx="4" ry="8" fill="#ffffff" />
            <circle cx="120" cy="52" r="25" fill="url(#cakeGlow)" className="svg-aura-pulse" />
          </svg>
        </div>

        {/* Vintage Aged Brass Enter Button */}
        <div className="intro-enter-button-wrapper">
          <button className="vintage-brass-enter-btn" onClick={onEnter} aria-label="Enter Vintage Birthday Experience">
            <span className="btn-inner-border">
              <span className="btn-text">Enter</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

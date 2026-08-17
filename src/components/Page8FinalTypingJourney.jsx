import React, { useState, useEffect } from 'react';
import DustParticles from './DustParticles';

const POEM_TEXT = `Journey continues,
memories continue,
your support continues,
your love continues,
and this beautiful bond
will continue till the very end. ❤️

One last time , wish you an unforgettable birthday and stay safe ❤️`;

export default function Page8FinalTypingJourney({ audioEnabled, onToggleAudio, onRestart }) {
  const [typedIndex, setTypedIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (typedIndex < POEM_TEXT.length) {
      const timer = setTimeout(() => {
        setTypedIndex((prev) => prev + 1);
      }, 42); // speed of typewriter
      return () => clearTimeout(timer);
    } else {
      setIsFinished(true);
    }
  }, [typedIndex]);

  const currentText = POEM_TEXT.slice(0, typedIndex);

  return (
    <div className="page8-typing-journey-wrapper">
      {/* Soft Ambient Particles & Glitter Lighting */}
      <DustParticles litCount={4} />
      <div className="dynamic-lighting-overlay room-illumination-level-4" />
      <div className="film-grain-overlay" />

      {/* Floating Sparkles / Glitters */}
      <div className="glitter-sparkles-container">
        {[...Array(16)].map((_, i) => (
          <span key={i} className={`sparkle-dot spark-${i % 4}`} />
        ))}
      </div>

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

      {/* Main Container */}
      <div className="typing-journey-content">
        <div className="journey-card">
          <div className="card-ornament-top">⚜</div>

          {/* Title */}
          <h1 className="journey-main-title">
            A Journey That Never Ends
          </h1>

          <div className="golden-divider-line">
            <span className="line-arm" />
            <span className="diamond-center">✦</span>
            <span className="line-arm" />
          </div>

          {/* Typewritten Body */}
          <div className="typewriter-poem-box">
            <p className="typed-text-content">
              {currentText}
              {!isFinished && <span className="glitter-typing-cursor">✨</span>}
            </p>
          </div>

          <div className="golden-divider-line">
            <span className="line-arm" />
            <span className="diamond-center">❖</span>
            <span className="line-arm" />
          </div>

          <div className="card-ornament-bottom">⚜</div>
        </div>

        {/* Replay Button shown after typing completes */}
        {isFinished && onRestart && (
          <button
            className="goldBtn replay-journey-btn"
            onClick={onRestart}
            aria-label="Replay Experience"
          >
            🔄 Replay Experience
          </button>
        )}
      </div>
    </div>
  );
}

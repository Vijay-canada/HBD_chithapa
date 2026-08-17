import React, { useRef } from 'react';
import Candle from './Candle';
import DustParticles from './DustParticles';
import { getAssetUrl } from '../utils/assets';

export default function VintageRoom({
  litCandles,
  onLightCandle,
  audioEnabled,
  onToggleAudio,
}) {
  const litCount = litCandles.filter(Boolean).length;
  const allLit = litCount === 4;
  const candleRefs = useRef([]);

  const registerCandleRef = (el, index) => {
    candleRefs.current[index] = el;
  };

  const roomLightClass = `room-illumination-level-${litCount}`;

  return (
    <div className={`vintage-room-wrapper ${roomLightClass} ${allLit ? 'room-all-lit' : ''}`}>
      {/* Dust Particles & Celebration Golden Sparks */}
      <DustParticles litCount={litCount} />

      {/* Dynamic Radial Candle Light Aura Overlay */}
      <div
        className="dynamic-lighting-overlay"
        style={{ '--lit-count': litCount }}
      />

      {/* Film Grain Vintage Overlay */}
      <div className="film-grain-overlay"></div>

      {/* Subtle Sound Toggle */}
      <div className="room-audio-toggle">
        <button
          className={`sound-btn ${audioEnabled ? 'active' : ''}`}
          onClick={onToggleAudio}
          aria-label={audioEnabled ? 'Mute Sound' : 'Enable Sound'}
        >
          {audioEnabled ? '🔊' : '🔇'}
        </button>
      </div>

      {/* Main Room Scene Container */}
      <div className="room-scene">
        {/* Wall & Environment Architecture */}
        <div className="room-wall">
          <div className="wallpaper-pattern"></div>
          <div className="wall-wainscoting"></div>

          {/* Two Vintage Framed Photos (WA0033, WA0034) on the Room Wall/Shelf */}
          <div className="wall-photo-frame frame-left-wall">
            <div className="gold-ornate-border">
              <img src={getAssetUrl('photos/WA0033.jpg')} alt="Memory Photo" className="framed-photo-img" />
            </div>
          </div>

          <div className="wall-photo-frame frame-right-wall">
            <div className="gold-ornate-border">
              <img src={getAssetUrl('photos/WA0034.jpg')} alt="Memory Photo" className="framed-photo-img" />
            </div>
          </div>

          {/* Arched Window with Soft Moonlight Beam */}
          <div className="arch-window">
            <div className="moonlight-beam"></div>
            <div className="window-frame"></div>
            <div className="window-curtain curtain-left"></div>
            <div className="window-curtain curtain-right"></div>
          </div>
        </div>

        {/* 1. INITIAL SCREEN — INTRO DEDICATION TEXT STAYS VISIBLE & WARMS UP WITH LIGHT */}
        <div className={`intro-dedication-wrapper candle-lit-level-${litCount}`}>
          <div className="framed-intro-card">
            <div className="card-ornament top-ornament">❖</div>
            <p className="intro-handwritten">
              “This is a small gift from your dear Vijay, with lots of love.”
            </p>
            <div className="card-ornament bottom-ornament">❖</div>
          </div>
        </div>

        {/* 4 Physical Candles Positioned Naturally — Click/Tap Directly to Light */}
        <div className="responsive-candles-container">
          <div className="candle-cell cell-1">
            <Candle
              id={0}
              number={1}
              isLit={litCandles[0]}
              onLight={onLightCandle}
              height="tall"
              registerRef={registerCandleRef}
            />
          </div>

          <div className="candle-cell cell-2">
            <Candle
              id={1}
              number={2}
              isLit={litCandles[1]}
              onLight={onLightCandle}
              height="medium"
              registerRef={registerCandleRef}
            />
          </div>

          <div className="candle-cell cell-3">
            <Candle
              id={2}
              number={3}
              isLit={litCandles[2]}
              onLight={onLightCandle}
              height="short"
              registerRef={registerCandleRef}
            />
          </div>

          <div className="candle-cell cell-4">
            <Candle
              id={3}
              number={4}
              isLit={litCandles[3]}
              onLight={onLightCandle}
              height="normal"
              registerRef={registerCandleRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}



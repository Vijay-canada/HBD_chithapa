import React from 'react';
import Candle from './Candle';
import { getAssetUrl } from '../utils/assets';

export default function RoundBirthdayCake() {
  return (
    <div className="round-cake-display-wrapper">
      {/* 4 PERSISTENT LIT CANDLES CARRIED OVER FROM PAGE 2 */}
      <div className="cake-candles-array-back">
        <div className="cake-candle-spot spot-top-left">
          <Candle id={0} number={1} isLit={true} onLight={() => { }} height="tall" />
        </div>
        <div className="cake-candle-spot spot-top-right">
          <Candle id={1} number={2} isLit={true} onLight={() => { }} height="medium" />
        </div>
      </div>

      {/* Birthday Cake Image 43181.jpg Container */}
      <div className="cake-image-display-container">
        <img
          src={getAssetUrl('1786960004749.png')}
          alt="Happy Birthday Chocolate Cake"
          className="hero-cake-image"
        />
        <div className="cake-image-warm-shadow"></div>
      </div>

      {/* Front Candles Flanking Table Corners */}
      <div className="cake-candles-array-front">
        <div className="cake-candle-spot spot-bottom-left">
          <Candle id={2} number={3} isLit={true} onLight={() => { }} height="short" />
        </div>
        <div className="cake-candle-spot spot-bottom-right">
          <Candle id={3} number={4} isLit={true} onLight={() => { }} height="normal" />
        </div>
      </div>
    </div>
  );
}


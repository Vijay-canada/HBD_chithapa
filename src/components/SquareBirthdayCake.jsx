import React from 'react';
import Candle from './Candle';

export default function SquareBirthdayCake({ litCandles }) {
  return (
    <div className="square-cake-display-wrapper">
      {/* 4 PERSISTENT CANDLES FROM PAGE 1 STILL BURNING CONTINUOUSLY AROUND THE CAKE */}
      <div className="cake-candles-array">
        <div className="cake-candle-spot spot-top-left">
          <Candle id={0} number={1} isLit={true} onLight={() => {}} height="tall" />
        </div>
        <div className="cake-candle-spot spot-top-right">
          <Candle id={1} number={2} isLit={true} onLight={() => {}} height="medium" />
        </div>
      </div>

      {/* Antique Wooden Cake Pedestal / Stand */}
      <div className="vintage-cake-stand">
        {/* Main Square Cake */}
        <div className="square-birthday-cake glossy-black-cake">
          {/* Chocolate Side Drips */}
          <div className="chocolate-drips-container">
            <div className="c-drip cd-1"></div>
            <div className="c-drip cd-2"></div>
            <div className="c-drip cd-3"></div>
            <div className="c-drip cd-4"></div>
            <div className="c-drip cd-5"></div>
            <div className="c-drip cd-6"></div>
          </div>

          {/* Glossy Black Top Surface */}
          <div className="cake-top-surface glossy-dark-glaze">
            {/* Piped Creamy Rosette Borders */}
            <div className="piped-border border-top"></div>
            <div className="piped-border border-bottom"></div>
            <div className="piped-border border-left"></div>
            <div className="piped-border border-right"></div>

            {/* Sugar Roses Group */}
            <div className="sugar-roses-group">
              <span className="rose rose-cream" title="Piped Cream Rose">🌹</span>
              <span className="rose rose-pink" title="Pink Frosting Rose">🌹</span>
              <span className="rose rose-cream" title="Piped Cream Rose">🌹</span>
            </div>

            {/* Frosting Inscription */}
            <div className="cake-frosting-inscription">
              <span className="frosting-word">Happy Birthday</span>
              <span className="frosting-name">Chittapa</span>
            </div>
          </div>

          {/* 3D Cake Body Layer Sides */}
          <div className="cake-side side-front">
            <div className="gold-accent-line"></div>
            <div className="cake-texture-grain"></div>
          </div>
          <div className="cake-side side-right">
            <div className="gold-accent-line"></div>
          </div>
        </div>
      </div>

      {/* Front Candles Flanking Bottom Corners */}
      <div className="cake-candles-array-front">
        <div className="cake-candle-spot spot-bottom-left">
          <Candle id={2} number={3} isLit={true} onLight={() => {}} height="short" />
        </div>
        <div className="cake-candle-spot spot-bottom-right">
          <Candle id={3} number={4} isLit={true} onLight={() => {}} height="normal" />
        </div>
      </div>
    </div>
  );
}


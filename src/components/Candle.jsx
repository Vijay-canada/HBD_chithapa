import React, { useState } from 'react';

export default function Candle({
  id,
  number,
  isLit,
  onLight,
  height = 'normal',
  registerRef,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!isLit) {
      onLight(id);
    }
  };

  return (
    <div
      ref={(el) => registerRef && registerRef(el, id)}
      className={`candle-wrapper height-${height} ${isLit ? 'is-lit' : 'is-unlit'} ${
        isHovered ? 'candle-hovered' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Candle ${number} ${isLit ? 'lit' : 'unlit'}`}
    >
      {/* Flame & Light Halo (when lit) */}
      {isLit && (
        <div className="candle-flame-container">
          <div className="flame-aura"></div>
          <div className="flame-inner-halo"></div>

          <div className="candle-flame">
            <div className="flame-outer"></div>
            <div className="flame-middle"></div>
            <div className="flame-core"></div>
            <div className="flame-blue-base"></div>
          </div>
        </div>
      )}

      {/* Wick */}
      <div className={`candle-wick ${isHovered ? 'wick-glowing' : ''}`}>
        {!isLit && <div className="wick-ember-spark"></div>}
      </div>

      {/* Vintage Candle Body */}
      <div className="candle-body">
        <div className="wax-top-lip"></div>
        <div className="wax-drips">
          <div className="drip drip-1"></div>
          <div className="drip drip-2"></div>
        </div>
        <div className="wax-texture"></div>
      </div>

      {/* Brass Holder */}
      <div className="candle-stand">
        <div className="stand-rim"></div>
        <div className="stand-base"></div>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';

export default function Page1IntroLanding({ onEnter }) {
  const [activeScene, setActiveScene] = useState(1);
  const [isBlowing, setIsBlowing] = useState(false);
  const [isCakeCut, setIsCakeCut] = useState(false);
  const particlesRef = useRef(null);

  // Particles generator
  useEffect(() => {
    const container = particlesRef.current;
    if (!container || container.children.length > 0) return;

    for (let i = 0; i < 90; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (8 + Math.random() * 12) + 's';
      p.style.animationDelay = Math.random() * 10 + 's';
      container.appendChild(p);
    }
  }, []);

  // Confetti generator helper
  const triggerConfetti = () => {
    for (let i = 0; i < 150; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = `hsl(${Math.random() * 360}, 80%, 65%)`;
      c.style.animationDuration = (3 + Math.random() * 4) + 's';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 7000);
    }
  };

  // Fireworks generator helper
  const triggerFireworks = () => {
    for (let i = 0; i < 20; i++) {
      const f = document.createElement('div');
      f.className = 'firework';
      f.style.top = (10 + Math.random() * 50) + '%';
      f.style.left = (5 + Math.random() * 90) + '%';
      f.style.animationDelay = Math.random() + 's';
      document.body.appendChild(f);
      setTimeout(() => f.remove(), 3000);
    }
  };

  // Blow candles handler in Scene 2
  const handleBlowCandles = () => {
    setIsBlowing(true);
    triggerConfetti();
    setTimeout(() => {
      setActiveScene(3);
    }, 1600);
  };

  // Cut cake handler in Scene 3
  const handleCutCake = () => {
    setIsCakeCut(true);
    setTimeout(() => {
      triggerConfetti();
      triggerFireworks();
    }, 1000);
  };

  return (
    <div className="page1-intro-landing-wrapper">
      {/* Floating Gold Particles */}
      <div id="particles" ref={particlesRef} />

      {/* SCENE 1 — TITLE INTRO */}
      <section className={`scene scene1 ${activeScene === 1 ? 'active' : ''}`} id="scene1">
        <div className="moonGlow" />
        <div className="content">
          <div className="eyebrow">
            A Special Night • A Special Person
          </div>

          <div className="title">
            Happy Birthday
            <br />
            Chittapa
          </div>

          <div className="subtitle">
            Some people make life beautiful simply by being there.
            <br /><br />
            Tonight isn't just about a birthday...
            <br /><br />
            It's about celebrating the wonderful person you are and the happiness you bring to our family.
          </div>

          <button className="goldBtn" onClick={() => setActiveScene(2)} aria-label="Open Your Surprise">
            ✨ Open Your Surprise
          </button>
        </div>
      </section>

      {/* SCENE 2 — LIGHTS & BLOW CANDLES */}
      <section className={`scene scene2 ${activeScene === 2 ? 'active' : ''}`} id="scene2">
        <div className="lightLine">
          <div className="bulb" style={{ left: '5%' }} />
          <div className="bulb" style={{ left: '15%' }} />
          <div className="bulb" style={{ left: '25%' }} />
          <div className="bulb" style={{ left: '35%' }} />
          <div className="bulb" style={{ left: '45%' }} />
          <div className="bulb" style={{ left: '55%' }} />
          <div className="bulb" style={{ left: '65%' }} />
          <div className="bulb" style={{ left: '75%' }} />
          <div className="bulb" style={{ left: '85%' }} />
          <div className="bulb" style={{ left: '95%' }} />
        </div>

        <div className="firework" style={{ top: '20%', left: '20%' }} />
        <div className="firework" style={{ top: '28%', right: '20%', animationDelay: '0.6s' }} />
        <div className="firework" style={{ top: '15%', left: '70%', animationDelay: '1s' }} />

        <div className="content">
          <div className="eyebrow">
            The celebration begins...
          </div>

          <div className="blowTitle">
            Before the cake...
            <br />
            <strong>Make the lights shine! ✨</strong>
          </div>

          <div className="candles">
            {[0, 1, 2, 3].map((idx) => (
              <div key={idx} className="candle">
                <div
                  className="flame"
                  style={{
                    opacity: isBlowing ? 0 : 1,
                    transform: isBlowing ? 'scale(0) rotate(20deg)' : 'none',
                    transitionDelay: `${idx * 120}ms`
                  }}
                />
              </div>
            ))}
          </div>

          <div className="blowText">
            Close your eyes • Make a wish • Blow!
          </div>

          <button className="goldBtn" onClick={handleBlowCandles} aria-label="Blow the Candles">
            💨 Blow the Candles
          </button>
        </div>
      </section>

      {/* SCENE 3 — CUT THE CAKE & FINAL WISH */}
      <section className={`scene scene3 ${activeScene === 3 ? 'active' : ''}`} id="scene3">
        <div className="content">
          <div className="eyebrow">
            The moment we've been waiting for
          </div>

          <div className="title" style={{ fontSize: 'clamp(42px, 8vw, 75px)' }}>
            Make A Wish 🎂
          </div>

          {/* Premium 3D Illustrated Birthday Cake */}
          <div className="premium-scene3-cake-container">
            <svg className="premium-cake-svg" viewBox="0 0 320 280">
              <defs>
                <radialGradient id="cakeAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffd700" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ffaa00" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ffaa00" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="goldPedestal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffeeaa" />
                  <stop offset="40%" stopColor="#d4af37" />
                  <stop offset="70%" stopColor="#aa7c11" />
                  <stop offset="100%" stopColor="#5a3d07" />
                </linearGradient>

                <linearGradient id="chocBottom" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4a2612" />
                  <stop offset="60%" stopColor="#2c1408" />
                  <stop offset="100%" stopColor="#170903" />
                </linearGradient>

                <linearGradient id="chocTop" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5c3118" />
                  <stop offset="60%" stopColor="#381a0b" />
                  <stop offset="100%" stopColor="#1e0c04" />
                </linearGradient>

                <linearGradient id="creamGlaze" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff8e7" />
                  <stop offset="50%" stopColor="#f3e0be" />
                  <stop offset="100%" stopColor="#d2b079" />
                </linearGradient>

                <linearGradient id="cherryRed" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff4d4d" />
                  <stop offset="70%" stopColor="#b30000" />
                  <stop offset="100%" stopColor="#4d0000" />
                </linearGradient>

                <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#ffea00" />
                  <stop offset="70%" stopColor="#ff6600" />
                  <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* 1. Golden Pedestal Base */}
              <ellipse cx="160" cy="255" rx="120" ry="15" fill="rgba(0,0,0,0.6)" />
              <path d="M 70 230 Q 160 250, 250 230 L 230 248 Q 160 262, 90 248 Z" fill="url(#goldPedestal)" />
              <ellipse cx="160" cy="230" rx="90" ry="10" fill="#d4af37" />
              <path d="M 140 230 L 145 250 L 175 250 L 180 230 Z" fill="url(#goldPedestal)" />
              <ellipse cx="160" cy="250" rx="35" ry="6" fill="#8c681b" />

              {/* 2. Cake Bottom Layer (Tier 1) */}
              <path d="M 50 160 Q 160 185, 270 160 L 270 220 Q 160 245, 50 220 Z" fill="url(#chocBottom)" stroke="#d4af37" strokeWidth="1.5" />
              <ellipse cx="160" cy="160" rx="110" ry="22" fill="#582d15" stroke="#d4af37" strokeWidth="1.5" />
              <path d="M 50 160 Q 160 185, 270 160" fill="none" stroke="url(#creamGlaze)" strokeWidth="6" strokeDasharray="10 8" opacity="0.95" />

              {/* 3. Cake Top Layer (Tier 2) */}
              <path d="M 75 105 Q 160 126, 245 105 L 245 160 Q 160 181, 75 160 Z" fill="url(#chocTop)" stroke="#d4af37" strokeWidth="1.5" />
              <ellipse cx="160" cy="105" rx="85" ry="18" fill="#6d391b" stroke="#d4af37" strokeWidth="1.5" />

              {/* Top Layer Cream Drips */}
              <path d="M 75 105 Q 85 125, 95 105 Q 110 132, 120 105 Q 135 128, 145 105 Q 160 135, 175 105 Q 190 126, 200 105 Q 215 130, 225 105 Q 235 122, 245 105 L 245 108 Q 160 129, 75 108 Z" fill="url(#creamGlaze)" />

              {/* Cherries on Top */}
              <circle cx="95" cy="100" r="7" fill="url(#cherryRed)" />
              <circle cx="160" cy="98" r="7.5" fill="url(#cherryRed)" />
              <circle cx="225" cy="100" r="7" fill="url(#cherryRed)" />

              {/* 4. Three 3D Candles & Pulsing Flames */}
              {/* Candle 1 (Left) */}
              <rect x="112" y="65" width="10" height="36" rx="3" fill="#fffdf5" stroke="#d4af37" strokeWidth="1" />
              <path d="M 112 65 L 122 72 L 122 75 L 112 68 Z" fill="#d4af37" opacity="0.6" />
              <path d="M 112 78 L 122 85 L 122 88 L 112 81 Z" fill="#d4af37" opacity="0.6" />
              <line x1="117" y1="65" x2="117" y2="58" stroke="#333" strokeWidth="1.5" />
              {!isCakeCut && (
                <g className="candle-flame-group">
                  <ellipse cx="117" cy="48" rx="7" ry="14" fill="url(#flameGlow)" className="svg-flame-pulse" />
                  <ellipse cx="117" cy="50" rx="3.5" ry="8" fill="#ffffff" />
                  <circle cx="117" cy="48" r="22" fill="url(#cakeAura)" className="svg-aura-pulse" />
                </g>
              )}

              {/* Candle 2 (Center) */}
              <rect x="155" y="58" width="10" height="38" rx="3" fill="#fffdf5" stroke="#d4af37" strokeWidth="1" />
              <path d="M 155 58 L 165 65 L 165 68 L 155 61 Z" fill="#d4af37" opacity="0.6" />
              <path d="M 155 71 L 165 78 L 165 81 L 155 74 Z" fill="#d4af37" opacity="0.6" />
              <line x1="160" y1="58" x2="160" y2="50" stroke="#333" strokeWidth="1.5" />
              {!isCakeCut && (
                <g className="candle-flame-group">
                  <ellipse cx="160" cy="40" rx="8" ry="15" fill="url(#flameGlow)" className="svg-flame-pulse" />
                  <ellipse cx="160" cy="42" rx="4" ry="9" fill="#ffffff" />
                  <circle cx="160" cy="40" r="26" fill="url(#cakeAura)" className="svg-aura-pulse" />
                </g>
              )}

              {/* Candle 3 (Right) */}
              <rect x="198" y="65" width="10" height="36" rx="3" fill="#fffdf5" stroke="#d4af37" strokeWidth="1" />
              <path d="M 198 65 L 208 72 L 208 75 L 198 68 Z" fill="#d4af37" opacity="0.6" />
              <path d="M 198 78 L 208 85 L 208 88 L 198 81 Z" fill="#d4af37" opacity="0.6" />
              <line x1="203" y1="65" x2="203" y2="58" stroke="#333" strokeWidth="1.5" />
              {!isCakeCut && (
                <g className="candle-flame-group">
                  <ellipse cx="203" cy="48" rx="7" ry="14" fill="url(#flameGlow)" className="svg-flame-pulse" />
                  <ellipse cx="203" cy="50" rx="3.5" ry="8" fill="#ffffff" />
                  <circle cx="203" cy="48" r="22" fill="url(#cakeAura)" className="svg-aura-pulse" />
                </g>
              )}
            </svg>

            {/* Cutting Knife Animation */}
            <div className={`premium-cutting-knife ${isCakeCut ? 'is-cutting' : ''}`}>
              <div className="knife-silver-blade" />
              <div className="knife-gold-hilt" />
            </div>
          </div>

          {!isCakeCut ? (
            <div id="cakeInstruction">
              <div className="subtitle">
                Close your eyes...
                <br /><br />
                Think of everything that makes you happy.
                <br /><br />
                Now make your wish. ❤️
              </div>

              <div className="final-action-buttons-group" style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                <button className="goldBtn" onClick={handleCutCake} aria-label="Cut The Cake">
                  🔪 Cut The Cake
                </button>
                <button className="goldBtn" onClick={() => onEnter(2)} aria-label="View More Surprise">
                  ✨ View More Surprise
                </button>
              </div>
            </div>
          ) : (
            <div id="finalMessage">
              <div className="finalHeart">❤️</div>

              <div className="title" style={{ fontSize: 'clamp(35px, 7vw, 65px)' }}>
                Happy Birthday
                <br />
                Chittapa!
              </div>

              <div className="subtitle">
                May your life always be filled with happiness, good health, peace and success.
                <br /><br />
                May every year bring you more beautiful memories with the people you love.
                <br /><br />
                And may your home always be filled with laughter, love and togetherness.
              </div>

              <div className="signature">
                A small gift from your Vijay, with lots of love. ❤️
              </div>

              <div className="final-action-buttons-group" style={{ marginTop: '25px', display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                <button
                  className="goldBtn"
                  onClick={() => onEnter(2)}
                  aria-label="View More Surprise"
                >
                  ✨ View More Surprise
                </button>
                <button
                  className="goldBtn"
                  onClick={() => onEnter(3)}
                  aria-label="Enter Candle Room"
                >
                  🕯️ Enter Candle Room
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}




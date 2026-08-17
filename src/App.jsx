import React, { useState } from 'react';
import Page1IntroLanding from './components/Page1IntroLanding';
import Page2MagicalCakeIntro from './components/Page2MagicalCakeIntro';
import VintageRoom from './components/VintageRoom';
import Page2CelebrationRoom from './components/Page2CelebrationRoom';
import Page4ClosingWishes from './components/Page4ClosingWishes';
import Page6ChittapaP123 from './components/Page6ChittapaP123';
import Page5HangingWallGallery from './components/Page5HangingWallGallery';
import Page7FamilyBlessings from './components/Page7FamilyBlessings';
import Page8FinalTypingJourney from './components/Page8FinalTypingJourney';
import NextArrowButton from './components/NextArrowButton';
import {
  setAudioEnabled,
  playCandleIgniteSound,
} from './utils/audio';
import './index.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [litCandles, setLitCandles] = useState([false, false, false, false]);
  const [audioEnabled, setAudioState] = useState(false);

  const litCount = litCandles.filter(Boolean).length;
  const isPage3Finished = litCount === 4;

  // Light Candle Handler for Page 3
  const handleLightCandle = (index) => {
    if (!litCandles[index]) {
      setLitCandles((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
      playCandleIgniteSound();
    }
  };

  // Seamless 1.2s Camera Transition
  const handleNextPage = (targetPage) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const nextPageTarget = typeof targetPage === 'number' ? targetPage : (currentPage + 1);

    setTimeout(() => {
      setCurrentPage(nextPageTarget);
      setIsTransitioning(false);
    }, 1200);
  };

  // Audio Toggle Handler
  const handleToggleAudio = () => {
    const nextState = !audioEnabled;
    setAudioState(nextState);
    setAudioEnabled(nextState);
  };

  return (
    <main className={`app-main-viewport ${isTransitioning ? 'is-camera-transitioning' : ''}`}>
      {/* PAGE 1: ELEGANT GOLD-TEXT TITLE INTRO */}
      {currentPage === 1 && (
        <Page1IntroLanding onEnter={handleNextPage} />
      )}

      {/* PAGE 2: MAGICAL CAKE INTRO / LANDING SCREEN */}
      {currentPage === 2 && (
        <Page2MagicalCakeIntro
          onEnter={handleNextPage}
          audioEnabled={audioEnabled}
          onToggleAudio={handleToggleAudio}
        />
      )}

      {/* PAGE 3: VINTAGE ROOM + 4 CANDLES (DIRECT CLICK TO LIGHT) */}
      {currentPage === 3 && (
        <>
          <VintageRoom
            litCandles={litCandles}
            onLightCandle={handleLightCandle}
            audioEnabled={audioEnabled}
            onToggleAudio={handleToggleAudio}
          />
          {/* Show Vintage Next Arrow after Page 3 candles are all lit */}
          {isPage3Finished && (
            <NextArrowButton onNextPage={handleNextPage} />
          )}
        </>
      )}

      {/* PAGE 4: CAKE + ROYAL SCROLL */}
      {currentPage === 4 && (
        <Page2CelebrationRoom
          litCandles={litCandles}
          audioEnabled={audioEnabled}
          onToggleAudio={handleToggleAudio}
          onNextPage={handleNextPage}
        />
      )}

      {/* PAGE 5: MILLIONAIRE HUSBAND DEDICATION CARD & PHOTOS */}
      {currentPage === 5 && (
        <Page4ClosingWishes
          audioEnabled={audioEnabled}
          onToggleAudio={handleToggleAudio}
          onNextPage={handleNextPage}
        />
      )}

      {/* PAGE 6: CHITTAPA P1, P2, P3 & LEFT (p123) / RIGHT (p321) PHOTOS */}
      {currentPage === 6 && (
        <Page6ChittapaP123
          audioEnabled={audioEnabled}
          onToggleAudio={handleToggleAudio}
          onNextPage={handleNextPage}
        />
      )}

      {/* PAGE 7: CHITTAPA P4, P5, P6 3D HANGING WALL CARDS GALLERY */}
      {currentPage === 7 && (
        <Page5HangingWallGallery
          audioEnabled={audioEnabled}
          onToggleAudio={handleToggleAudio}
          onNextPage={handleNextPage}
        />
      )}

      {/* PAGE 8: LIMAGE BACKGROUND + FAMILY BLESSINGS QUOTE */}
      {currentPage === 8 && (
        <Page7FamilyBlessings
          audioEnabled={audioEnabled}
          onToggleAudio={handleToggleAudio}
          onNextPage={handleNextPage}
        />
      )}

      {/* PAGE 9 (FINAL): A JOURNEY THAT NEVER ENDS - LETTER BY LETTER TYPING WITH GLITTERS */}
      {currentPage === 9 && (
        <Page8FinalTypingJourney
          audioEnabled={audioEnabled}
          onToggleAudio={handleToggleAudio}
          onRestart={() => handleNextPage(1)}
        />
      )}
    </main>
  );
}

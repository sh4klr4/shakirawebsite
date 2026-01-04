import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background from '../components/Background';
import MainScene from '../components/Model3D/MainScene';
import Navigation from '../components/UI/Navigation';
import Crosses from '../components/UI/Crosses';
import LoadingScreen from '../components/LoadingScreen';

import ArtPage from './ArtPage';
import CodePage from './CodePage';
import InfoPage from './InfoPage';
import UIUXPage from './UIUXPage';
import ContactPage from './ContactPage';
import Footer from '../components/UI/Footer';
import IDCard from '../components/IDCard';
import flowertransparent from '../assets/images/artimages/flowertransparent.webm';

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState(null);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      if (!window.location.hash) {
        setCurrentSection(null);
      } else {
        const section = window.location.hash.replace('#', '');
        setCurrentSection(section);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigation = (section) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentSection(section);
    window.history.pushState(null, '', `#${section}`);
  };

  const handleClose = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentSection(null);
    window.history.pushState(null, '', ' '); 
  };

  return (
    <>
      {/* 1. Hintergrund & 3D Szene müssen IMMER da sein, damit sie laden können */}
      <Background />
      
      {/* WICHTIG: MainScene ist außerhalb von AnimatePresence.
          Wir steuern die Sichtbarkeit über CSS (opacity), 
          damit sie im Hintergrund lädt, aber erst erscheint, wenn bereit.
      */}
      <div style={{ 
        opacity: isAppReady ? 1 : 0, 
        transition: 'opacity 1.5s ease-in-out',
        position: 'absolute',
        width: '100%',
        height: '100%'
      }}>
        <Suspense fallback={null}>
          <MainScene />
        </Suspense>
      </div>

      {/* 2. Loader meldet, wenn die Szene (die oben gerade lädt) fertig ist */}
      <LoadingScreen onFinished={() => setIsAppReady(true)} />

      {/* 3. NUR die UI-Elemente werden erst gerendert, wenn isAppReady true ist */}
      <AnimatePresence>
        {isAppReady && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* UI Layer */}
            <Navigation onNavigate={handleNavigation} currentSection={currentSection} />
            <Crosses currentSection={currentSection} onClose={handleClose} />
            
            {/* --- CONTENT LAYER --- */}
            {currentSection === 'art' && (
              <>
                <ArtPage />
                {/* Footer wird unter ArtPage gerendert */}
                <Footer onNavigate={handleNavigation} />
              </>
            )}
            
            {currentSection === 'code' && (
              <>
                <CodePage />
                <Footer onNavigate={handleNavigation} />
              </>
            )}
            
            {currentSection === 'info' && (
              <>
                <InfoPage />
                <Footer onNavigate={handleNavigation} />
              </>
            )}
            
            {currentSection === 'uiux' && (
              <>
                <UIUXPage />
                <Footer onNavigate={handleNavigation} />
              </>
            )}
            
            {currentSection === 'contact' && (
                <ContactPage onNavigate={handleNavigation} />
            )}

      {/* --- HOMEPAGE CONTENT --- */}
      {!currentSection && (
        <div style={{  width: '100%' }}>
            <div style={{ height: '155vh' }}></div>

      {/* VIDEO CONTAINER: Absolut positioniert */}
      <div 
        style={{ 
          width: '500px',        // Deine gewünschte Breite
          height: '500px',       // Deine gewünschte Höhe
          overflow: 'hidden',    // WICHTIG: Alles was übersteht, wird abgeschnitten
          position: 'absolute',  // Deine Positionierung von vorhin
          top: '105vh',
          left: '15%',
          zIndex: '50',
        }}
      >   
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',   // Füllt die Box komplett aus
              transform: 'scale(1.5)' // WICHTIG: Zoomt rein (1.5 = 150%). 
            }}
          >
            <source src={flowertransparent} type="video/webm" />
          </video>
      </div>
            <IDCard top='120vh'right='12%'/>
            <Footer onNavigate={handleNavigation} />
        </div>
      )}
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePage;
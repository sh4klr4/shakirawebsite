import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
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
import flowerMov from '../assets/images/artimages/flowertransparent.mp4';
import flowerWebm from '../assets/images/artimages/flowertransparent.webm';

const HomePage = () => {
  // 1. STATE
  const [currentSection, setCurrentSection] = useState(null);
  const [showUI, setShowUI] = useState(false);

  // --- NEW: HANDLE BROWSER HISTORY (SWIPE BACK) ---
  useEffect(() => {
    // A. Listen for the "Back" button or Swipe
    const handlePopState = () => {
      // If the URL has no hash (e.g. "mysite.com"), go to Home
      if (!window.location.hash) {
        setCurrentSection(null);
      } else {
        // If URL is "mysite.com/#art", keep the section open
        const section = window.location.hash.replace('#', '');
        setCurrentSection(section);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 2. ACTIONS
  const handleNavigation = (section) => {
    console.log("Navigating to:", section);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentSection(section);
    
    // Push the new section to browser history so "Back" works
    window.history.pushState(null, '', `#${section}`);
  };

  const handleClose = () => {
    console.log("Closing section");
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentSection(null);
    
    // Clean up the URL when closing manually
    window.history.pushState(null, '', ' '); 
  };

  return (
    <>
      {/* 1. Loader: Meldet über onFinished, wenn er weg ist */}
      <LoadingScreen onFinished={() => setShowUI(true)} />

      {/* 2. Hintergrund & 3D Szene: Rendern immer (laden im Hintergrund) */}
      <Background />
      <Suspense fallback={null}>
        <MainScene />
      </Suspense>

      {/* 3. UI LAYER: Erscheint erst, wenn showUI true ist */}
      {showUI && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <Navigation onNavigate={handleNavigation} currentSection={currentSection} />
          <Crosses currentSection={currentSection} onClose={handleClose} />

          {/* Content Layer (ArtPage, CodePage etc.) */}
          {currentSection === 'art' && (
            <>
              <ArtPage />
              <Footer onNavigate={handleNavigation} />
            </>
          )}
          
          {currentSection === 'info' && (
            <>
              <InfoPage />
              <Footer onNavigate={handleNavigation} />
            </>
          )}

          {currentSection === 'code' && (
            <>
              <CodePage />
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
            <>
              <ContactPage />
            </>
          )}

          {/* Homepage Content (Blume unten) */}
          {!currentSection && (
            <div style={{ width: '100%' }}>
                <div style={{ height: '155vh' }}></div>
                <div style={{width: '500px', height: '500px', overflow: 'hidden', 
                  position: 'absolute', top: '105vh', left: '15%', zIndex: '50',
                    }}>
                    <video autoPlay muted loop playsInline style={{ width: '100%',
                      height: '100%', objectFit: 'cover', transform: 'scale(1.5)' }}>
                        <source src={flowerMov} type='video/mp4; codecs="hvc1"' />
                        <source src={flowerWebm} type="video/webm" />
                    </video>
                </div>
                <IDCard top='120vh' right='12%'/>
                <Footer onNavigate={handleNavigation} />
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default HomePage;
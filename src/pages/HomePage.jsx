import React, { useState, useEffect, Suspense } from 'react';
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
  // 1. STATE
  const [currentSection, setCurrentSection] = useState(null);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentSection(section);
    
    // Push the new section to browser history so "Back" works
    window.history.pushState(null, '', `#${section}`);
  };

  const handleClose = () => {
    console.log("Closing section");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentSection(null);
    
    // Clean up the URL when closing manually
    window.history.pushState(null, '', ' '); 
  };

  return (
    <>
      {/* 1. Hintergrund: Ist sofort sichtbar */}
      <Background />

      {/* 2. Loader: Liegt darüber, ist aber transparent (bis auf das Video) */}
      <LoadingScreen />

      {/* 3. 3D Szene: Lädt im Hintergrund. 
          Der Loader oben verschwindet erst, wenn HIER alles fertig ist. 
      */}
      <Suspense fallback={null}>
        <MainScene />
      </Suspense>

      {/* UI Layer ... */}
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

    </>
  );
};

export default HomePage;
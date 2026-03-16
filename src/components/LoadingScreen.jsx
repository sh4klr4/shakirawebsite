import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '@react-three/drei';

import loaderVideoWebM from '../assets/images/artimages/flowerload.webm'; 
import loaderVideoMov from '../assets/images/artimages/flowerload.mp4'; 

const LoadingScreen = ({ onFinished }) => {
  const { progress } = useProgress(); 
  const [isFinished, setIsFinished] = useState(false);
  
  // NEU: State, um zu checken, ob die Schriften da sind
  const [fontsLoaded, setFontsLoaded] = useState(false); 

  // NEU: Sobald die Schriften vom Browser geladen wurden, setze auf true
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  // ANGEPASST: Warte jetzt auf progress === 100 UND fontsLoaded === true
  useEffect(() => {
    if (progress === 100 && fontsLoaded) {
      // Warte kurz, wenn alles geladen ist, dann starte das Ausblenden
      const timer = setTimeout(() => {
        setIsFinished(true);
        if (onFinished) onFinished(); // Melde der HomePage: "Ich bin fertig!"
      }, 800); 
      return () => clearTimeout(timer);
    }
  }, [progress, fontsLoaded, onFinished]); // fontsLoaded zu den Dependencies hinzugefügt

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="simple-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw', height: '100vh',
            zIndex: 2000, 
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff', 
            pointerEvents: 'auto', 
          }}
        >
          {/* Video Container */}
          <div style={{ width: '60vh', height: '60vh', position: 'relative' }}>
             <video 
               autoPlay muted loop playsInline 
               style={{ width: '100%', height: '100%', objectFit: 'contain' }}
             >
               <source src={loaderVideoMov} type='video/mp4; codecs="hvc1"' />
               <source src={loaderVideoWebM} type="video/webm" />
             </video>
          </div>

          {/* PROZENTZAHL */}
          <motion.div 
            style={{ 
              fontSize: '1.5rem', 
              fontFamily: 'Inter, sans-serif',
              color: '#b00000',
              fontWeight: '300'
            }}
          >
            {Math.round(progress)}%
          </motion.div>

          <div style={{ 
            fontFamily: 'Edwardian Script',
            opacity: 0, 
            position: 'absolute', 
            pointerEvents: 'none' 
          }}>
            preload
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
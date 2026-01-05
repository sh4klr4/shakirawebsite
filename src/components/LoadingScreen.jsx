import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '@react-three/drei';

// Importiere dein Loader-Video hier
// (Zum Beispiel das transparente Blumen-Video oder ein anderes)
import loaderVideoWebM from '../assets/images/artimages/flowerload.webm'; 
import loaderVideoMov from '../assets/images/artimages/flowerload.mp4'; 
// import loaderVideoWebM from '../assets/images/artimages/flower.webm'; // Falls du WebM brauchst

const LoadingScreen = () => {
  const { progress } = useProgress(); // 0 bis 100
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Wenn alles geladen ist (100%), warte kurz und blende aus
    if (progress === 100) {
      const timer = setTimeout(() => setIsFinished(true), 500); 
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="simple-loader"
          // Exit Animation: Das Video blendet einfach weich aus
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 999, // Über allem
            display: 'flex',
            justifyContent: 'center', // Horizontal mittig
            alignItems: 'center',     // Vertikal mittig
            pointerEvents: 'none',    // Klicks gehen durch (optional)
            // WICHTIG: Kein background-color, damit man deinen <Background> sieht!
          }}
        >
          {/* Das Video in der Mitte */}
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             style={{
               width: '60vh', // Größe des Videos anpassen
               height: 'auto',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
             }}
          >
             <video 
               autoPlay 
               muted 
               loop 
               playsInline 
               style={{ width: '100%', height: '100%', objectFit: 'contain' }}
             >
               <source src={loaderVideoMov} type='video/mp4; codecs="hvc1"' />
               <source src={loaderVideoWebM} type="video/webm" />
             </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
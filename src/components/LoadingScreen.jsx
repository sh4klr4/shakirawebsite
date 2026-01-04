import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '@react-three/drei';

// Importiere dein Loader-Video hier
// (Zum Beispiel das transparente Blumen-Video oder ein anderes)
import loaderVideo from '../assets/images/artimages/flowerload.webm'; 
// import loaderVideoWebM from '../assets/images/artimages/flower.webm'; // Falls du WebM brauchst

const LoadingScreen = ({ onFinished }) => { 
  const { progress } = useProgress();
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      // Kleiner Delay für das Gefühl von Stabilität
      const timer = setTimeout(() => {
        setIsFinished(true);
        if (onFinished) onFinished(); // Meldet der HomePage: "Ich bin fertig!"
      }, 800); 
      return () => clearTimeout(timer);
    }
  }, [progress, onFinished]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="simple-loader"
          // Exit Animation: Das Video blendet einfach weich aus
          exit={{ opacity: 0, transition: { duration: 1 } }}
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
               width: '60vw', // Größe des Videos anpassen
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
               {/* Wenn du WebM hast, nimm das für Windows/Chrome: */}
               {/* <source src={loaderVideoWebM} type="video/webm" /> */}
               <source src={loaderVideo} type="video/webm" />
             </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
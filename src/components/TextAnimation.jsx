import React from 'react';
import { motion } from 'framer-motion';

// ========================================================
// 1. BLUR FADE UP
// Klassisch, Apple-Style. Perfekt für Captions und Subtitles.
// ========================================================
export const BlurFade = ({ text }) => {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ whiteSpace: 'pre-wrap' }} 
    >
      {text}
    </motion.div>
  );
};

export const BlurFadeWrapper = ({ children, className, style }) => {
  return (
    <motion.div
      className={className} // WICHTIG: Hier wird deine .description-lb Klasse übernommen!
      style={style}
      initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

// ========================================================
// 2. MASKED REVEAL (AGENCY STYLE)
// Text fährt aus einem unsichtbaren Container hoch. Sehr edel.
// ========================================================
export const MaskedReveal = ({ text }) => {
  return (
    <div style={{ overflow: 'hidden', display: 'inline-block' }}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        {text}
      </motion.div>
    </div>
  );
};

// ========================================================
// 3. SMOOTH TYPEWRITER
// Wie der Klassiker, aber weicher und ohne harten Cursor.
// ========================================================
export const Typewriter = ({ text }) => {
  // 1. Text erst in Wörter splitten
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      style={{ 
        display: 'inline-block', // Damit Text-Align (z.B. rechts/center) funktioniert
        wordWrap: 'break-word'   // Sicherstellen, dass Wörter umbrechen dürfen
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        // 2. Jedes Wort bekommt einen "Wrapper", der nicht umbrechen darf (nowrap)
        <span 
            key={index} 
            style={{ 
                display: 'inline-block', // Hält das Wort als Block zusammen
                whiteSpace: 'nowrap',    // Verhindert Umbruch IM Wort
                marginRight: '0.25em'    // Leerzeichen nach dem Wort simulieren
            }}
        >
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={child}
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

// ========================================================
// 4. STAGGERED WORDS
// Jedes Wort fliegt einzeln rein. Gut für lange Sätze.
// ========================================================
export const StaggeredWords = ({ text }) => {
  const words = text.split(" ");
  
  return (
    <motion.div 
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4em' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } }
      }}
    >
      {words.map((word, i) => (
        <motion.span 
          key={i} 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12 } }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// ========================================================
// 5. 3D FLIP
// Buchstaben drehen sich um die X-Achse rein. Sehr modern.
// ========================================================
export const FlipText = ({ text }) => {
  const letters = Array.from(text);
  
  return (
    <motion.div 
      style={{ display: 'flex', overflow: 'hidden' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: 50, rotateX: -90, opacity: 0 },
            visible: { y: 0, rotateX: 0, opacity: 1 }
          }}
          transition={{ duration: 0.6, ease: "backOut" }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// ========================================================
// 6. ELASTIC POP
// Buchstaben springen wie Gummi hervor. Verspielt.
// ========================================================
export const ElasticPop = ({ text }) => {
  const letters = Array.from(text);

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1 }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// ========================================================
// 7. GLITCH EFFECT (CYBERPUNK)
// Text zuckt kurz und färbt sich rot/blau.
// ========================================================
export const GlitchText = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <motion.span
        animate={{ 
            x: [0, -2, 2, -1, 1, 0],
            textShadow: [
                "0px 0px 0px rgba(0,0,0,0)",
                "2px 0px red", 
                "-2px 0px blue", 
                "0px 0px 0px rgba(0,0,0,0)"
            ]
        }}
        transition={{ duration: 0.5, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

// ========================================================
// 8. LETTER STRETCH (CINEMATIC)
// Buchstabenabstand vergrößert sich langsam. Sehr atmosphärisch.
// ========================================================
export const LetterStretch = ({ text }) => {
  return (
    <motion.div
      initial={{ letterSpacing: "-0.2em", opacity: 0, filter: 'blur(5px)' }}
      whileInView={{ letterSpacing: "0.1em", opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{ display: 'inline-block' }}
    >
      {text}
    </motion.div>
  );
};

// ========================================================
// 9. GRADIENT SHIMMER
// Ein Lichtreflex läuft über den Text (Web3 / Crypto Vibe).
// ACHTUNG: Funktioniert am besten auf dunklem Background.
// ========================================================
export const GradientShimmer = ({ text }) => {
  return (
    <motion.div
      style={{
        backgroundImage: 'linear-gradient(90deg, #787878 0%, #ffffff 50%, #787878 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
      }}
      animate={{ backgroundPosition: ["0% center", "200% center"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      {text}
    </motion.div>
  );
};

// ========================================================
// 10. ROTATE WORDS
// Buchstaben rotieren leicht rein. Elegant und verspielt.
// ========================================================
export const RotateWords = ({ text }) => {
  const words = text.split(" ");
  
  return (
    <motion.div 
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4em' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {words.map((word, i) => (
        <motion.span 
          key={i} 
          variants={{
            hidden: { opacity: 0, rotate: 10, y: 20 },
            visible: { opacity: 1, rotate: 0, y: 0 }
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
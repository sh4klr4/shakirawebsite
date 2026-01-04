import React from 'react';
import { motion } from 'framer-motion';

const EmailLink = () => {
  return (
    <motion.a
      href="mailto:shakira@bassl.com?subject=Project Inquiry" // Deine Email hier
      
      // Styling für den Container
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        marginTop: '15px',
        gap: '8px', // Abstand zwischen Text und Pfeil
        textDecoration: 'none',
        color: '#b00000', // Deine Textfarbe (z.B. dunkelgrau)
        textDecorationStyle: 'dashed',
        fontSize: '1.5rem',
        fontWeight: '500',
        cursor: 'pointer',
        padding: '10px 0' // Etwas Klickfläche
      }}
      
      // Animation für den GANZEN Link (optional: leichte Transparenz)
      whileHover="hover"
      initial="initial"
    >
      {/* 1. Der Text */}
      <span style={{ borderBottom: '1px solid transparent' }}>
        EMAIL
      </span>

      {/* 2. Der Pfeil (animiert) */}
      <motion.span
        variants={{
          initial: { x: 0, y: 0 },
          hover: { 
            x: 3,    // Bewegt sich nach rechts
            y: -3,   // Bewegt sich nach oben
            transition: { type: "spring", stiffness: 300 } 
          }
        }}
        style={{ fontSize: '1.2rem', lineHeight: 1 }}
      >
        ↗
      </motion.span>
    </motion.a>
  );
};

export default EmailLink;
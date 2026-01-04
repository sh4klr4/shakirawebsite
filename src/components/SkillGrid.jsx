import React from 'react';
// 1. Importiere 'motion' von framer-motion
import { motion } from 'framer-motion';

// --- BILD IMPORTE (unverändert) ---
import Azure from '../assets/images/skilllogo/Azure.png';
import Blender from '../assets/images/skilllogo/Blender.png';
import C from '../assets/images/skilllogo/C.png';
import Csharp from '../assets/images/skilllogo/Csharp.png';
import css from '../assets/images/skilllogo/css.png';
import Figma from '../assets/images/skilllogo/Figma.png';
import HTML from '../assets/images/skilllogo/HTML.png';
import Java from '../assets/images/skilllogo/Java.png';
import JavaScript from '../assets/images/skilllogo/JavaScript.png';
import Github from '../assets/images/skilllogo/github.png';
import photoshop from '../assets/images/skilllogo/photoshop.png';
import Python from '../assets/images/skilllogo/Python.png';
import ReactLogo from '../assets/images/skilllogo/React.png';
import Rust from '../assets/images/skilllogo/Rust.png';
import TypeScript from '../assets/images/skilllogo/TypeScript.png';

const SkillGrid = () => {
  
  // SKILLS LISTE (unverändert)
  const skills = [
    { name: 'Java', img: Java },
    { name: 'C', img: C },
    { name: 'C#', img: Csharp },
    { name: 'Python', img: Python },
    { name: 'React', img: ReactLogo },
    { name: 'Rust', img: Rust },
    { name: 'HTML', img: HTML },
    { name: 'CSS', img: css },
    { name: 'JavaScript', img: JavaScript },
    { name: 'TypeScript', img: TypeScript },
    { name: 'Azure', img: Azure },
    { name: 'Github', img: Github },
    { name: 'Figma', img: Figma },
    { name: 'Blender', img: Blender },
    { name: 'Photoshop', img: photoshop },
  ];

  // --- ANIMATIONS-VARIANTEN (unverändert) ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // STYLES (unverändert)
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '20px',
    maxWidth: '600px',
    marginTop: '105vh',
    marginLeft: '16vh',
    marginBottom: '25vh',
    padding: '30px 10px',
    alignItems: 'center',
    justifyItems: 'center'
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  // Das ist der Standard-Style für alle Bilder (maxWidth: 80px)
  const baseImageStyle = {
    width: '100%',
    maxWidth: '80px', 
    height: 'auto',
    objectFit: 'contain',
    filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))'
  };

  return (
    <motion.div 
      style={containerStyle}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skills.map((skill, index) => {
        // --- HIER IST DIE ÄNDERUNG ---
        
        // 1. Prüfen: Ist das aktuelle Bild "Figma"?
        const isFigma = skill.name === 'Figma';

        const finalImageStyle = isFigma 
          ? { ...baseImageStyle, maxWidth: '60px' } 
          : baseImageStyle;

        return (
          <motion.div 
            key={index} 
            style={itemStyle}
            variants={itemVariants}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={skill.img} 
              alt={skill.name} 
              title={skill.name} 
              // 3. Den berechneten Style hier anwenden
              style={finalImageStyle} 
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SkillGrid;
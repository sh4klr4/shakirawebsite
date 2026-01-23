import React from 'react';
import { motion } from 'framer-motion';
import '../pages/pagescss/InfoPage.css';

// --- BILD IMPORTE ---
import Unity from '../assets/images/skilllogo/unity.png';
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
    { name: 'Unity', img: Unity },
    { name: 'Github', img: Github },
    { name: 'Figma', img: Figma },
    { name: 'Blender', img: Blender },
    { name: 'Photoshop', img: photoshop },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className="skill-grid-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skills.map((skill, index) => (
        <motion.div 
          key={index} 
          className="skill-item-wrapper"
          variants={itemVariants}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src={skill.img} 
            alt={skill.name} 
            title={skill.name} 
            className={`skill-icon ${skill.name === 'Figma' ? 'figma-icon' : ''}`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillGrid;
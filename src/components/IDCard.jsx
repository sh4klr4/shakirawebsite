import React, { useRef, useState, useEffect } from 'react';
import './componentscss/IDCard.css';
import profilePic from '../assets/images/infoimages/ShakiraWork.png';

const IDCard = ({ top = '31%', right = '6%' }) => {
  const [angle, setAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef();

  // Die Animations-Schleife
  const animate = () => {
    if (!isHovered) {
      setAngle((prevAngle) => (prevAngle + 0.5) % 3600); // 0.5 ist die Geschwindigkeit
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Berechne den nächsten vollen 180° Winkel (0, 180, 360, 540...)
    const snappedAngle = Math.round(angle / 180) * 180;
    setAngle(snappedAngle);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="card-scene" 
      style={{ top, right }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="card-object"
        style={{ 
          transform: `rotateY(${angle}deg)`,
          transition: isHovered ? 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'none'
        }}
      >
        {/* --- FRONT FACE --- */}
        <div className='personcard face front'>
            <div className='card-row top'>
                <span className='small-label'>Portfolio</span>
                <span className='small-label'>PersonID</span>
            </div>
            <div className='card-main-content'>
                <div className='card-photo-wrapper'>
                    <img src={profilePic} alt="Profile" className='card-photo' />
                </div>
                <div className='card-text-group'>
                    <h2 className='card-name'>Shakira Laura Putri Bassl</h2>
                    <p className='card-role'>Mediainformatics @ LMU</p>
                    <p className='card-role'>Operations Engineer @ MTU</p>
                </div>
            </div>
            <div className='card-row bottom'>
                <span className='small-label'>Munich</span>
                <span className='small-label'>2026</span>
            </div>
        </div>

        {/* --- BACK FACE --- */}
        <div className='personcard face back'>
            <div className='magnetic-strip'></div>
            <div className='back-content'>
                <div className='signature'>Shakira Bassl</div>
                <div className='divider-line'></div>
                <p className='copyright'>
                    ©2026 Shakira Bassl.<br/>
                    All rights reserved.
                </p>
            </div>
            <div className='back-footer'>
                ARTIST SOFTWARE ENGINEER UI/UX-DESIGNER
            </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
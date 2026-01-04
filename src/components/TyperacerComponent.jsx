import React, { useState } from 'react';
import './componentscss/TyperacerComponent.css';

// Asset Imports (Pfade anpassen)
import typeRacerHero from '../assets/images/codeimages/typeracermock.jpg'; 
import screen1 from '../assets/images/codeimages/typeracerhome.jpg';
import screen2 from '../assets/images/codeimages/typeracergame.jpg';

const TyperacerComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`tr-container ${isExpanded ? 'tr-expanded' : ''}`} 
      onClick={handleToggle}
    >
      {/* 1. Main Hero Image */}
      <div className="tr-hero-wrapper">
        <img 
          src={typeRacerHero} 
          alt="TypeRacer Hero" 
          className="tr-hero-img" 
        />
      </div>

      {/* 2. Content Area */}
      <div className="tr-content-area">
        <div className="tr-header-row">
          <div className="tr-titles">
            <h1>TYPE <br />RACER</h1>
            <span className="tr-subtitle">Multiplayer Game</span>
          </div>
          
          <div className="tr-intro-text">
            <p>
              A co-developed real-time multiplayer typing game developed in Java. 
              It features a client-server communication to synchronize gameplay 
              between users. For single-player mode an adaptive AI bot simulates 
              human typing behaviour.
            </p>
          </div>

          <div className="tr-toggle-icon">
             <div className="tr-icon-bar tr-horizontal"></div>
             <div className="tr-icon-bar tr-vertical"></div>
          </div>
        </div>

        {/* 3. Expanded Content */}
        <div className="tr-expanded-details">
          
          <div className="tr-grid">
            <div className="tr-item">
              <img src={screen1} alt="TypeRacer Menu" />
            </div>
            <div className="tr-item">
              <img src={screen2} alt="TypeRacer Gameplay" />
            </div>
            
            <div className="tr-text-block">
              <p>
                This project was created among other solo game projects during the 
                Software Practicum at LMU Munich, where I received the top grade (1.0). 
                Beyond the technical implementation of client-server synchronization, 
                the practicum focused on high-quality software engineering principles 
                and robust object-oriented design. Achieving the highest possible mark 
                reflects my commitment to delivering polished, performant applications 
                that meet rigorous academic and technical standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TyperacerComponent;
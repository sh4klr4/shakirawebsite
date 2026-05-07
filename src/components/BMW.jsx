import React, { useState } from 'react';
import './componentscss/CodingAgentComponent.css';

// Bilder-Imports
import bmwhero from '../assets/images/uiuximages/bmwhero.png'; 
import carcolor from '../assets/images/uiuximages/carcolor.mp4';
import cardrive from '../assets/images/uiuximages/bmwcarsequence.mp4';

const BMWComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    /* Der onClick Handler liegt nun auf dem gesamten Container */
    <div 
      className={`ca-container ${isExpanded ? 'ca-expanded' : ''}`} 
      onClick={handleToggle}
    >
      {/* 1. Main Hero Image */}
      <div className="ca-hero-wrapper">
        <img 
          src={bmwhero} 
          alt="BMW Hero Image" 
          fetchpriority="high" decoding="async"
          className="ca-hero-img" 
        />
      </div>

      {/* 2. Content Area */}
      <div className="ca-content-area">
        <div className="ca-header-row">
          <div className="ca-titles">
            <h1>BMW <br />Concept</h1>
            <span className="ca-subtitle">Unreal Engine Project</span>
          </div>
          
          <div className="ca-intro-text">
            <p>
              Developed a dynamic material system to enable real-time vehicle color customization, 
              allowing for seamless and interactive visual changes. Additionally, made and staged 
              a short cinematic sequence using Unreal's Sequencer.
            </p>
          </div>

          <div className="ca-toggle-icon">
             <div className="ca-icon-bar ca-horizontal"></div>
             <div className="ca-icon-bar ca-vertical"></div>
          </div>
        </div>

        {/* 3. Expanded Content */}
        <div className="ca-expanded-details">
          
            <div className="video-wrapper">
                <video 
                    className="full-width-video" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload="metadata"
                >
                    <source src={carcolor} type="video/mp4" />
                </video>
            </div>
            
            <div className="ca-text-block">
              <p>
                I implemented a vehicle customization tool 
                that allows customers to change the car's color in real-time 
                via a user interface during the purchasing process. Alongside 
                the interactive UI, I created a short cinematic sequence to present 
                the vehicle's design and narrative in a snowy mountain setting.
              </p>
            </div>

            <div className="video-wrapper">
                <video 
                    className="full-width-video" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload="metadata"
                >
                    <source src={cardrive} type="video/mp4" />
                </video>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BMWComponent;
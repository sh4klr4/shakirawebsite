import React, { useState } from 'react';
// NEUE CSS IMPORTIEREN:
import './componentscss/BMWComponent.css';

// Bilder-Imports
import bmwhero from '../assets/images/uiuximages/bmwhero.png'; 
import carcolor from '../assets/images/uiuximages/carcolor.mp4';
import caruisleeping from '../assets/images/uiuximages/CarUISleeping.png'; 
import caruiactive from '../assets/images/uiuximages/CarUIActive.png'; 
import cardrive from '../assets/images/uiuximages/bmwcarsequence.mp4';

const BMWComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`bmw-container ${isExpanded ? 'bmw-expanded' : ''}`} 
      onClick={handleToggle}
    >
      {/* 1. Main Hero Image */}
      <div className="bmw-hero-wrapper">
        <img 
          src={bmwhero} 
          alt="BMW Hero Image" 
          fetchpriority="high" decoding="async"
          className="bmw-hero-img" 
        />
      </div>

      {/* 2. Content Area */}
      <div className="bmw-content-area">
        <div className="bmw-header-row">
          <div className="bmw-titles">
            <h1>BMW i3<br />Concept</h1>
            <span className="bmw-subtitle">UI and Showcase</span>
          </div>
          
          <div className="bmw-intro-text">
            <p>
              Developed a dynamic material system for the BMW i3 to enable real-time vehicle color customization. 
              Designed a Homescreen UI with two modes active and sleep. 
              Additionally, made and staged a short cinematic sequence using Unreal's Sequencer.
            </p>
          </div>

          <div className="bmw-toggle-icon">
             <div className="bmw-icon-bar bmw-horizontal"></div>
             <div className="bmw-icon-bar bmw-vertical"></div>
          </div>
        </div>

        {/* 3. Expanded Content */}
        <div className="bmw-expanded-details">
          
            {/* Erstes Video (Car Color) */}
            <div className="bmw-media-wrapper">
                <video 
                    className="bmw-full-width-media" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload="metadata"
                >
                    <source src={carcolor} type="video/mp4" />
                </video>
            </div>
            
            <div className="bmw-text-block">
              <p>
                I implemented a vehicle customization tool in Unreal Engine
                that allows customers to change the car's color in real-time 
                via a user interface during the purchasing process. To make the experience more engaging, 
                clicking a new color instantly triggers a short rolling sequence, 
                allowing the user to see the new paint finish in motion.
              </p>
            </div>

            {/* Bilder Section */}
            <div className="bmw-media-wrapper">
                <img 
                    src={caruisleeping} 
                    alt="Car UI Sleeping" 
                    className="bmw-full-width-media"
                    style={{ marginBottom: '20px' }}
                />
            </div>
                
            <div className="bmw-text-block">
              <p>
                To optimize the user experience and reduce visual distraction, I designed a 
                responsive infotainment interface in Figma that adapts to driver engagement. 
                During periods of inactivity, the system transitions into a minimal 
                "sleep mode," displaying only essential information, like a personalized greeting 
                and a compact media player. Upon 
                interaction or while actively driving, the interface awakens into its "active state." 
                This brings the 3D car model into sharp focus and reveals expanded widgets, navigation, climate controls, 
                and a central app dock, ensuring full functionality is immediately accessible when needed.
              </p>
            </div>

              <div className="bmw-media-wrapper">
                <img 
                    src={caruiactive} 
                    alt="Car UI Active" 
                    className="bmw-full-width-media"
                />
            </div>

            <div className="bmw-text-block">
              <p>
                To showcase the vehicle in a dynamic environment, I directed and staged a short 
                cinematic sequence using Unreal Engine's Sequencer. The animation features 
                the futuristic BMW concept navigating a winding road through a 
                snowy mountain landscape. This sequence highlights the car's sleek design and 
                illuminated features, creating an immersive visual narrative.
              </p>
            </div>

            {/* Zweites Video (BMW Sequence) */}
            <div className="bmw-media-wrapper">
                <video 
                    className="bmw-full-width-media" 
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
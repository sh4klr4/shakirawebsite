import React, { useState } from 'react';
// NEUE CSS IMPORTIEREN:
import './componentscss/BMWComponent.css';

// Bilder-Imports
import bmwhero from '../assets/images/uiuximages/bmwhero.png'; 
import carcolor from '../assets/images/uiuximages/caruiunreal.mp4';
import caruisleeping from '../assets/images/uiuximages/SleepModeUI.png'; 
import caruisleepingcharging from '../assets/images/uiuximages/SleepModeUICharging.png'; 
import carsleeptoawake from '../assets/images/uiuximages/riveanimation.mp4';
import caruiactive from '../assets/images/uiuximages/ActiveModeUI.png'; 
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
              Developed an Infotainment UI for the BMW i3 Neue Klasse with two modes active and sleep, as well as
              real-time vehicle color customization. 
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
          
            {/* 1. Side-by-Side Bilder Section (Sleeping & Charging) */}
            <div className="bmw-media-wrapper">
              <div className="bmw-grid">
                <div className="bmw-item">
                  <img 
                      src={caruisleeping} 
                      alt="Car UI Sleeping" 
                  />
                </div>
                <div className="bmw-item">
                  <img 
                      src={caruisleepingcharging} 
                      alt="Car UI Sleeping Charging" 
                  />
                </div>
              </div>
            </div>

            {/* 2. Video: Sleep to Awake (Rive) */}
            <div className="bmw-media-wrapper">
                <video 
                    className="bmw-full-width-media" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload="metadata"
                >
                    <source src={carsleeptoawake} type="video/mp4" />
                </video>
            </div>

            {/* 4. Text: UI Explanation */}
            <div className="bmw-text-block">
              <p>
                To optimize the user experience and reduce visual distraction, I designed a 
                responsive infotainment interface in Figma and animated it in Rive. 
                During periods of inactivity, the system transitions into a minimal 
                "sleep mode," displaying only essential information, like a personalized greeting,
                 a compact media player and a battery widget. This widget provides crucial information 
                 at a glance, such as estimated charging time and remaining range.
              </p>
            </div>

            {/* 3. Bild: Active Mode UI (Neu) */}
            <div className="bmw-media-wrapper">
                <img 
                    src={caruiactive} 
                    alt="Car UI Active" 
                    className="bmw-full-width-media"
                />
            </div>
                
            {/* 4. Text: UI Explanation */}
            <div className="bmw-text-block">
              <p>
                The Active Mode serves as the primary dashboard, 
                centered around a prominent 3D representation of the vehicle. 
                Designed for safe and intuitive interaction, the layout prioritizes 
                immediate access to essential features. Quick-action widgets for navigation 
                and media playback are anchored to the driver's side for easy reach, while a 
                persistent bottom dock provides seamless access to core applications alongside 
                dual-zone climate controls.
              </p>
            </div>

            {/* 6. Video: Unreal Customization (Car Color) */}
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

            {/* 5. Text: Customization Tool */}
            <div className="bmw-text-block">
              <p>
                I implemented a customization mode in Unreal Engine, 
                allowing users to personalize their vehicle in the UI. To make the experience highly engaging, 
                applying a new color instantly triggers a dynamic rolling sequence, showcasing the paint 
                finish in motion. Additionally, interactive camera controls enable users to smoothly 
                orbit the 3D model, providing a comprehensive view of the car from any angle.
              </p>
            </div>

            

            {/* 8. Letztes Video (BMW Sequence Drive) */}
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

            {/* 7. Text: Cinematic Intro */}
            <div className="bmw-text-block">
              <p>
                To showcase the vehicle in a dynamic environment, I directed and staged a short 
                cinematic sequence using Unreal Engine's Sequencer. The animation features 
                the futuristic BMW concept navigating a winding road through a 
                snowy mountain landscape. This sequence highlights the car's sleek design and 
                illuminated features, creating an immersive visual narrative.
              </p>
            </div>

          </div>
        </div>
      </div>
  );
};

export default BMWComponent;
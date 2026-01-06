import React, { useState } from 'react';
import './componentscss/PhysioComponent.css';

import physioMockup from '../assets/images/uiuximages/physiomockup.png'; 
import uiDashboard from '../assets/images/uiuximages/physiohome.png'; 
import uiTracking from '../assets/images/uiuximages/physioworkout.png';
import uiProgress from '../assets/images/uiuximages/physioafter.png';
import scrollVideo from '../assets/images/uiuximages/physioscroll.mp4';

const PhysioComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    /* Der onClick Handler liegt nun auf dem gesamten Container */
    <div 
      className={`physio-container ${isExpanded ? 'expanded' : ''}`} 
      onClick={handleToggle}
    >
      {/* 1. Main Hero Image */}
      <div className="hero-image-wrapper">
        <img 
          src={physioMockup} 
          alt="Physio Orb Laptop Hero" 
          className="hero-img" 
        />
      </div>

      {/* 2. Content Area */}
      <div className="content-area">
        <div className="header-row">
          <div className="titles">
            <h1>PHYSIO <br />ORB</h1>
            <span className="subtitle">UX research project</span>
          </div>
          
          <div className="intro-text">
            <p>
              Interviews with Munich physiotherapists revealed that patients lacked 
              the confidence to exercise alone. Physio Orb bridges this gap. 
              Using precision camera tracking and AI, it monitors your form and 
              boosts motivation, ensuring you feel secure throughout your recovery.
            </p>
          </div>

          <div className="toggle-icon">
             <div className="icon-bar horizontal"></div>
             <div className="icon-bar vertical"></div>
          </div>
        </div>

        {/* 3. Expanded Content */}
        <div className="expanded-details">
          
          <div className="ui-grid">
            <div className="ui-item">
              <img src={uiDashboard} alt="Dashboard UI" />
            </div>
            <div className="ui-item">
              <img src={uiTracking} alt="Live Tracking UI" />
            </div>
            <div className="ui-item">
              <img src={uiProgress} alt="Progress UI" />
            </div>
            <div className="ui-text-block">
              <p>
                The development followed a rigorous UX workflow, 
                starting with semi-structured interviews with Munich 
                specialists to uncover rehabilitation pain points. Insights 
                were synthesized via affinity diagrams to inform detailed 
                storyboarding of the patient journey. Finally, video prototyping 
                validated the AI interaction, ensuring the interface remained 
                intuitive and effective during physical activity. 
                <br/><br/>
                Physio Orb features a clean, card-based UI designed to guide patients 
                through at-home recovery. It combines real-time 3D form tracking for 
                instant safety feedback with a gamified dashboard that uses streaks 
                and clear statistics to boost motivation and consistency.
              </p>
            </div>
          </div>

          <div className="video-wrapper">
            <video 
              className="full-width-video" 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
            >
               <source src={scrollVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysioComponent;
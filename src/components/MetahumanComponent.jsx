import React, { useState } from 'react';
import './componentscss/CodingAgentComponent.css';

// Bilder-Imports
import metahumanHero from '../assets/images/codeimages/Metahuman.png'; 
import emotionmirror from '../assets/images/codeimages/EmotionalMirroring.mp4';

const MetahumanComponent = () => {
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
          src={metahumanHero} 
          alt="Metahuman Hero Image" 
          fetchpriority="high" decoding="async"
          className="ca-hero-img" 
        />
      </div>

      {/* 2. Content Area */}
      <div className="ca-content-area">
        <div className="ca-header-row">
          <div className="ca-titles">
            <h1>META <br />HUMAN</h1>
            <span className="ca-subtitle">Unreal Engine Project</span>
          </div>
          
          <div className="ca-intro-text">
            <p>
              Implemented Emotional Mirroring within a Metahuman in Unreal Engine using 
              Python and the Google Mediapipe that analyzes my facial expressions and translates 
              it to Unreal. (WIP)
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
                    <source src={emotionmirror} type="video/mp4" />
                </video>
            </div>
            
            <div className="ca-text-block">
              <p>
                This research project explores the growing cybersecurity threats in virtual 
                reality by investigating how easily people can be manipulated 
                by AI-driven avatars. Specifically, the study looks at advanced 
                "social engineering" attacks where a highly realistic virtual character 
                uses real-time facial tracking to read and mirror a user's emotions 
                during a conversation. Through a simulated professional interaction, 
                the experiment measures how this artificial empathy builds trust and 
                lowers a person's natural skepticism. Ultimately, the goal is to quantify 
                how successful these emotionally intelligent, fake avatars are at secretly 
                extracting sensitive personal information and credentials from unsuspecting 
                users in immersive digital environments.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MetahumanComponent;
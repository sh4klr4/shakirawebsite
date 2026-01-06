import React, { useState } from 'react';
import './componentscss/TamaGoComponent.css';

// --- ASSET IMPORTS ---
import tamagoHero from '../assets/images/uiuximages/tamagomockup.png'; 
import tamagoFooter from '../assets/images/uiuximages/tamagophones.png';

// Videos & Images
import eggsVideo from '../assets/images/uiuximages/tamagoeggs.mp4'; 
import friendVideo from '../assets/images/uiuximages/tamagofriend.mp4'; 
import startVideo from '../assets/images/uiuximages/tamagostart.mp4'; 

import colorSwatch from '../assets/images/uiuximages/tamagocolor.png'; 
import appIcon from '../assets/images/uiuximages/tamagoicon.png'; 

import pixelAnimals from '../assets/images/uiuximages/tamagoanimals.png'; 
import statsUi from '../assets/images/uiuximages/tamagostats.png'; 
import routeUi from '../assets/images/uiuximages/tamagoroute.png'; 

const TamaGoComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    /* Der onClick Handler liegt nun auf dem gesamten Container */
    <div 
      className={`tamago-container ${isExpanded ? 'expanded' : ''}`} 
      onClick={handleToggle}
    >
      
      {/* 1. Main Hero Image */}
      <div className="tamago-hero-wrapper">
        <img 
          src={tamagoHero} 
          alt="Tamago App Hero" 
          className="tamago-hero-img" 
        />
      </div>

      {/* 2. Content Area */}
      <div className="tamago-content-area">
        <div className="tamago-header-row">
          <div className="tamago-titles">
            <h1>
                <span className="text-red">TAMA</span>
                <span className="text-yellow">GO</span>
            </h1>
            <span className="tamago-subtitle">Walking App</span>
          </div>
          
          <div className="tamago-intro-text">
            <p>
              Tamago is a gamified fitness app that transforms daily walking 
              into a playful, social experience. Inspired by the nostalgia of 
              Tamagotchi, users nurture a virtual pet through physical activity
              —walking more means unlocking food and outfits.
            </p>
          </div>

          <div className="tamago-toggle-icon">
             <div className="icon-bar horizontal"></div>
             <div className="icon-bar vertical"></div>
          </div>
        </div>

        {/* 3. Expanded Content */}
        <div className="tamago-expanded-details">
          
          <div className="tamago-cluster-grid">
            <div className="cluster-col col-left">
              <video src={eggsVideo} type="video/mp4" className="tamago-phone-media" 
              autoPlay loop muted playsInline preload="auto"/>
                <img src={pixelAnimals} alt="Pixel Animals" className="animals-img" />
            </div>

            <div className="cluster-col col-center">
                <div className="asset-top">
                   <img src={colorSwatch} alt="Color Swatches" className="swatch-img" />
                </div>
            </div>

            <div className="cluster-col col-right">
                <div className="asset-top">
                   <img src={appIcon} alt="App Icon" className="app-icon-img" />
                </div>
                <div className="asset-bottom">
                   <video src={startVideo} type="video/mp4" className="tamago-phone-media" 
                   autoPlay loop muted playsInline preload="auto"/>
                </div>
            </div>
          </div>

          <div className="tamago-middle-grid-3col">
             <div className="grid-cell centered">
                <img src={statsUi} alt="Stats Screen 1" className="tamago-phone-media" />
             </div>
             <div className="grid-cell centered">
                <img src={routeUi} alt="Stats Screen 2" className="tamago-phone-media" />
             </div>
             <div className="grid-cell centered">
                <video src={friendVideo} type="video/mp4" className="tamago-phone-media" 
                autoPlay loop muted playsInline preload="auto"/>
             </div>
          </div>

          <div className="tamago-footer-row">
              <div className="footer-img-container">
                 <img 
                   src={tamagoFooter} 
                   alt="Tamago Angled Screens" 
                   className="tamago-footer-img" 
                 />
              </div>

              <div className="footer-text-container">
                  <p>
                    Data alone doesn't always motivate daily walks. We wanted to 
                    transform a solitary chore into an engaging game to improve 
                    long-term retention. My team and I iterated from low-fidelity 
                    wireframes to high-fidelity designs, specifically testing how 
                    to balance complex data (routes, stats) with a playful UI.
                  </p>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TamaGoComponent;
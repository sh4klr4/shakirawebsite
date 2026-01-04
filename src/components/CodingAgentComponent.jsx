import React, { useState } from 'react';
import './componentscss/CodingAgentComponent.css';

// Bilder-Imports
import terminalHero from '../assets/images/codeimages/maincalculaterai.png'; 
import codeBefore from '../assets/images/codeimages/codeaibefore.png';
import codeAfter from '../assets/images/codeimages/codeaiafter.png';

const CodingAgentComponent = () => {
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
          src={terminalHero} 
          alt="AI Agent Terminal Workflow" 
          className="ca-hero-img" 
        />
      </div>

      {/* 2. Content Area */}
      <div className="ca-content-area">
        <div className="ca-header-row">
          <div className="ca-titles">
            <h1>CODING <br />AGENT</h1>
            <span className="ca-subtitle">AI Coding Agent</span>
          </div>
          
          <div className="ca-intro-text">
            <p>
              Developed an autonomous AI Coding Agent using Python and the Google Gemini API. 
              Leveraging the model's function-calling capabilities, the agent interacts 
              directly with the local file system to inspect directories, read/write code, 
              and execute Python scripts.
            </p>
          </div>

          <div className="ca-toggle-icon">
             <div className="ca-icon-bar ca-horizontal"></div>
             <div className="ca-icon-bar ca-vertical"></div>
          </div>
        </div>

        {/* 3. Expanded Content */}
        <div className="ca-expanded-details">
          
          {/* Code Grid Section */}
          <div className="ca-grid">
            <div className="ca-item">
              <img src={codeBefore} alt="Code Logic Before" />
            </div>
            <div className="ca-item">
              <img src={codeAfter} alt="Code Logic After" />
            </div>
            
            <div className="ca-text-block">
              <p>
                Beyond basic file manipulation, the system implements a persistent message 
                history loop, enabling the agent to engage in multi-step reasoning. This 
                allows it to iteratively diagnose complex bugs, propose architectural 
                changes, and verify its own solutions in real-time. The agent transforms 
                the terminal into a collaborative workspace where the AI doesn't just 
                suggest code, but actively participates in the software development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingAgentComponent;
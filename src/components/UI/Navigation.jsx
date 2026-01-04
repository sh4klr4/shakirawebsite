import React, { useState, useEffect, useRef } from 'react';
import './UIcss/Navigation.css';

const Navigation = ({ onNavigate, currentSection }) => {
  const [hoveredSection, setHoveredSection] = useState(null);

  // 1. Create a ref to access the name element directly
  const nameRef = useRef(null);

  // 2. Add the Scroll Animation Logic
  useEffect(() => {
    const handleScroll = () => {
      if (currentSection) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const finishDistance = windowHeight * 0.6; 

      let effectiveScroll = scrollY;
      if (effectiveScroll > finishDistance) effectiveScroll = finishDistance;

      // Calculate progress based on this clamped value (0.0 to 1.0)
      const progress = effectiveScroll / finishDistance;

      // Position Calculation:
      // Visual Position on Screen: Starts at 91vh, moves up to 50vh
      const startVh = 91; 
      const endVh = 50;
      const currentVh = startVh - ((startVh - endVh) * progress);
      const pixelTop = effectiveScroll + (windowHeight * (currentVh / 100));

      // Scale Calculation
      const startScale = 0.3; 
      const endScale = 1;     
      const currentScale = startScale + ((endScale - startScale) * progress);

      // Apply styles
      if (nameRef.current) {
        // Enforce absolute positioning so it flows with the page
        nameRef.current.style.position = 'absolute'; 
        nameRef.current.style.top = `${pixelTop}px`;
        nameRef.current.style.bottom = 'auto'; 
        nameRef.current.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  //handles the navigation
  const renderNavItem = (id, label, contentLines) => {
    const isSelected = currentSection === id;
    const isOtherActive = currentSection && !isSelected;
    const isActive = hoveredSection === id || isSelected;

    return (
      <>
        {/* The Text Button */}
        <div 
          id={`${id}-nav`} 
          className={`nav-text ${isActive ? 'active' : ''} ${isOtherActive ? 'faded-out' : ''}`}
          onMouseEnter={() => !currentSection && setHoveredSection(id)}
          onMouseLeave={() => setHoveredSection(null)}
          onClick={() => !currentSection && onNavigate(id)}
        >
          {label}
        </div>

        {/* The Hover Box */}
        <div 
          id={`${id}-box`} 
          className={`hover-box ${isActive ? 'visible' : ''} ${isOtherActive ? 'faded-out' : ''}`}
        >
            {contentLines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
      </>
    );
  };

  return (
    <div className="nav-layer">
      
      {renderNavItem('art', 'Art', ['Drawings &', 'Leatherwork'])}
      {renderNavItem('code', 'Code', ['Projects &', 'CS Research'])}
      {renderNavItem('info', 'Info', ['Education &', 'Experience'])}
      {renderNavItem('uiux', 'UI/UX', ['UI Design &', 'UX Studies'])}

      <div 
          id="name-nav"
          ref={nameRef} 
          className={currentSection ? 'faded-out' : ''}
      >
          Shakira Bassl
      </div>
    </div>
  );
};

export default Navigation;
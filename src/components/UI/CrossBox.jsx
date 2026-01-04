import React from 'react';
import './UIcss/CrossBox.css';

const CrossBox = ({ style, className = '', width = '200px', height = '400px'}) => {
  // Wir kombinieren deine übergebenen Styles mit width/height
  const combinedStyle = {
    width: width || '100%',   // Standard: 100% wenn nichts angegeben
    height: height || '100%', // Standard: 100% wenn nichts angegeben
    ...style,                 // Deine extra Styles (position, margin, etc.)
  };

  return (
    <div className={`wireframe-container ${className}`} style={combinedStyle}>
      <svg className="wireframe-svg" xmlns="http://www.w3.org/2000/svg">
        {/* Äußerer Rahmen */}
        <rect x="0" y="0" width="100%" height="100%" className="wireframe-rect" />
        
        {/* Diagonale Linien */}
        <line x1="0" y1="0" x2="100%" y2="100%" className="wireframe-line" />
        <line x1="0" y1="100%" x2="100%" y2="0" className="wireframe-line" />
      </svg>
    </div>
  );
};

export default CrossBox;
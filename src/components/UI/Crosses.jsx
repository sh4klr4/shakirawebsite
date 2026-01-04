import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './UIcss/Crosses.css';

const Crosses = ({ currentSection, onClose }) => {
    const tlRef = useRef(null);

    useEffect(() => {
        // Animation Logic
        if (currentSection) {
            // OPEN STATE: Rotate to X (45deg)
            gsap.to(tlRef.current, {
                duration: 0.4, 
                rotation: 45, 
                ease: 'power2.out'
            });
        } else {
            // CLOSED STATE: Rotate back to + (0deg)
            gsap.to(tlRef.current, {
                duration: 0.4, 
                rotation: 0, 
                ease: 'power2.out'
            });
        }
    }, [currentSection]); // Runs every time currentSection changes

    return (
        <>
            {/* Top Left Cross - Interactive */}
            <div 
                id="cross-tl" 
                ref={tlRef}
                className={`cross ${currentSection ? 'is-closed' : ''}`}
                onClick={currentSection ? onClose : undefined} // Only click if open
            />

            {/* Other Static Crosses */}
            <div id="cross-tr" className="cross" />
            <div id="cross-bl" className="cross" />
            <div id="cross-br" className="cross" />
        </>
    );
};

export default Crosses;
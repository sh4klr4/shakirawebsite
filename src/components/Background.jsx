import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'
import './componentscss/Background.css';

const Background = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        const dynamicElement = elementRef.current;
        if (dynamicElement) {
            //Endless Loop
            gsap.to(dynamicElement, {
                rotation: 360,
                duration: 30,
                ease: 'none',
                repeat: -1,
            });
            // Subtle Pulsation
            gsap.to(dynamicElement, {
                scale: 2,
                yoyo: true,
                repeat: -1,
                duration: 7,
                ease: 'sine.inOut',
            });
        }
        //CleanUp
        return () => {
            gsap.killTweensOf(dynamicElement);
        };

    }, []);

    return (
        <div id="dynamic-background">
            <div id="dynamic-element" ref={elementRef}></div>
        </div>
    );
};

export default Background;
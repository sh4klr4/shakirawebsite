import React, { useEffect, useRef, useState } from 'react';
import '../pages/pagescss/InfoPage.css'; 
import logo3 from '../assets/images/infoimages/LMULogo.png';
import logo4 from '../assets/images/infoimages/TUMLogo.png';

const educationData = [
  {
    id: 'lmu',
    company: 'LMU Munich',
    role: 'B.Sc. Media Informatics',
    date: 'October 2022 – Present (7th Semester)',
    location: 'Munich, Germany',
    logo: logo3, 
    bullets: [
      'Core Curriculum (80%): Deep dive into Computer Science fundamentals including Software Engineering, Data Structures, Algorithms, and Database Systems.',
      'Specialization (20%): Focused on Human-Computer Interaction (HCI) and User Experience Design, bridging the gap between code and psychology.',
      'Practical Projects: Development of interactive web applications and high-fidelity prototypes using React, Figma, and Python.',
      'Thesis: Currently preparing Bachelor Thesis with a focus on User-Centered Design methods.'
    ]
  },
  {
    id: 'tum',
    company: 'TU Munich',
    role: 'B.Sc. Informatics (Year 1)',
    date: 'October 2021 – July 2022',
    location: 'Munich, Germany',
    logo: logo4, 
    bullets: [
      'Foundations: Completed rigorous core modules in Computer Science, laying the groundwork for algorithmic thinking and system architecture.',
      'Mathematics: Intensive coursework in Discrete Structures, Linear Algebra, and Analysis.',
      'Academic Focus: Strong emphasis on functional programming and theoretical computer science before specializing in Media Informatics.'
    ]
  }
];

const EducationSection = () => {
    const titleRef = useRef(null);
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // --- EDUCATION ANIMATION LOGIC ---
            
            // 1. STARTPUNKT (Dein Wunsch: 1.0)
            const eduStart = windowHeight * 1.0; 
            const eduEnd = eduStart + windowHeight * 0.8; 
            
            let eduProgress = 0;
            if (scrollY < eduStart) eduProgress = 0;
            else if (scrollY >= eduStart && scrollY <= eduEnd) eduProgress = (scrollY - eduStart) / (eduEnd - eduStart); 
            else eduProgress = 1; 

            const endTop = 85; 
            const startScale = 0.5; 
            const endScale = 1;  
            const eduStartTop = 130; 
            
            const currentTop = eduStartTop - ((eduStartTop - endTop) * eduProgress);
            const currentScale = startScale + ((endScale - startScale) * eduProgress);
            
            const opacity = eduProgress < 0.2 ? eduProgress * 5 : 1; 

            if (titleRef.current) {
                if (scrollY < eduStart) {
                   titleRef.current.style.position = 'absolute';
                   // Start-Position (versteckt)
                   titleRef.current.style.top = '200vh'; 
                   titleRef.current.style.opacity = 0; 
                } 
                else if (scrollY >= eduStart && scrollY < eduEnd) {
                   // WÄHREND DER ANIMATION (Fixed)
                   titleRef.current.style.position = 'fixed';
                   titleRef.current.style.top = `${currentTop}vh`;
                   titleRef.current.style.opacity = opacity; 
                } 
                else {
                   // 2. END POSITION (Absolute Landung)
                   // Berechnung: Scroll-Ende (1.8h) + End-Position im Screen (75vh) = 2.55h -> 255vh
                   // Wenn das immer noch zu tief ist, probiere 235vh oder 245vh.
                   titleRef.current.style.position = 'absolute';
                   titleRef.current.style.top = `265vh`; 
                   titleRef.current.style.opacity = 1;
                }
                titleRef.current.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
            }
            if (scrollY > eduEnd + 250) setShowCards(true);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <p ref={titleRef} className="section-title" style={{ zIndex: 101 }}>Education</p>
            
            {/* Cards Container */}
            <section className="experience-section" style={{ marginTop: '-10vh', paddingTop: '20vh', height:'55vh' }}>
                <div className="experience-container">
                    {educationData.map((school, index) => (
                        <div 
                            key={school.id} 
                            className={`job-card ${showCards ? 'visible' : ''}`}
                            style={{ animationDelay: showCards ? `${index * 0.4}s` : '0s' }}
                        >
                           <div className="logo-wrapper"><img src={school.logo} alt="logo" className="company-logo" /></div>
                           <div className="content-wrapper">
                             <div className="job-header">
                               <h3 className="job-role">{school.role}</h3>
                               <span className="job-meta">{school.date} | {school.location}</span>
                             </div>
                             <div className="job-details">
                               <ul className="job-bullets">{school.bullets.map((point, i) => <li key={i}>{point}</li>)}</ul>
                             </div>
                           </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default EducationSection;
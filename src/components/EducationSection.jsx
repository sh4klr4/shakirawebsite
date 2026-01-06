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
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (!sectionRef.current || !titleRef.current) return;

          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Synchronisierte Logik mit Experience (1.5 Multiplikator für frühen Start)
          let progress = Math.min(1, Math.max(0, 1 - (rect.top / (windowHeight * 1.5))));

          // Scale von 0.6 auf 1.0 und Opacity basierend auf Progress
          titleRef.current.style.transform = `scale(${0.6 + (0.4 * progress)})`;
          titleRef.current.style.opacity = progress;
      };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="section-wrapper education-top-gap">
            <div className="sticky-title-container">
                <p ref={titleRef} className="section-title-sticky">Education</p>
            </div>
            
            {/* Klasse auf experience-container geändert, damit die 75vw aus deinem CSS greifen */}
            <div className="experience-container">
                {educationData.map((school, index) => (
                    <div 
                        key={school.id} 
                        className={`job-card ${showCards ? 'visible' : ''}`}
                        style={{ animationDelay: showCards ? `${index * 0.15}s` : '0s' }}
                    >
                        <div className="logo-wrapper">
                            <img src={school.logo} alt="logo" className="company-logo" />
                        </div>
                        <div className="content-wrapper">
                            <div className="job-header">
                                <h3 className="job-role">{school.role}</h3>
                                <span className="job-meta">{school.date} | {school.location}</span>
                            </div>
                            <div className="job-details">
                                <ul className="job-bullets">
                                    {school.bullets.map((point, i) => <li key={i}>{point}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;
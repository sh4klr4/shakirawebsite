import React, { useEffect, useRef, useState } from 'react';
import '../pages/pagescss/InfoPage.css'; 
import logo1 from '../assets/images/infoimages/MTULogo.png';
import logo2 from '../assets/images/infoimages/NokiaLogo.png';

const experienceData = [
  {
    id: 'mtu',
    company: 'MTU Aero Engines',
    role: 'Operations Engineer Working Student',
    date: 'October 2023 – Present',
    location: 'Munich, Germany',
    logo: logo1,
    bullets: [
      'App Development: Developed user-centric Power Apps interfaces to streamline error handling for manufacturing teams.',
      'Workflow Automation: Built Power Automate workflows to optimize quality control processes and data logging.',
      'RPA Implementation: Deployed UiPath bots to automate complex data extraction from internal systems.',
      'Requirements Analysis: Collaborated with engineering teams to define requirements and enhance industrial software tools.'
    ]
  },
  {
    id: 'nokia',
    company: 'Nokia',
    role: 'Applied Research & Development Engineer Intern',
    date: 'March – September 2024',
    location: 'Vimercate, Italy',
    logo: logo2,
    bullets: [
      'Full Stack Development: Built "Moria", a web admin interface on Azure Cloud using ASP.NET (MVC) and C#.',
      'Project Lead: Delivered the "Mercury" notification system from requirements to deployment using MS Automation and Power Apps.',
      'Data Engineering: Developed a C# module to parse Excel data into Dataverse for Machine Learning readiness.',
      'DevOps: Managed code via Azure DevOps and maintained database schemas across multiple SQL nodes.'
    ]
  }
];

const ExperienceSection = () => {
    const titleRef = useRef(null);
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // --- EXPERIENCE ANIMATION LOGIC ---
            const expStart = 0; 
            const expEnd = windowHeight * 1 - 20; 
            
            let expProgress = 0;
            if (scrollY < expStart) expProgress = 0;
            else if (scrollY >= expStart && scrollY <= expEnd) expProgress = scrollY / expEnd; 
            else expProgress = 1; 

            const startTop = 145;
            const endTop = 75; 
            const startScale = 0.5; 
            const endScale = 1;  
            
            const currentTop = startTop - ((startTop - endTop) * expProgress);
            const currentScale = startScale + ((endScale - startScale) * expProgress);

            if (titleRef.current) {
                if (scrollY >= expEnd) {
                    titleRef.current.style.position = 'absolute';
                    titleRef.current.style.top = '173vh'; 
                } else {
                    titleRef.current.style.position = 'fixed';
                    titleRef.current.style.top = `${currentTop}vh`;
                }
                titleRef.current.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
            }

            if (scrollY > expEnd + 200) setShowCards(true);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <p ref={titleRef} className="section-title">Experience</p>
            
            <section className="experience-section" style={{ height: 'unset', minHeight: '80vh', paddingBottom: '0' }}>
                <div className="experience-container">
                    {experienceData.map((job, index) => (
                        <div 
                            key={job.id} 
                            className={`job-card ${showCards ? 'visible' : ''}`}
                            style={{ animationDelay: showCards ? `${index * 0.4}s` : '0s' }}
                        >
                           <div className="logo-wrapper"><img src={job.logo} alt="logo" className="company-logo" /></div>
                           <div className="content-wrapper">
                             <div className="job-header">
                               <h3 className="job-role">{job.role}</h3>
                               <span className="job-meta">{job.date} | {job.location}</span>
                             </div>
                             <div className="job-details">
                               <ul className="job-bullets">{job.bullets.map((point, i) => <li key={i}>{point}</li>)}</ul>
                             </div>
                           </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ExperienceSection;
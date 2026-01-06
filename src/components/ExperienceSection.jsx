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
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (!sectionRef.current || !titleRef.current) return;

          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          let progress = Math.min(1, Math.max(0, 1 - (rect.top / (windowHeight * 1.5))));

          titleRef.current.style.transform = `scale(${0.6 + (0.4 * progress)})`;
          titleRef.current.style.opacity = progress;

      };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="section-wrapper">
            <div className="sticky-title-container">
                <p ref={titleRef} className="section-title-sticky">Experience</p>
            </div>
            
            <div className="experience-container">
                {experienceData.map((job, index) => (
                    <div 
                        key={job.id} 
                        className={`job-card ${showCards ? 'visible' : ''}`}
                        style={{ animationDelay: showCards ? `${index * 0.15}s` : '0s' }}
                    >
                        <div className="logo-wrapper">
                            <img src={job.logo} alt="logo" className="company-logo" />
                        </div>
                        <div className="content-wrapper">
                            <div className="job-header">
                                <h3 className="job-role">{job.role}</h3>
                                <span className="job-meta">{job.date} | {job.location}</span>
                            </div>
                            <div className="job-details">
                                <ul className="job-bullets">
                                    {job.bullets.map((point, i) => <li key={i}>{point}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
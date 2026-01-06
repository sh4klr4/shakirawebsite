import React from 'react';
import './pagescss/InfoPage.css';
import IDCard from '../components/IDCard';
import SkillGrid from '../components/SkillGrid';
import { BlurFadeWrapper} from '../components/TextAnimation';

// Die neuen Komponenten importieren:
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';

const InfoPage = () => {
    return (
        <div>
            <div className="hero-section">
                <BlurFadeWrapper className='description-rt'>
                    Hello World! I'm Shakira Bassl and<br/>
                    interested in design and software<br/>
                    development work. I have 6+ years of<br/>
                    coding experience, am passionate 
                    about art, fashion, UI/UX, 3D design. Also <br/>
                    always looking for my next challenge.<br/>
                    Let's connect!
                </BlurFadeWrapper>
                
                <BlurFadeWrapper className='description-caption-rbt'>
                    [currently looking for a Bachelor Thesis]
                </BlurFadeWrapper>
            </div>

            <SkillGrid/>
            <IDCard top='110vh' right='10%' className="info-id-card"/>
            {/* Modularisierte Sections */}
            <ExperienceSection />
            <EducationSection />
        </div>
    );
};

export default InfoPage;
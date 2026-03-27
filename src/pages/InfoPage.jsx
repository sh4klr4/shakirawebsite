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
                    I'm Shakira Bassl and interested<br/>
                    in the intersection of technology <br/>
                    and design. I have 6+ years of<br/>
                    coding experience, am passionate <br/>
                    about art, fashion, UI/UX, 3D design. Also <br/>
                    always looking for my next challenge.<br/>
                    Let's connect!
                </BlurFadeWrapper>
                
                <BlurFadeWrapper className='description-caption-rbt'>
                    [Hello World!]
                </BlurFadeWrapper>
            </div>

            <SkillGrid/>
            <IDCard top='99vh' right='10%' className="info-id-card"/>
            {/* Modularisierte Sections */}
            <ExperienceSection />
            <EducationSection />
        </div>
    );
};

export default InfoPage;
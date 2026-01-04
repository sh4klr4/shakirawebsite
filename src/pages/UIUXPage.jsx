import React from 'react';
import './pagescss/UIUXPage.css';
import PhysioComponent from '../components/PhysioComponent';
import TamaGoComponent from '../components/TamaGoComponent';
import { BlurFadeWrapper } from '../components/TextAnimation';


const UIUXPage = () => {
    return (
    <div>
      <div style={{height: '100vh'}}>
        <BlurFadeWrapper className='description-lt'>
        
        Good design is simple yet engaging. <br/>
        Balancing self-explanatory functions<br/>
          with immersive storytelling <br/>
        to not only attract users, <br/>
        but also compel them stay. <br/>
        This is how I want to shape <br/>
        the user experience.
        </BlurFadeWrapper>

        <BlurFadeWrapper className='description-caption-lb'>
          [Website designed in Figma]
        </BlurFadeWrapper>
      </div>

        <PhysioComponent/>
        <TamaGoComponent/>
    </div>
  );
};
export default UIUXPage;
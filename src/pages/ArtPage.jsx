import React, { useEffect } from 'react';
import './pagescss/ArtPage.css'
import BagGallery from '../components/BagGallery';
import ArtGallery from '../components/ArtGallery';
import flowerVideo from '../assets/images/artimages/flowerblender.mp4';
import { BlurFadeWrapper, Typewriter} from '../components/TextAnimation';

const ArtPage = () => {
  return (
    <div>
      {/* Erster Screen: 3D Model + Glass Box (scrollt mit) */}
      {/* ADD THE CLASS 'hero-section' HERE */}
      <div className="hero-section" style={{height: '100vh'}}>
        <BlurFadeWrapper className='description-rb'>
          My work is inspired by anatomy<br/>
          skin and human emotion<br/>
          Nature defines our bones<br/>
          the scarring on our skin<br/>
          details that are set by cycles<br/>
          patterns and systems<br/>
          This idea is reflected in my creations<br/>
          when I choose my motif and leather<br/>
        </BlurFadeWrapper>
      
        <BlurFadeWrapper className='description-caption-lb'>
          [3D Cyberhead made in Blender]
        </BlurFadeWrapper>
      </div>
      
      <BagGallery/>

      <div className="video-interim-container">   
        <video 
          className="gallery-video" 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
        >
         
          <source src={flowerVideo} type="video/mp4" />
        </video>
          <div className="video-caption">
          [Flower Animation made in Blender]
        </div>
      </div>
    
        
      <ArtGallery/>
      
    </div>
    
  );
};

export default ArtPage;


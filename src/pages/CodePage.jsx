import React from 'react';
// Stelle sicher, dass diese CSS Datei existiert!
// Falls sie bei dir anders heißt (z.B. Code.css), pass die Zeile an.
import './pagescss/CodePage.css'; 
import CodingAgentComponent from '../components/CodingAgentComponent';
import TyperacerComponent from '../components/TyperacerComponent';
import { BlurFadeWrapper } from '../components/TextAnimation';

const CodePage = () => {
  return (
    <div>
      {/* Erster Screen: 3D Model + Glass Box (scrollt mit) */}
      <div style={{height: '100vh'}}>
        <BlurFadeWrapper className='description-lb'>
          For me software development <br/>
          is fundamentally a process of <br/>
          digital investigation. Beyond the <br/>
          syntax and algorithms, the core of <br/>
          the work lies in the rigorous analysis <br/>
          of complex systems and new technologies <br/>
          and its reconstruction into a clean solution.
        </BlurFadeWrapper>

        <BlurFadeWrapper className='description-caption-rb'>
          [Website made with React & Three]
        </BlurFadeWrapper>
      </div>
      {/* Content Wrapper - startet nach 100vh */}
      <CodingAgentComponent/>
      <TyperacerComponent/>
    </div>
  );
};

export default CodePage;
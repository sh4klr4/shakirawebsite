import React from 'react';
import './componentscss/IDCard.css';
import profilePic from '../assets/images/infoimages/ShakiraWork.png';

// 1. Destructure 'top' aus den Props und setze den Standardwert auf '31%'
const IDCard = ({ top = '31%', right = '6%' }) => {
  return (
    // 2. Nutze das style-Attribut, um die CSS-Klasse zu überschreiben
    <div className="card-scene" style={{ top: top, right: right }}>
      <div className="card-object">

        {/* --- FRONT FACE --- */}
        <div className='personcard face front'>
            <div className='card-row top'>
                <span className='small-label'>Portfolio</span>
                <span className='small-label'>PersonID</span>
            </div>

            <div className='card-main-content'>
                <div className='card-photo-wrapper'>
                    <img src={profilePic} alt="Profile" className='card-photo' />
                </div>
                <div className='card-text-group'>
                    <h2 className='card-name'>Shakira Laura Putri Bassl</h2>
                    <p className='card-role'>Mediainformatics @ LMU</p>
                    <p className='card-role'>Operations Engineer @ MTU</p>
                </div>
            </div>

            <div className='card-row bottom'>
                <span className='small-label'>Munich</span>
                <span className='small-label'>2026</span>
            </div>
        </div>

        {/* --- BACK FACE --- */}
        <div className='personcard face back'>
            <div className='magnetic-strip'></div>
            
            <div className='back-content'>
                <div className='signature'>Shakira Bassl</div>
                <div className='divider-line'></div>
                <p className='copyright'>
                    ©2026 Shakira Bassl.<br/>
                    All rights reserved.
                </p>
            </div>

            <div className='back-footer'>
                ARTIST SOFTWARE ENGINEER UI/UX-DESIGNER
            </div>
        </div>

      </div>
    </div>
  )
}

export default IDCard;
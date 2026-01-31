import React, { useState } from 'react';
import './componentscss/BagGallery.css';

// Import images
import art1 from '../assets/images/artimages/bag01.png';
import art1_cl from '../assets/images/artimages/bag01_cl.png';
import art2 from '../assets/images/artimages/bag02.png';
import art2_cl from '../assets/images/artimages/bag02_cl.png';
import art3 from '../assets/images/artimages/glovefull.png';
import art3_cl from '../assets/images/artimages/glovefullback.png';
import art4 from '../assets/images/artimages/necklace_cl.png'; 
import art4_cl from '../assets/images/artimages/necklace.png';
import art5 from '../assets/images/artimages/wallet.png';
import art5_cl from '../assets/images/artimages/walletinside.png';

const bagsDataArray = [
  { id: 'slot1', number: '01.', name: "[LoveLetter MessengerBag]", imgMain: art1, imgDetail: art1_cl },
  { id: 'slot2', number: '02.', name: "[Layered ShoulderBag]", imgMain: art2, imgDetail: art2_cl },
  { id: 'slot3', number: '03.', name: "[ScarStitched Glove]", imgMain: art3, imgDetail: art3_cl },
  { id: 'slot4', number: '04.', name: "[Horn Necklace]", imgMain: art4, imgDetail: art4_cl },
  { id: 'slot5', number: '05.', name: "[Tooth Wallet]", imgMain: art5, imgDetail: art5_cl }
];

const BagGallery = () => {
  const [hoveredId, setHoveredId] = useState(null);

  // Finde das aktuell gehoverte Item für die Bildunterschrift unten
  const currentItem = bagsDataArray.find(item => item.id === hoveredId);

  return (
    <div className="gallery-wrapper">
      
      {/* Decorative Crosses */}
      <div className="cross-mark top-left"></div>
      <div className="cross-mark bottom-right"></div>

      {/* --- GRID CONTAINER --- */}
      <div className="gallery-grid">
        {bagsDataArray.map((bag) => (
          <div className="gallery-section" key={bag.id}>
            <div className="content-container">
              <span className="bag-number">{bag.number}</span>
              <div 
                className="bag-image-wrapper"
                onMouseEnter={() => setHoveredId(bag.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img 
                  src={bag.imgMain} 
                  className={`bag-img ${hoveredId === bag.id ? 'hidden' : 'visible'}`} 
                  alt={`${bag.name} view 1`}
                  fetchpriority="high"
                  decoding="async" 
                />
                <img 
                  src={bag.imgDetail} 
                  className={`bag-img detail ${hoveredId === bag.id ? 'visible' : 'hidden'}`} 
                  alt={`${bag.name} view 2`}
                  loading="lazy" 
                  decoding="async" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Caption Logic */}
      <div className="global-description">
        <span className="desc-text">
          {currentItem ? currentItem.name : "[Leather Accessory Collection]"}
        </span>
      </div>

    </div>
  );
};

export default BagGallery;
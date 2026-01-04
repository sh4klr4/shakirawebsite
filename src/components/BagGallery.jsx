import React, { useState } from 'react';
import './componentscss/BagGallery.css';

// Import images (Using placeholders for demo - replace with your real images)
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

// Placeholder strategy: Reusing images for slots 2, 3, 4
const bagsData = {
  slot1: {
    id: 'slot1',
    number: '01.',
    name: "[LoveLetter MessengerBag]",
    imgMain: art1,
    imgDetail: art1_cl
  },
  slot2: {
    id: 'slot2',
    number: '02.',
    name: "[Layered ShoulderBag]",
    imgMain: art2,
    imgDetail: art2_cl
  },
  slot3: {
    id: 'slot3',
    number: '03.',
    name: "[ScarStitched Glove]",
    imgMain: art3, // Replace with new image
    imgDetail: art3_cl
  },
  slot4: {
    id: 'slot4',
    number: '04.',
    name: "[Horn Necklace]",
    imgMain: art4, // Replace with new image
    imgDetail: art4_cl
  },
  slot5: {
    id: 'slot5',
    number: '05.',
    name: "[Tooth Wallet]",
    imgMain: art5, // Replace with new image
    imgDetail: art5_cl
  }
};

const BagGallery = () => {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <div className="gallery-wrapper">
      
      {/* Decorative Crosses */}
      <div className="cross-mark top-left"></div>
      <div className="cross-mark bottom-right"></div>

      {/* --- GRID CONTAINER (Holds 5 items) --- */}
      <div className="gallery-grid">

        {/* --- SLOT 1 --- */}
        <div className="gallery-section">
          <div className="content-container">
            <span className="bag-number">{bagsData.slot1.number}</span>
            <div 
              className="bag-image-wrapper"
              onMouseEnter={() => setHoveredSide('slot1')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <img 
                src={bagsData.slot1.imgMain} 
                className={`bag-img ${hoveredSide === 'slot1' ? 'hidden' : 'visible'}`} 
                alt="1"
              />
              <img 
                src={bagsData.slot1.imgDetail} 
                className={`bag-img detail ${hoveredSide === 'slot1' ? 'visible' : 'hidden'}`} 
                alt="1d"
              />
            </div>
          </div>
        </div>

        {/* --- SLOT 2 --- */}
        <div className="gallery-section">
          <div className="content-container">
            <span className="bag-number">{bagsData.slot2.number}</span>
            <div 
              className="bag-image-wrapper"
              onMouseEnter={() => setHoveredSide('slot2')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <img 
                src={bagsData.slot2.imgMain} 
                className={`bag-img ${hoveredSide === 'slot2' ? 'hidden' : 'visible'}`} 
                alt="2"
              />
              <img 
                src={bagsData.slot2.imgDetail} 
                className={`bag-img detail ${hoveredSide === 'slot2' ? 'visible' : 'hidden'}`} 
                alt="2d"
              />
            </div>
          </div>
        </div>

        {/* --- SLOT 3 (CENTER) --- */}
        <div className="gallery-section">
          <div className="content-container">
            <span className="bag-number">{bagsData.slot3.number}</span>
            <div 
              className="bag-image-wrapper"
              onMouseEnter={() => setHoveredSide('slot3')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <img 
                src={bagsData.slot3.imgMain} 
                className={`bag-img ${hoveredSide === 'slot3' ? 'hidden' : 'visible'}`} 
                alt="3"
              />
              <img 
                src={bagsData.slot3.imgDetail} 
                className={`bag-img detail ${hoveredSide === 'slot3' ? 'visible' : 'hidden'}`} 
                alt="3d"
              />
            </div>
          </div>
        </div>

        {/* --- SLOT 4 --- */}
        <div className="gallery-section">
          <div className="content-container">
            <span className="bag-number">{bagsData.slot4.number}</span>
            <div 
              className="bag-image-wrapper"
              onMouseEnter={() => setHoveredSide('slot4')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <img 
                src={bagsData.slot4.imgMain} 
                className={`bag-img ${hoveredSide === 'slot4' ? 'hidden' : 'visible'}`} 
                alt="4"
              />
              <img 
                src={bagsData.slot4.imgDetail} 
                className={`bag-img detail ${hoveredSide === 'slot4' ? 'visible' : 'hidden'}`} 
                alt="4d"
              />
            </div>
          </div>
        </div>

        {/* --- SLOT 5 --- */}
        <div className="gallery-section">
          <div className="content-container">
            <span className="bag-number">{bagsData.slot5.number}</span>
            <div 
              className="bag-image-wrapper"
              onMouseEnter={() => setHoveredSide('slot5')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <img 
                src={bagsData.slot5.imgMain} 
                className={`bag-img ${hoveredSide === 'slot5' ? 'hidden' : 'visible'}`} 
                alt="5"
              />
              <img 
                src={bagsData.slot5.imgDetail} 
                className={`bag-img detail ${hoveredSide === 'slot5' ? 'visible' : 'hidden'}`} 
                alt="5d"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Caption Logic */}
      <div className="global-description">
        <span className="desc-text">
          {hoveredSide && bagsData[hoveredSide] ? bagsData[hoveredSide].name : "[Leather Accessory Collection]"}
        </span>
      </div>

    </div>
  );
};

export default BagGallery;
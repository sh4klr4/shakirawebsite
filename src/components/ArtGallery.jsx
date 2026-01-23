import React, { useState } from 'react';

// Importiere deine Bilder
import art1 from '../assets/images/artimages/VogelStillleben.JPG';
import art3 from '../assets/images/artimages/Centaur.jpg';
import art9 from '../assets/images/artimages/Vogelanbeterin.png';
import art4 from '../assets/images/artimages/Perlenjäger.JPG';
import art5 from '../assets/images/artimages/SmallWorld.jpg';
import art10 from '../assets/images/artimages/DreamCatcher.jpeg';
import art7 from '../assets/images/artimages/LoveParanoia.jpeg';
import art8 from '../assets/images/artimages/Eyes.jpg';
import art2 from '../assets/images/artimages/Alien1.JPG';
import art6 from '../assets/images/artimages/Mermaids.JPG';

const ArtGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const myImages = [
    { src: art1, name: 'Vogel Stillleben' },
    { src: art2, name: 'Alien' },
    { src: art3, name: 'Centaur' },
    { src: art4, name: 'Perlenjäger' },
    { src: art5, name: 'Small World' },
    { src: art6, name: 'Mermaids' },
    { src: art7, name: 'Love Paranoia' },
    { src: art8, name: 'Eyes' },
    { src: art9, name: 'Vogelanbeterin' },
    { src: art10, name: 'Dream Catcher' },
  ];

  const singleGridSet = Array.from({ length: 10 }, (_, i) => myImages[i] || null);
  const loopSets = [1, 2, 3];

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div style={styles.mainContainer}>
      
      <style>
        {`
          @keyframes infiniteScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.3333%); } 
          }

          .gallery-img {
            transition: transform 0.3s ease;
          }
          
          .gallery-img:hover {
            transform: scale(1.1);
            cursor: pointer;
          }

          .artwork-caption {
            position: absolute;        
            left: 8%;                 
            bottom: 5%;               
            color: #787878;                  
            font-size: clamp(16px, 1.0vw, 22px);          
            letter-spacing: 2px;
            z-index: 100;
            pointer-events: none;
          }
        `}
      </style>

      <div className="artwork-caption">
         [{selectedImage ? selectedImage.name : "Drawings"}]
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.name} 
            style={styles.modalImage}
            onClick={(e) => e.stopPropagation()} 
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div style={styles.marqueeTrack}>
        {loopSets.map((setNum) => (
          <div key={setNum} style={styles.gridBlock}>
            {singleGridSet.map((item, index) => (
              <GalleryItem 
                key={`${setNum}-${index}`} 
                item={item} 
                index={index}
                onClick={() => openModal(item)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const GalleryItem = ({ item, index, onClick }) => (
  <div style={styles.cellWrapper}>
    {item && (
      <img 
        src={item.src} 
        alt={item.name} 
        className="gallery-img"
        style={styles.artworkImage}
        onClick={onClick}
        loading="lazy"      /* Optimierung für den Arbeitsspeicher */
        decoding="async"    /* Optimierung für die CPU-Last */
      />
    )}
  </div>
);

const styles = {
  mainContainer: {
    position: 'relative', 
    width: '100vw',
    height: '90vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  marqueeTrack: {
    display: 'flex',
    width: 'max-content', 
    gap: '20px', 
    animation: 'infiniteScroll 45s linear infinite', 
    willChange: 'transform',
  },

  gridBlock: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 250px)', 
    gridTemplateRows: 'repeat(2, 300px)', 
    gap: '20px', 
    flexShrink: 0 
  },

  cellWrapper: {
    position: 'relative', 
    width: '100%',
    height: '100%',
    overflow: 'hidden', 
  },

  artworkImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    zIndex: 1,
    display: 'block',
  },

  modalOverlay: {
    position: 'absolute', 
    top: 0,
    left: 0,
    width: '100%', 
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 200,
  },

  modalImage: {
    maxWidth: '70%',
    maxHeight: '70%',
    objectFit: 'contain',
    borderRadius: '4px',
    cursor: 'default',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
  }
};

export default ArtGallery;
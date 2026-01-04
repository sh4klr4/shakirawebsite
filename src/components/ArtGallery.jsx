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

// Optional: Falls du die Animation nutzen willst, importiere sie hier
// import { Typewriter } from '../components/TextAnimations';

const ArtGallery = () => {
  // State speichert jetzt das ganze Objekt (src + name) oder null
  const [selectedImage, setSelectedImage] = useState(null);

  // 1. NEUE DATENSTRUKTUR: Objekte statt nur Pfade
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

  // item ist jetzt das Objekt { src, name }
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

          /* --- DEIN CSS FÜR DIE CAPTION --- */
          .artwork-caption {
            position: absolute;        
            left: 8%;                 
            bottom: 5%;               
            color: #787878;                  
            font-size: 16px;          
            letter-spacing: 2px;
            z-index: 100; /* Sicherstellen, dass es über dem Marquee liegt */
            pointer-events: none; /* Klicks gehen durch zum Marquee */
          }
        `}
      </style>

      {/* 2. CAPTION LOGIK */}
      <div className="artwork-caption">
         {/* Wenn ein Bild ausgewählt ist, zeige den Namen, sonst "Drawings" */}
         [{selectedImage ? selectedImage.name : "Drawings"}]

         {/* Falls du die Typewriter Animation von vorhin nutzen willst, 
             ersetze die Zeile oben hiermit: 
             <Typewriter text={`[${selectedImage ? selectedImage.name : "Drawings"}]`} />
         */}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <img 
            src={selectedImage.src} // WICHTIG: Jetzt .src zugreifen
            alt={selectedImage.name} 
            style={styles.modalImage}
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      <div style={styles.marqueeTrack}>
        {loopSets.map((setNum) => (
          <div key={setNum} style={styles.gridBlock}>
            {singleGridSet.map((item, index) => (
              <GalleryItem 
                key={`${setNum}-${index}`} 
                item={item} // Wir übergeben das ganze Item
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

// GalleryItem angepasst, um mit Objekten umzugehen
const GalleryItem = ({ item, index, onClick }) => (
  <div style={styles.cellWrapper}>
    {item && (
      <img 
        src={item.src} // Zugriff auf .src
        alt={item.name} 
        className="gallery-img"
        style={styles.artworkImage}
        onClick={onClick}
      />
    )}
  </div>
);

const styles = {
  mainContainer: {
    position: 'relative', 
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent', // Falls nötig
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
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)' // Optional: Schatten für Tiefe
  }
};

export default ArtGallery;
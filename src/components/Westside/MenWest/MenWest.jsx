import React, { useState, useEffect } from "react";
import Bring from '../../../assets/West/Bring.webp';
import Bring1 from '../../../assets/West/Bring1.webp'
import Bring2 from '../../../assets/West/Bring2.jpg'
import Bring3 from '../../../assets/West/Bring3.jpg'
import Bring4 from '../../../assets/West/Bring4.webp'
import Slide1 from '../../../assets/West/Men1.webp';
import Slide2 from '../../../assets/West/Men2.webp';
import Slide3 from '../../../assets/West/Men3.webp';
import Slide4 from '../../../assets/West/Men4.webp';
import Slide5 from '../../../assets/West/Men5.webp';
import Slide6 from '../../../assets/West/Men6.webp';
import Slide7 from '../../../assets/West/Men7.webp';
import Slide8 from '../../../assets/West/Men1.webp';
import styles from '../MenWest/MenWest.module.css';
function MenWest({ interval = 3000 }) {
    const images = [
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
        Slide6,
        Slide7,
        Slide8
 ];
      const [currentIndex, setCurrentIndex] = useState(0);
      const [isTransitioning, setIsTransitioning] = useState(false);
    
      useEffect(() => {
        const slideInterval = setInterval(() => {
          setIsTransitioning(true);
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, interval);
        return () => clearInterval(slideInterval); // Clean up on unmount
      }, [images.length, interval]);
    
      // Handle end of transition
      const handleTransitionEnd = () => {
        setIsTransitioning(false);
      };
  return (
  <>
  <div className={styles.p}>
    <p><b>Men's Closet Essentials</b></p>
  </div>
  <div className={styles.slider}>
    <div
      className={styles.sliderInner}
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      {images.map((image, index) => (
        <div className={styles.sliderItem} key={index}>
          <img src={image} alt={`Slide ${index}`} className={styles.image} />
        </div>
      ))}
      {/* Duplicate images for the infinite loop effect */}
      {images.map((image, index) => (
        <div className={styles.sliderItem} key={`duplicate-${index}`}>
          <img
            src={image}
            alt={`Duplicate Slide ${index}`}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  </div>
  <div className={styles.ps}>
    <a href="/"><p><b>Bring Home Good Vibes</b></p></a>
  </div>
  <div className={styles.Bring}>
    <a href="/"><img src={Bring} alt="th"/></a>
  </div>
  <div className={styles.Bring1}>
    <div className={styles.ca}>
  <a href="/"><img src={Bring1} alt=""></img></a>
        
  <a href="/"><img src={Bring2} alt=""></img></a>
  <a href="/"><img src={Bring3} alt=""></img></a>
  <a href="/"><img src={Bring4} alt=""></img></a>
  </div>
    </div>
    <div className={styles.pss}>
    <a href="/"><p><b>Curve Edit</b></p></a>
  </div>
  </>
  )
}

export default MenWest
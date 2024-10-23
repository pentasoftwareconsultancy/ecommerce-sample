import React, { useState, useEffect } from "react";
import Slide1 from '../../../assets/image/silder1.png';
import Slide2 from '../../../assets/image/silder2.png';
import Slide3 from '../../../assets/image/silder3.png';
import Slide4 from '../../../assets/image/silder4.png';
import Slide5 from '../../../assets/image/silder5.png';
import Slide6 from '../../../assets/image/silder6.png';
import Slide7 from '../../../assets/image/silder7.png';
import Slide8 from '../../../assets/image/silder8.png';

import styles from './HeroSection.module.css'; 

function HeroSection ({ interval = 3000 })  {

  // Define all the images directly in the ImageSlider component
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
 
  );
}

export default HeroSection;




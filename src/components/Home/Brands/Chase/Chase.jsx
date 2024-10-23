import React, { useState } from 'react';
import Chase from '../../../../assets/image/Chase.png';
import Chase1 from '../../../../assets/image/Chase1.png';
import Chase2 from '../../../../assets/image/Chase2.png';
import Chase3 from '../../../../assets/image/Chase3.png';
import Chase4 from '../../../../assets/image/Chase4.png';
import Chase5 from '../../../../assets/image/Chase5.png';
import Chase6 from '../../../../assets/image/Chase6.png';
import Chase7 from '../../../../assets/image/Chase7.png';
import styles from './Chase.module.css'; // Check the path is correct

const brands = [
  Chase1,
  Chase2,
  Chase3,
  Chase4,
  Chase5,
  Chase6,
  Chase7
];

function ChaseComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4; // Number of visible cards at a time

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - visibleCards : prevIndex - visibleCards
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards >= brands.length ? 0 : prevIndex + visibleCards
    );
  };

  return (
    <>
      <div className={styles.Chase}>
        <img src={Chase} alt='' />
      </div>

      <div className={styles.button}>

    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={prevSlide}>
      <i className="fa-solid fa-angle-left"></i>
      </button>
      <button className={styles.nextButton} onClick={nextSlide}>
      <i className="fa-solid fa-angle-right"></i>
      </button>
   </div>

        <div className={styles.row1}>
          {brands.slice(currentIndex, currentIndex + visibleCards).map((brand, index) => (
            <div key={index} className={styles.col1}>
              <div className={styles.card}>
                <a href='#'><img src={brand} alt={`Brand-${currentIndex + index}`} /></a>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </>
  );
}

export default ChaseComponent;

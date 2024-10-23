import React, { useState } from 'react';
import westside from '../../../../assets/image/westside.png';
import westside1 from '../../../../assets/image/westside1.png';
import westside2 from '../../../../assets/image/westside2.png';
import westside3 from '../../../../assets/image/westside3.png';
import westside4 from '../../../../assets/image/westside4.png';
import westside5 from '../../../../assets/image/westside5.png';
import westside6 from '../../../../assets/image/westside6.png';
import westside7 from '../../../../assets/image/westside7.png';
import westside8 from '../../../../assets/image/westside8.png';
import styles from '../BrandWest/BrandWest.module.css';

const brands = [
  westside1,
  westside2,
  westside3,
  westside4,
  westside5,
  westside6,
  westside7,
  westside8,
];

function BrandWest() {
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
      <div className={styles.west}>
        <img src={westside} alt="th" />
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
                <img src={brand} alt={`Brand-${currentIndex + index}`} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default BrandWest;

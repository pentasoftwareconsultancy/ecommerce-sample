import React, { useState } from 'react';
import Perfectly11 from '../../../../assets/image/Perfectly.png'
import Perfectly1 from '../../../../assets/image/Perfectly1.png'
import Perfectly2 from '../../../../assets/image/Perfectly2.png'
import Perfectly3 from '../../../../assets/image/Perfectly3.png'
import Perfectly4 from '../../../../assets/image/Perfectly4.png'
import Perfectly5 from '../../../../assets/image/Perfectly5.png'
import Perfectly6 from '../../../../assets/image/Perfectly6.png'
import Perfectly7 from '../../../../assets/image/Perfectly7.png'

import styles from '../Perfectly/Perfectly.module.css';
const brands = [
   Perfectly1,
   Perfectly2,
   Perfectly3,
   Perfectly4,
   Perfectly5,
   Perfectly6,
   Perfectly7
  ];
function Perfectly() {
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
      <div className={styles.Perfectly}>
        <img src={Perfectly11} alt='' />
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
  )
}

export default Perfectly
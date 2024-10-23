import React, { useState } from 'react';
import Home from '../../../../assets/image/HOME.png'
import Home1 from '../../../../assets/image/Home1.png'
import Home2 from '../../../../assets/image/Home2.png'
import Home3 from '../../../../assets/image/Home3.png'
import Home4 from '../../../../assets/image/Home4.png'
import Home5 from '../../../../assets/image/Home5.png'
import Home6 from '../../../../assets/image/Home6.png'
import Home7 from '../../../../assets/image/Home7.png'
import Home8 from '../../../../assets/image/Home8.png'

import styles from '../Happy/Happy.module.css'
const brands = [
  Home1,
  Home2,
  Home3,
  Home4,
  Home5,
  Home6,
  Home7,
  Home8
        ];
function Happy() {
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
    <div className={styles.Home}>
        <img src={Home} alt=''/>
        
    </div>

    

    <>

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
    
    </>
  )
}

export default Happy
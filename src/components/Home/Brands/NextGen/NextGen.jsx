import React, { useState } from 'react';

import GEN from '../../../../assets/image/GEN.png'
import GEN1 from '../../../../assets/image/GEN1.png'
import GEN2 from '../../../../assets/image/GEN2.png'
import GEN3 from '../../../../assets/image/GEN3.png'
import GEN4 from '../../../../assets/image/GEN4.png'
import GEN5 from '../../../../assets/image/GEN5.png'
import GEN6 from '../../../../assets/image/GEN6.png'
import GEN7 from '../../../../assets/image/GEN7.png'
import GEN8 from '../../../../assets/image/GEN8.png'
import styles from '../NextGen/NextGen.module.css'
const brands = [
 GEN1,
 GEN2,
 GEN3,
 GEN4,
 GEN5,
 GEN6,
 GEN7,
 GEN8
    
     
     ];
function NextGen() {
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
    <div className={styles.Next}>
        <img src={GEN} alt=''/>
        
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

export default NextGen
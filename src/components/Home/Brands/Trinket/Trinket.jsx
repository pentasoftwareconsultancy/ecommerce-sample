import React, { useState } from 'react';
import Trinket12 from '../../../../assets/image/Trinket.png'
import Trinket1 from '../../../../assets/image/Trinket1.png'
import Trinket2 from '../../../../assets/image/Trinket2.png'
import Trinket3 from '../../../../assets/image/Trinket3.png'
import Trinket4 from '../../../../assets/image/Trinket4.png'
import Trinket5 from '../../../../assets/image/Trinket5.png'
import Trinket6 from '../../../../assets/image/Trinket6.png'
import Trinket7 from '../../../../assets/image/Trinket7.png'
import Trinket8 from '../../../../assets/image/Trinket8.png'
import styles from '../Trinket/Trinket.module.css';

const brands = [
Trinket1,
Trinket2,
Trinket3,
Trinket4,
Trinket5,
Trinket6,
Trinket7,
Trinket8
   ];
function Trinket() {
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
    <div className={styles.Trinket}>
      <img src={Trinket12} alt='' />
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

export default Trinket
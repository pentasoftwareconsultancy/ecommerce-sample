import React, { useState } from 'react';
import Gadget11 from '../../../../assets/image/Gadget.png'
import Gadget1 from '../../../../assets/image/Gadget1.png'
import Gadget2 from '../../../../assets/image/Gadget2.png'
import Gadget3 from '../../../../assets/image/Gadget3.png'
import Gadget4 from '../../../../assets/image/Gadget4.png'
import Gadget5 from '../../../../assets/image/Gadget5.png'
import Gadget6 from '../../../../assets/image/Gadget6.png'
import Gadget7 from '../../../../assets/image/Gadget7.png'

import styles from '../Gadget/Gadget.module.css'; 
const brands = [
    Gadget1,
    Gadget2,
    Gadget3,
    Gadget4,
    Gadget5,
    Gadget6,
    Gadget7,
  

          ];
function Gadget() {
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
    <div className={styles.Gadget}>
        <img src={Gadget11} alt=''/>
        
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

export default Gadget
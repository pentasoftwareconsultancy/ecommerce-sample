import React, { useState } from 'react';
import Global1 from '../../../../assets/image/Global.png'
import Global2 from '../../../../assets/image/Global1.png'
import Global3 from '../../../../assets/image/Global2.png'
import Global4 from '../../../../assets/image/Global3.png'
import Global9 from '../../../../assets/image/Global4.png'
import Global5 from '../../../../assets/image/Global5.png'
import Global6 from '../../../../assets/image/Global6.png'
import Global7 from '../../../../assets/image/Global7.png'
import Global8 from '../../../../assets/image/Global8.png'

import styles from '../Global/Global.module.css'

const brands = [
 
   Global3,
   Global4,
   Global5,
   Global6,
   Global7,
   Global8,
   Global9

   
    
    ];
function Global() {
   
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
    <div className={styles.Global}>
        <img src={Global1} alt=''/>
        
    </div>
    <div className={styles.Globa2}>
        <img src={Global2} alt=''/>
        
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

export default Global
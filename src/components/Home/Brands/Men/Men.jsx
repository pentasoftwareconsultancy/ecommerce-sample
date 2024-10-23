import React, { useState } from 'react';
import Men2 from '../../../../assets/image/men2.png'
import Men3 from '../../../../assets/image/men3.png'
import Men4 from '../../../../assets/image/men4.png'
import Men5 from '../../../../assets/image/men5.png'
import Men6 from '../../../../assets/image/men6.png'
import Men7 from '../../../../assets/image/men7.png'
import Men8 from '../../../../assets/image/men1.png'
import Men1 from '../../../../assets/image/men.png'
import styles from '../Men/Men.module.css'
const brands = [
 
  Men2,
  Men3,
  Men4,
  Men5,
  Men6,
  Men7 ,
  Men8
  
  ];
function Men() {
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
    <div className={styles.Men}>
        <img src={Men1} alt=''/>
        
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

export default Men
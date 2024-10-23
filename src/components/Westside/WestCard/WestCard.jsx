import React, { useState } from 'react';
import  WestCrad1 from '../../../assets/West/WestCrad1.webp';
import  WestCrad2 from '../../../assets/West/WestCrad2.webp';
import  WestCrad3 from '../../../assets/West/WestCrad3.webp';
import  WestCrad4 from '../../../assets/West/WestCrad4.webp';
import  WestCrad5 from '../../../assets/West/WestCrad5.webp';
import  WestCrad6 from '../../../assets/West/WestCrad6.webp';
import  WestCrad7 from '../../../assets/West/WestCrad7.webp';
import  WestCrad8 from '../../../assets/West/WestCrad8.jpg';
import  WestCard9 from '../../../assets/West/WestCrad9.jpg';
import  WestCard10 from '../../../assets/West/WestCrad10.webp';
import  WestCard11 from '../../../assets/West/WestCrad11.jpg';
import  WestCard12 from '../../../assets/West/WestCrad12.webp';


import styles from '../WestCard/WestCard.module.css'; 

const brands = [
  WestCrad1,
  WestCrad2,
   WestCrad3,
   WestCrad4,
   WestCrad5,
   WestCrad6,
   WestCrad7,
   WestCrad8,
WestCard9,
WestCard10,
WestCard11,
WestCard12
       ];

function WestCard() {
  
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

export default WestCard
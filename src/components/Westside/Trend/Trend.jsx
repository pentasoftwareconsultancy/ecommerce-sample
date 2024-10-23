import React, { useState } from 'react';
import Trend1 from '../../../assets/West/Trend.jpg';
import  WestCrad1 from '../../../assets/West/Trend1.webp';
import  WestCrad2 from '../../../assets/West/Trend2.jpg';
import  WestCrad3 from '../../../assets/West/Trend3.jpg';
import  WestCrad4 from '../../../assets/West/Trend4.webp';
import  WestCrad5 from '../../../assets/West/Trend5.webp';
import  WestCrad6 from '../../../assets/West/Trend6.webp';
import  WestCrad7 from '../../../assets/West/Trend7.jpg';
import  WestCrad8 from '../../../assets/West/Trend8.jpg';

import styles  from '../Trend/Trend.module.css'
const brands = [
    WestCrad1,
    WestCrad2,
     WestCrad3,
     WestCrad4,
     WestCrad5,
     WestCrad6,
     WestCrad7,
     WestCrad8
         ];
function Trend() {
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
  <div className={styles.Trend}>
    <a href='/' ><img src={Trend1} alt='th'/></a>
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

export default Trend
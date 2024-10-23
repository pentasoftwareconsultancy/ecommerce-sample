import React, { useState } from 'react';
import Bring1 from '../../../assets/West/Foot1.webp'
import Bring2 from '../../../assets/West/Foot2.webp'
import Bring3 from '../../../assets/West/Foot3.webp'

import  WestCrad1 from '../../../assets/West/BringWest1.webp';
import  WestCrad2 from '../../../assets/West/BringWest2.webp';
import  WestCrad3 from '../../../assets/West/BringWest3.webp';
import  WestCrad4 from '../../../assets/West/BringWest4.webp';
import  WestCrad5 from '../../../assets/West/BringWest5.webp';
import  WestCrad6 from '../../../assets/West/BringWest6.webp';
import  WestCrad7 from '../../../assets/West/BringWest3.webp';
import  WestCrad8 from '../../../assets/West/BringWest4.webp';
import styles from '../Footwear/Footwear.module.css';
const brands = [
    WestCrad1,
    WestCrad2,
     WestCrad3,
     WestCrad4,
     WestCrad5,
     WestCrad6,
     WestCrad8,
     WestCrad7
         ];
function Footwear() {
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
  return (<>
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
    <div className={styles.p}>
    <p><b>Footwear Faves</b></p>
  </div>
  <div className={styles.Bring1}>
    <div className={styles.ca}>
  <a href="/"><img src={Bring1} alt=""></img></a>
        
  <a href="/"><img src={Bring2} alt=""></img></a>
  <a href="/"><img src={Bring3} alt=""></img></a>
  </div>
    </div>
    <div className={styles.p}>
    <p><b>In Focus: Indianwear</b></p>
  </div>
        </>
  )
}

export default Footwear
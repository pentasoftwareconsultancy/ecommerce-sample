// import React, { useState } from 'react';
// import heritage2 from '../Heritage/images/heritage2.png'
// import heritage3 from '../Heritage/images/heritage3.png'
// import heritage4 from '../Heritage/images/heritage4.png'
// import heritage5 from '../Heritage/images/heritage5.png'
// import heritage6 from '../Heritage/images/heritage6.png'
// import heritage7 from '../Heritage/images/heritage7.png'
// import heritage8 from '../Heritage/images/heritage8.png'
// import h from '../Heritage/images/Heritage1.png'
// import Heritage1 from '../Heritage/images/Heritage.png'
// import styles from '../Heritage/Heritage.module.css'
// const brands = [
//   heritage2,
//   heritage3,
//   heritage4,
//   heritage5,
//   heritage6,
//   heritage7

// ];
// function Heritage() {
 
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const visibleCards = 3; // Number of visible cards at a time
  
//     const prevSlide = () => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? brands.length - visibleCards : prevIndex - visibleCards
//       );
//     };
  
//     const nextSlide = () => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex + visibleCards >= brands.length ? 0 : prevIndex + visibleCards
//       );
//     };
//   return (
//     <>
//     <div className={styles.Heritage}>
//         <img src={Heritage1} alt=''/>
        
//     </div>
//     <div className={styles.h}>

//         <img src={h} alt=''/>
//     </div>

//     <>

//     <div className={styles.button}>

// <div className={styles.carousel}>
//   <button className={styles.prevButton} onClick={prevSlide}>
//   <i className="fa-solid fa-angle-left"></i>
//   </button>
//   <button className={styles.nextButton} onClick={nextSlide}>
//   <i className="fa-solid fa-angle-right"></i>
//   </button>
// </div>

//         <div className={styles.row1}>
//           {brands.slice(currentIndex, currentIndex + visibleCards).map((brand, index) => (
//             <div key={index} className={styles.col1}>
//               <div className={styles.card}>
//                 <img src={brand} alt={`Brand-${currentIndex + index}`} />
//               </div>
//             </div>
//           ))}
//         </div>

      
//       </div>
//       <div className={styles.west}>
//         <img src={heritage8} alt="th" />
//       </div>
//     </>
//     </>
//   )
// }

//  export default Heritage

import React, { useState } from 'react';
import styles from '../Heritage/Heritage.module.css';

const heritage2 = 'https://assets.tatacliq.com/medias/sys_master/images/62351069675550.png';
const heritage3 = 'https://assets.tatacliq.com/medias/sys_master/images/62351069741086.png';
const heritage4 = 'https://assets.tatacliq.com/medias/sys_master/images/62351069806622.png';
const heritage5 = 'https://assets.tatacliq.com/medias/sys_master/images/62351069872158.png';
const heritage6 = 'https://assets.tatacliq.com/medias/sys_master/images/62351069937694.png';
const heritage7 = 'https://assets.tatacliq.com/medias/sys_master/images/62351070003230.png';

const h = 'https://assets.tatacliq.com/medias/sys_master/images/62351070199838.png';
const Heritage1 = 'https://assets.tatacliq.com/medias/sys_master/images/62351070134302.png';

const brands = [
  heritage2,
  heritage3,
  heritage4,
  heritage5,
  heritage6,
  heritage7

];

function Heritage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; // Number of visible cards at a time

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
      <div className={styles.Heritage}>
        <img src={Heritage1} alt='' />
      </div>
      <div className={styles.h}>
        <img src={h} alt='' />
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
                <img src={brand} alt={`Brand-${currentIndex + index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </>
  );
}

export default Heritage;








  



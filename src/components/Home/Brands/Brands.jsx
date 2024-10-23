import React from 'react'
import Brand6 from '../../../assets/image/Brand6.png'
import Brand7 from '../../../assets/image/Brand7.png'
import Brand8 from '../../../assets/image/Brand8.png'
import Brand5 from '../../../assets/image/Brand5.png'
import brand from '../../../assets/image/Brands.png'
import Brand1 from '../../../assets/image/Brand1.png'
import Brand2 from '../../../assets/image/Brand2.png'
import Brand3 from '../../../assets/image/Brand3.png'
import Brand4 from '../../../assets/image/Brand4.png'
import styles from '../Brands/Brands.module.css'
function Brands() {
  return (
    <>
    <div className={styles.brand}>
      <img src={brand} alt='this is '/>
    </div>
    <div className={styles.row}>
  <div className={styles.col}>
    <div className={styles.card}>
      <img src={Brand1} alt="..." />
      
    </div>
  </div>
  <div className={styles.col}>
    <div className={styles.card1}>
      <img src={Brand2}  alt="..." />
      
    </div>
  </div>
</div>
<div className={styles.row1}>

  <div className={styles.col1}>
    <div className={styles.card}>
      <img src={Brand3} alt="..." />
      
    </div>
  </div>
  <div className={styles.col1}>
    <div className={styles.card1}>
      <img src={Brand4}  alt="..." />
      
    </div>
  </div>
</div>

<div className={styles.row}>
   <div className={styles.col}>
     <div className={styles.card}>
       <img src={Brand5} alt="..." />
      
     </div>
   </div>
   <div className={styles.col}>
         <div className={styles.card1}>
     <img src={Brand6}  alt="..." />
      
     </div>
   </div>
 </div>
 <div className={styles.row1}>

   <div className={styles.col1}>
     <div className={styles.card}>
       <img src={Brand7} alt="..." />
      
     </div>
   </div>
   <div className={styles.col1}>
     <div className={styles.card1}>
       <img src={Brand8}  alt="..." />
      
     </div>
   </div>
 </div>




{/* <div className={styles.row1}>

  <div className={styles.col1}>
    <div className={styles.card}>
      <img src={Brand7} alt="..." />
      
    </div>
  </div>
  <div className={styles.col1}>
    <div className={styles.card1}>
      <img src={Brand8}  alt="..." />
      
    </div>
  </div>
  <div className={styles.col1}>
    <div className={styles.card1}>
      <img src={Brand8}  alt="..." />
      
    </div>
  </div>
  <div className={styles.col1}>
    <div className={styles.card1}>
      <img src={Brand8}  alt="..." />
      
    </div>
  </div>
  <div className={styles.col1}>
    <div className={styles.card1}>
      <img src={Brand8}  alt="..." />
      
    </div>
  </div>
  <div className={styles.col1}>
    <div className={styles.card1}>
      <img src={Brand8}  alt="..." />
      
    </div>
  </div>
  <div className={styles.col1}>
    <div className={styles.card1}>
      <img src={Brand8}  alt="..." />
      
    </div>
  </div>
</div> */}
    </>
  )
}

export default Brands
import React from 'react'

import style2 from '../../../assets/West/PlayWest1.webp'
import style3 from '../../../assets/West/PlayWest2.webp';
import style4 from '../../../assets/West/PlayWest3.webp';
import style5 from '../../../assets/West/PlayWest4.webp';
import styles from '../PlayWest/PlayWest.module.css';

function PlayWest() {
  return (
    <>
  


    <div className={styles.row}>
  <div className={styles.col}>
    <div className={styles.card}>
      <img src={style2} alt="..." />
      
    </div>
  </div>
  <div className={styles.col}>
    <div className={styles.card1}>
      <img src={style3}  alt="..." />
      
    </div>
  </div>
</div>
<div className={styles.p}>
    <p><b>Men's Closet Essentials</b></p>
  </div>
<div className={styles.row1}>
  <div className={styles.col}>
    <div className={styles.card}>
      <img src={style4} alt="..." />
      
    </div>
  </div>
  <div className={styles.col}>
    <div className={styles.card1}>
      <img src={style5}  alt="..." />
      
    </div>
  </div>
</div>







    </>
  )
}

export default PlayWest
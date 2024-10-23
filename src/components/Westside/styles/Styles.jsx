import React from 'react'
import style6 from '../../../assets/West/styles1.jpg';
import style from '../../../assets/West/styles6.webp';
import style1 from '../../../assets/West/Express.jpg';
import style2 from '../../../assets/West/styles2.jpg';
import style3 from '../../../assets/West/styles3.jpg';
import style4 from '../../../assets/West/styles4.webp';
import style5 from '../../../assets/West/styles5.jpg';
import styles from '../styles/Styles.module.css'

function Styles() {
    {
        return (
          <>
          <div className={styles.brand}>
            <img src={style1} alt='this is '/>
          </div>


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
      <div className={styles.row1}>
        <div className={styles.col}>
          <div className={styles.card}>
            <img src={style} alt="..." />
            
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.card1}>
            <img src={style6}  alt="..." />
            
          </div>
        </div>
      </div>
      
      
      
      
      
   
          </>
        )
      }
}

export default Styles
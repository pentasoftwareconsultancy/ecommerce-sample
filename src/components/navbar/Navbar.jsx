import React from "react";
// import logo from "../../assets/image/g.png";
import styles from "../navbar/Navbar.module.css";
function Navbar() {
  return (
    <>
      <div className={styles.Navbar}>
        {/* <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt="this is log" />
          </a>
        </div> */}
        <></>

        <div className={styles.nav}>
          <ul className={styles.navul}>
            <li className={styles.navli}>GUDIYA GAUTAM</li>
            <li className={styles.menu}>Clio Cash</li>
            <li className={styles.menu}>Gift Cash</li>
            <li className={styles.menu}>Clio Care</li>
            <li className={styles.menu}>Track Orders</li>
            <li className={styles.menu}>Sing in/Sign Up</li>
          </ul>

          <div className={styles.navbar}>
            <div className={styles.collapse}>
              <ul className={styles.wrapper}>
               <li className={styles.wrapperli}>
                    home
                  </li>
                  <li className={styles.wrapperli}>
                    home
                  </li>
                 
                  <li className={styles.wrapperlis}>
                     <input className={styles.input} type="text"/>
                  </li>
                  <li className={styles.wrapperli}>
                    home
                  </li>
                
                  <li className={styles.wrapperli}>
                    home
                  </li>
                      
                        
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

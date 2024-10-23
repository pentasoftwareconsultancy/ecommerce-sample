import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
       <div className={styles.footerTop}>
        <div className={styles.paymentMethods}>
        <i class="fa-brands fa-cc-visa"></i>
        <i class="fa-brands fa-cc-mastercard"></i>
        <i class="fa-brands fa-cc-paypal"></i>
        <i class="fa-brands fa-cc-apple-pay"></i>
        </div>
        <div className={styles.carbonNeutral}>
        <i className="fa-brands fa-dhl"></i>  
              </div>
      </div>

    <footer className={styles.footer}>
   
      <div className={styles.footerBottom}>
        <div className={styles.column}>
          <h4>Hilfe & Informationen</h4>
          <a href="#">FAQ</a>
          <a href="#">Lieferung and Versand</a>
          <a href="#">Rückgabe and Umtausch</a>
          <a href="#">Widerruf</a>
          <a href="#">Datenschutz</a>
          <a href="#">AGB</a>
          <a href="#">Impressum</a>
          <a href="#">Sitemap</a>
        </div>

        <div className={styles.column}>
          <h4>Bereiche</h4>
          <a href="#">Home</a>
          <a href="#">Produkte</a>
          <a href="#">Story</a>
          <a href="#">Journal</a>
          <a href="#">Kontakt</a>
        </div>

        <div className={styles.column}>
          <h4>Account</h4>
          <a href="#">Mein Account</a>
          <a href="#">Bestellungen</a>
        </div>
        <div className={styles.column}>
          <h4>Tata CLiQ Offerings</h4>
          <a href="#">Tata CLiQ Offerings
          Watches for Men|Campus Shoes|Sandals for Men|Sneakers for Men|Reebok Shoes|Cotton Kurtis|Woodland Shoes|Jumpsuits|Allen Solly|Sparx Shoes|Gold Rings|Formal Shoes for Men|Sports Shoes for Men|Wallets for Men|Ladies Watches|Trolley Bags|Handbags for Women|Sling Bags for Women|Casual Shoes for Men|Boots for Men|Digital Watches|Sonata Watches|Sneakers for Women|Running Shoes|Puma Shoes|Boots for Women|Skechers|Malabargold|Fabindia|Utsa|Vark|Gia|LOV|Sitemap</a>
        </div>

       

        <div className={styles.newsletter}>
          <h4>Sign Up</h4>
          <p>
            Trag dich in unseren Newsletter ein um über neue Produkte informiert zu werden und Einblicke in unseren Design Prozess zu bekommen.
          </p>
          <input type="email" placeholder="E-Mail Adresse"  />
          <button>Senden</button>
        </div>
      </div>


     
    </footer>
    <div className={styles.socialMedia}>
          <h4>Download App
          <i className="fa-brands fa-android"></i>
          <i className="fa-brands fa-apple"></i>
          </h4>
          <div className={styles.socialMedia1}>

          <i class="fa-brands fa-youtube"></i>  
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-pinterest"></i>
          </div>
    <div className={styles.copy}>
        <h5>© 2024 Tata CLiQ | All rights reserved</h5>
    </div>
        </div>
    </>
  );
};

export default Footer;

import { useNavigate } from "react-router-dom";
import React from "react";
import Crad1 from "../../../assets/image/crad1.png";
import Crad2 from "../../../assets/image/crad2.png";
import Crad3 from "../../../assets/image/crad3.png";
import Crad4 from "../../../assets/image/crad4.png";
import Crad5 from "../../../assets/image/crad5.png";
import Crad6 from "../../../assets/image/crad6.png";
import Crad7 from "../../../assets/image/crad7.png";
import Crad8 from "../../../assets/image/crad8.png";
import Crad9 from "../../../assets/image/crad9.png";
import Crad10 from "../../../assets/image/crad10.png";
import styles from "./Card.module.css";

function Card() {
  const navigate = useNavigate();

  // Function to navigate to the /watch route
  const handleNavigateToWatch = () => {
    navigate("/watch");
  };
  const handleNavigateToWestside = () => {
    navigate("/westside");
  };
    const handleNavigateToWomen = () => {
    navigate("/Women");
  };

  return (
    <>
      <div className={styles.row}>
        {/* Use onClick with the useNavigate hook */}
       
        <div className={styles.card} onClick={handleNavigateToWatch} style={{ cursor: "pointer" }}>
          <img src={Crad1} className={styles.cardimg} alt="Crad1" />
        </div>

        {/* Other cards remain the same */}
        <div className={styles.card} onClick={handleNavigateToWestside} style={{ cursor: "pointer" }}>
          <img src={Crad2} className={styles.cardimg} alt="Crad2" />
        </div>

        <div className={styles.card}  onClick={handleNavigateToWestside} style={{ cursor: "pointer" }}>
          <img src={Crad3} className={styles.cardimg} alt="Crad3" />
        </div>

        <div className={styles.card}onClick={handleNavigateToWestside} style={{ cursor: "pointer" }}>
          <img src={Crad4} className={styles.cardimg} alt="Crad4" />
        </div>

        <div className={styles.card}onClick={handleNavigateToWestside} style={{ cursor: "pointer" }}>
          <img src={Crad5} className={styles.cardimg} alt="Crad5" />
        </div>

        <div className={styles.card}onClick={handleNavigateToWestside} style={{ cursor: "pointer" }}>
          <img src={Crad6} className={styles.cardimg} alt="Crad6" />
        </div>

        <div className={styles.card}onClick={handleNavigateToWestside} style={{ cursor: "pointer" }}>
          <img src={Crad7} className={styles.cardimg} alt="Crad7" />
        </div>

        <div className={styles.card}onClick={handleNavigateToWestside} style={{ cursor: "pointer" }}>
          <img src={Crad8} className={styles.cardimg} alt="Crad8" />
        </div>

        <div className={styles.card}onClick={handleNavigateToWestside} style={{ cursor: "pointer" }}>
          <img src={Crad9} className={styles.cardimg} alt="Crad9" />
        </div>

        <div className={styles.card}onClick={handleNavigateToWestside} style={{ cursor: "pointer" }}>
          <img src={Crad10} className={styles.cardimg} alt="Crad10" />
        </div>
      </div>
    </>
  );
}

export default Card;

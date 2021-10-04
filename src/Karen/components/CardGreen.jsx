import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';

import styles from "./CardGreen.module.scss"

import { GiClick } from "react-icons/gi"
import { FaResearchgate } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";

//import rogelio from "../ProfileImg/rogelioBustamante.jpg"

function FlipCard( {card} ) {
    const [showBack, setShowBack] = useState(false); 
  
    function handleClick() { 
        setShowBack(!showBack); 
    } 

    return (
      <ReactCardFlip isFlipped={showBack} flipDirection="vertical" flipSpeedBackToFront="0.9" flipSpeedFrontToBack="0.9">
        <div className={`${styles.Front} ${styles.Cyan}`}>
          <img src={require(`../ProfileImg/${card.pictureName}.${card.fileType}`)} alt={card.pictureName} className={styles.Image} />
          <div className={styles.Content}>
            <h4 className={styles.TitleCard2}>{card.name}</h4>
            <div className={styles.Icons}>
              <a href={card.researchGateLink} ><FaResearchgate className={styles.Icon} /></a>
              <a href={card.mailLink} ><HiOutlineMail className={styles.Icon} /></a>
              <a href={card.linkedInLink}><ImLinkedin className={styles.Icon} /></a>
            </div>
            <div className={styles.ButtonContainer}>
              <button className={styles.ButtonOne} onClick={handleClick}>Click to flip</button>
            </div>
          </div>
        </div>

        <div className={`${styles.Front} ${styles.Cyan}`}>
            <div className={styles.Content}>
              <h4 className={styles.TitleCard2}>{card.titleBack}</h4>
              <p className={styles.Text}>{card.text1Back}</p>
              <div className={styles.ButtonContainer}>
                <button className={styles.ButtonOne} onClick={handleClick}>Click to flip</button>
              </div>
            </div>
        </div>
      </ReactCardFlip>
    );
  }
  
export default FlipCard;
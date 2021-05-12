import React from 'react';
import styles from "./CardPurple.module.scss"
import { FaResearchgate } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { ImLinkedin } from "react-icons/im"
import { GiClick } from "react-icons/gi"

function CardPurple(props) {
    return(
    <div className={styles.Card}>
        <div className={styles.CardInner}>
            <div className={`${styles.CardFace} ${styles.CardFacefront}`}>
                <h2>{props.TitleBack}</h2>
                <p>{props.TextOneBack}</p>
                <p>{props.TextTwoBack}</p>
                <h3>{props.SubtitleBack}</h3>
                <div className={styles.Icons}>
                    <a href="#"><FaResearchgate className={styles.Icon}/></a>
                    <a href="#"><HiOutlineMail className={styles.Icon}/></a>
                    <a href="#"><ImLinkedin className={styles.Icon}/></a>
                </div>
            </div>
            <div className={`${styles.CardFace} ${styles.CardFaceback}`}>
                <div className={styles.CardContent}>
                    <div className={styles.CardHeader}>
                        <img src={props.Image} alt="" className={styles.Image} />
                        <h2>{props.NameFront}</h2>
                    </div>
                    <div className={styles.CardBody}>
                        <h3>{props.SubtitleFront}</h3>
                        <p>{props.TextFront}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardPurple;
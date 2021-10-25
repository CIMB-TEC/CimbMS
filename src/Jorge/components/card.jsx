import React from 'react';
import styles from "./cardStyles.module.scss"
import {GiClick} from "react-icons/gi"
import {GiRobotLeg} from "react-icons/gi"

function card(props){
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <div className= {[`${styles.face} ${styles.face1} `]}>
                    <div className={styles.content}>
                        <GiRobotLeg className={styles.icono2} alt=""/>
                        <h3 className={styles.subtitle}>{props.Titulo}
                        </h3>
                        <div className={styles.arrow}>
                            <GiClick  alt=""/>
                        </div>
                    </div>
                </div>
                <div className= { `${styles.face} ${styles.face2} `}>
                    <div className={styles.content}>
                        <p className={styles.Text}>{props.Texto}</p>
                        <a className={styles.anchor}href={props.enlace}>{props.enlaceTitulo}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default card;
    
import React from 'react';
import styles from "./cardNewStyles.module.scss"
import {GiClick} from "react-icons/gi"
import {AiOutlineCar} from "react-icons/ai"

function cardNew(props){
    return(
        <div className={styles.box}>
            <div className={styles.divicono}>
                <AiOutlineCar className={styles.icono1} alt="" />
            </div>
            <h1>{props.Titulo}</h1>
            <div className={styles.icono2}>
                <GiClick className={styles.arrow} alt=""/>
            </div>
            <div className={styles.detalles}>
                <div className={styles.content}>
                    <h2>{props.Titulo}</h2>
                    <p>{props.Texto}</p>
                    <a className={styles.anchor1} href={props.enlace}>{props.enlaceTitulo}</a>
                </div>
            </div>
        </div>
        
    )
}
    
export default cardNew;
    
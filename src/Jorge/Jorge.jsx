
import CardPurple from './components/cardPurple'
import CardLblue from './components/cardLblue'
import styles from './JorgeStyles.module.scss'

import proyectsEng from "./proyectsEng.json"
import proyectsEsp from "./proyectsEsp.json"
import { LanguageContext } from "../App"
import React, { useContext } from "react"


function Jorge() {

    const eng = useContext(LanguageContext)
    let proyects = eng ? proyectsEng : proyectsEsp;
    return (

    <div className={styles.wrapper}> 
        
        <h1 className={styles.heading_0}>
            {proyects.heading0}
        </h1>
        <h1 className={styles.heading_1}>
            {proyects.heading1}
        </h1>
        <div className={styles.containerPostgrado}>
            <div className={styles.cardLblue}>
            {
                proyects.proyectBlue.map((proyect) => {
                    return (
                        <CardLblue 
                            Titulo = {proyect.title}
                            Texto = {proyect.text}
                            enlace = {proyect.link}
                            enlaceTitulo = {proyect.titleLink}
                        />
                    )
                })
            }
                
            </div>
        </div>
        <h1 className={styles.heading_2}>
            {proyects.heading2}
        </h1>
        <div className={styles.containerPregrado}>
            <div className={styles.cardPurple}>
            {
                proyects.proyectPurple.map((proyect2) => {
                    return (
                        <CardPurple 
                            Titulo = {proyect2.title}
                            Texto = {proyect2.text}
                            enlace = {proyect2.link}
                            enlaceTitulo = {proyect2.titleLink}
                        />
                    )
                })
            }
            </div>
        </div>
        
    </div>);
}

export default Jorge;

import CardPurple from './components/cardPurple'
import CardLblue from './components/cardLblue'
import CardTab from './components/cardTab'
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

        <h1 className={styles.heading}>
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
        <h1 className={styles.heading2}>
            {proyects.heading2_2}
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
        <div className={styles.containerTab}>
            <div className={styles.cardTab}>
                <CardTab
                    TituloT0 = "Inteligencia Artificial"
                    TextoT0 = "Eros mauris tincidunt litora varius nec porta feugiat magna, sollicitudin est eu curabitur torquent fringilla ullamcorper commodo, hac tempor tellus in odio accumsan auctor. Curae porttitor ultricies mi sem libero blandit litora ante suspendisse magnis, netus eu sed fames mattis hendrerit ad bibendum montes gravida, sodales convallis class pellentesque mus scelerisque erat sociosqu pharetra. Libero conubia quisque condimentum cursus curae nostra sociosqu nibh sapien donec, ac natoque ultrices sagittis elementum nam auctor penatibus ridiculus mollis suspendisse, parturient erat turpis orci ultricies enim neque tristique habitasse. Sagittis conubia nullam mi pharetra etiam ac consequat orci, commodo sed justo turpis quisque nascetur sociis per, ligula pulvinar varius pellentesque torquent proin ridiculus."
                    TituloT1 = "Mecatrónica"
                    TextoT1 = "Eros mauris tincidunt litora varius nec porta feugiat magna, sollicitudin est eu curabitur torquent fringilla ullamcorper commodo, hac tempor tellus in odio accumsan auctor. Curae porttitor ultricies mi sem libero blandit litora ante suspendisse magnis, netus eu sed fames mattis hendrerit ad bibendum montes gravida, sodales convallis class pellentesque mus scelerisque erat sociosqu pharetra. Libero conubia quisque condimentum cursus curae nostra sociosqu nibh sapien donec, ac natoque ultrices sagittis elementum nam auctor penatibus ridiculus mollis suspendisse, parturient erat turpis orci ultricies enim neque tristique habitasse. Sagittis conubia nullam mi pharetra etiam ac consequat orci, commodo sed justo turpis quisque nascetur sociis per, ligula pulvinar varius pellentesque torquent proin ridiculus."
                    TituloT2 = "Energía"
                    TextoT2 = "LoEros mauris tincidunt litora varius nec porta feugiat magna, sollicitudin est eu curabitur torquent fringilla ullamcorper commodo, hac tempor tellus in odio accumsan auctor. Curae porttitor ultricies mi sem libero blandit litora ante suspendisse magnis, netus eu sed fames mattis hendrerit ad bibendum montes gravida, sodales convallis class pellentesque mus scelerisque erat sociosqu pharetra. Libero conubia quisque condimentum cursus curae nostra sociosqu nibh sapien donec, ac natoque ultrices sagittis elementum nam auctor penatibus ridiculus mollis suspendisse, parturient erat turpis orci ultricies enim neque tristique habitasse. Sagittis conubia nullam mi pharetra etiam ac consequat orci, commodo sed justo turpis quisque nascetur sociis per, ligula pulvinar varius pellentesque torquent proin ridiculus.rem"
                    TituloT3 = "Comunicación"
                    TextoT3 = "Eros mauris tincidunt litora varius nec porta feugiat magna, sollicitudin est eu curabitur torquent fringilla ullamcorper commodo, hac tempor tellus in odio accumsan auctor. Curae porttitor ultricies mi sem libero blandit litora ante suspendisse magnis, netus eu sed fames mattis hendrerit ad bibendum montes gravida, sodales convallis class pellentesque mus scelerisque erat sociosqu pharetra. Libero conubia quisque condimentum cursus curae nostra sociosqu nibh sapien donec, ac natoque ultrices sagittis elementum nam auctor penatibus ridiculus mollis suspendisse, parturient erat turpis orci ultricies enim neque tristique habitasse. Sagittis conubia nullam mi pharetra etiam ac consequat orci, commodo sed justo turpis quisque nascetur sociis per, ligula pulvinar varius pellentesque torquent proin ridiculus."
                    TituloT4 = "Bioinstrumentación"
                    TextoT4 = "Eros mauris tincidunt litora varius nec porta feugiat magna, sollicitudin est eu curabitur torquent fringilla ullamcorper commodo, hac tempor tellus in odio accumsan auctor. Curae porttitor ultricies mi sem libero blandit litora ante suspendisse magnis, netus eu sed fames mattis hendrerit ad bibendum montes gravida, sodales convallis class pellentesque mus scelerisque erat sociosqu pharetra. Libero conubia quisque condimentum cursus curae nostra sociosqu nibh sapien donec, ac natoque ultrices sagittis elementum nam auctor penatibus ridiculus mollis suspendisse, parturient erat turpis orci ultricies enim neque tristique habitasse. Sagittis conubia nullam mi pharetra etiam ac consequat orci, commodo sed justo turpis quisque nascetur sociis per, ligula pulvinar varius pellentesque torquent proin ridiculus."
                />
            </div>
        </div>
        
    </div>);
}

export default Jorge;
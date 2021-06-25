
import CardPurple from './components/cardPurple'
import CardLblue from './components/cardLblue'
import styles from './JorgeStyles.module.scss'

import projectsEng from "./projectsEng.json"
import projectsEsp from "./projectsEsp.json"
import { LanguageContext } from "../App"
import React, { useContext } from "react"


function Jorge() {

    const eng = useContext(LanguageContext)
    let projects = eng ? projectsEng : projectsEsp;
    return (

    <div className={styles.wrapper}> 
        
        <h1 className={styles.heading_0}>
            {projects.heading0}
        </h1>
        <h1 className={styles.heading_1}>
            {projects.heading1}
        </h1>
        <div className={styles.containerPostgrado}>
            <div className={styles.cardLblue}>
            {
                projects.projectBlue.map((project) => {
                    return (
                        <CardLblue 
                            Titulo = {project.title}
                            Texto = {project.text}
                            enlace = {project.link}
                            enlaceTitulo = {project.titleLink}
                        />
                    )
                })
            }
                
            </div>
        </div>
        <h1 className={styles.heading_2}>
            {projects.heading2}
        </h1>
        <div className={styles.containerPregrado}>
            <div className={styles.cardPurple}>
            {
                projects.projectPurple.map((project2) => {
                    return (
                        <CardPurple 
                            Titulo = {project2.title}
                            Texto = {project2.text}
                            enlace = {project2.link}
                            enlaceTitulo = {project2.titleLink}
                        />
                    )
                })
            }
            </div>
        </div>
        
    </div>);
}

export default Jorge;

import Card from './components/card'
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
            <div className={styles.card}>
            {
                projects.projectPostgraduate.map((project) => {
                    return (
                        <Card
                            Titulo = {project.title}
                            Texto = {project.text}
                            enlace = {project.link}
                            enlaceTitulo = {project.titleLink}
                            color = {project.color}
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
            <div className={styles.card}>
            {
                projects.projectUndergraduate.map((project2) => {
                    return (
                        <Card
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

import Card from './components/card'
import styles from './JorgeStyles.module.scss'

import projectsEng from "./projectsEng.json"
import projectsEsp from "./projectsEsp.json"
import { LanguageContext } from "../App"
import React, { useContext, useEffect, useState } from "react"
import firebase from "firebase"


function Jorge() {

    const [projectsPost, setProjectsPost] = useState([])
    const [proyectosPost, setProyectosPost] = useState([])
    const [projectsUnder, setProjectsUnder] = useState([])
    const [proyectosUnder, setProyectosUnder] = useState([])

    let Project = {
      title: "",
      text: "",
      link: "",
      icon: "",
    }

    const db = firebase.firestore()

    const eng = useContext(LanguageContext)

    const getValue = async () => {
		const projectRef = db.collection("project");
		const projectsPostDB = await projectRef.where("school", "==", "1").get()
        console.log(projectsPostDB)
		if (projectsPostDB.empty) {
			console.log("No projects")
			return
		}
		projectsPostDB.forEach(project => {
            project = project.data()
			Project = {
                title: project.title,
                text: project.description,
                link: project.link,
                icon: project.img
            }
            setProjectsPost(projectsPost => [...projectsPost, Project])
            Project = {
                title: project.titulo,
                text: project.descripcion,
                link: project.link,
                icon: project.img
            }
            setProyectosPost(proyectosPost => [...proyectosPost, Project])
		})

        const projectsUnderDB = await projectRef.where("school", "==", "2").get()
		if (projectsUnderDB.empty) {
			console.log("No projects")
			return
		}
		projectsUnderDB.forEach(project => {
            project = project.data()
			Project = {
                title: project.title,
                text: project.description,
                link: project.link,
                icon: project.img
            }
            setProjectsUnder(projectsUnder => [...projectsUnder, Project])
            Project = {
                title: project.titulo,
                text: project.descripcion,
                link: project.link,
                icon: project.img
            }
            setProyectosUnder(proyectosUnder => [...proyectosUnder, Project])
		})
    }

    let projects = eng ? projectsEng : projectsEsp;

    let projectsP = eng ? projectsPost : proyectosPost

    let projectsU = eng ? projectsUnder : proyectosUnder

    useEffect(() => {
		getValue()

	}, [])

    return (

    <div className={styles.wrapper}> 
        
        <h1 className={styles.Subtitle}>
            {projects.heading0}
        </h1>
        <h1 className={styles.H1}>
            {projects.heading1}
        </h1>
        <div className={styles.containerPostgrado}>
            <div className={styles.card}>
            {
                projectsP.map((proj) => {
                    return (
                        <Card
                            Titulo = {proj.title}
                            Texto = {proj.text}
                            enlace = {proj.link}
                            enlaceTitulo = {projects.titleLink}
                        />
                    )
                })
            }
                
            </div>
        </div>
        <h1 className={styles.heading_2}>
            {projects.H1}
        </h1>
        <div className={styles.containerPregrado}>
            <div className={styles.card}>
            {
                projectsU.map((proj) => {
                    return (
                        <Card
                            Titulo = {proj.title}
                            Texto = {proj.text}
                            enlace = {proj.link}
                            enlaceTitulo = {projects.titleLink}
                        />
                    )
                })
            }
            </div>
        </div>
        
    </div>);
}

export default Jorge;
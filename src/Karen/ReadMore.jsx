import styles from "./ReadMoreStyles.module.scss"
//import styles from "./LPStyles.module.scss"
import initial from "./img/timeLine_1.png"
import final from "./img/timeLine_2.png"
import { BsCircle } from "react-icons/bs"
import CardTab from '../Karen/components/cardTab'
import ProjectCard from "../Paola/ProjectCard"
import React, { useContext, useState, useEffect } from "react"
import { LanguageContext } from "../App"
import firebase from "firebase"
import LP_Eng from "./LP_Eng.json"
import LP_Esp from "./LP_Esp.json"
import { useParams } from "react-router-dom";
import {AiOutlineCar} from "react-icons/ai"


const RM = () => {
    const { id } = useParams()
    const [project, setProject] = useState({})
    const [proyecto, setProyecto] = useState({})

    let shouldHide = true

    let Project = {
      title: "",
      text: "",
      areas: []
    }

    const db = firebase.firestore()

    const eng = useContext(LanguageContext)

    const getValue = async () => {
		const projectRef = db.collection("project");
        console.log(id)
		const projectDB = await projectRef.where("abv", "==", id).get()
		if (projectDB.empty) {
			console.log("No project")
			return
		}
        projectDB.forEach(pro => {
            pro = pro.data()
            Project = {
                title: pro.title,
                text: pro.full_desc,
                areas: pro.areasEng
            }
            setProject(Project)
            Project = {
                title: pro.titulo,
                text: pro.desc_comp,
                areas: pro.areasEsp
            }
            setProyecto(Project)
        })
    }

    let proj = eng ? project : proyecto
    let LP_ = eng ? LP_Eng : LP_Esp;

    useEffect(() => {
      getValue()
	  }, [])

  const timeLine = [
    {
      "year": "2016",
      "month": "March",
      "projects": [
        {
          "title_": "Mano",
          "objGen_Ti": "Objetivo General",
          "objGen_":"Este es el objetivo general de mano",
          "objEsp_Ti":"Objetivo Específico",
          "objEsp_":"Este es el objetivo especifico de mano",
          "date_":"Enero 2016",
          "group_":"AD",
          "link_Ti":"Descargar póster"
        },

        {
          "title_": "Cuello",
          "objGen_Ti": "Objetivo General",
          "objGen_":"Este es el objetivo general de cuello",
          "objEsp_Ti":"Objetivo Específico",
          "objEsp_":"Este es el objetivo especifico de cuello",
          "date_":"febrero 2016",
          "group_":"AD",
          "link_Ti":"Descargar póster"
        },
      ]
    },
    
    {
      "year": "2019",
      "month": "Noviembre",
      "projects": [
        {
          "title_": "Pie",
          "objGen_Ti": "Objetivo General",
          "objGen_":"Este es el objetivo general de pie",
          "objEsp_Ti":"Objetivo Específico",
          "objEsp_":"Este es el objetivo especifico de pie",
          "date_":"Noviembre 2019",
          "group_":"AD",
          "link_Ti":"Descargar póster"
        },

        {
          "title_": "Cabeza",
          "objGen_Ti": "Objetivo General",
          "objGen_":"Este es el objetivo general de cabeza",
          "objEsp_Ti":"Objetivo Específico",
          "objEsp_":"Este es el objetivo especifico de cabeza",
          "date_":"Diciembre 2019",
          "group_":"AD",
          "link_Ti":"Descargar póster"
        }
      ]
    }
  ]

  console.log(proj.areas)
  if (proj.areas){
    if (proj.areas[0].label != ""){
      shouldHide = false
    }
  }


  return (
    <div className={styles.Wrapper}>
      <nav className={styles.SideNav}>
      <div className={styles.circleContainer}> 
          <a href="#YearOne"><BsCircle /></a>
          <p className={styles.HideText}>2016</p>
        </div>
        <div className={styles.circleContainer}>
          <a href="#YearOne"><BsCircle /></a>
          <p className={styles.HideText}>2017</p>
        </div>
        <div className={styles.circleContainer}>
          <a href="#YearOne"><BsCircle /></a>
          <p className={styles.HideText}>2018</p>
        </div><div className={styles.circleContainer}>
          <a href="#YearOne"><BsCircle /></a>
          <p className={styles.HideText}>2019</p>
        </div>
        <div className={styles.circleContainer}>
          <a href="#YearOne"><BsCircle /></a>
          <p className={styles.HideText}>2020</p>
        </div>
        <div className={styles.circleContainer}>
          <a href="#YearOne"><BsCircle /></a>
          <p className={styles.HideText}>2021</p>
        </div>
      </nav>
      <div className={styles.InfoContainer}>
        <h1 className={styles.H1}> {proj.title} </h1>
        <p className={styles.Text}> {proj.text} </p>
        <h2 className={ shouldHide? styles.hidden : styles.Title2}>areas</h2>
        <div className={styles.AreasContainer}>
          <div className={styles.cardTab}>
            { shouldHide ? null : <CardTab areas = {proj.areas} /> }
          </div>
        </div>
      </div>
      <div className={styles.TimeLineContainer}>

        {timeLine.map((tl) => {
          return (
            <div className={styles.TimeLine}>
              <h3 id="YearOne" className={styles.Title3}>{tl.year}</h3>
              <h4 className={styles.Title4}>{tl.month}</h4>
              {tl.projects.map((project) => {

                return (<div className={styles.TimeLine}>
                  <div className={styles.Line}></div>
                  <ProjectCard 
                    Img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" 
                    Title={project.title_} 
                    ObjGenTi={project.objGen_Ti}
                    ObjGen={project.objGen_} 
                    ObjEspTi={project.objEsp_Ti}
                    ObjEsp={project.objEsp_}
                    Date={project.date_}
                    Group={project.group_}
                    linkTi={project.link_Ti}
                  />
                  <div className={styles.Line}></div>
                  <div className={styles.Circle}> </div>
                </div>)
              })}

            </div>
          )

        })}


      </div>
    </div>
  );
}

export default RM;
import styles from "./ReadMoreStyles.module.scss"
import { BsCircle } from "react-icons/bs"
import {GiClick} from "react-icons/gi"
import CardTab from '../Karen/components/cardTab'
import ProjectCard from "../Paola/ProjectCard"
import React, { useContext, useState, useEffect } from "react"
import { LanguageContext } from "../App"
import firebase from "firebase"
import { useParams } from "react-router-dom";
import titles from "./readMoreEng.json"
import titulos from "./readMoreEsp.json"


const RM = () => {
    const { id } = useParams()
    const [project, setProject] = useState({})
    const [proyecto, setProyecto] = useState({})
    const [projcts_eng, setProjects_eng] = useState({})
    const [projcts_esp, setProyecto_esp] = useState({})

    let shouldHide = true

    let Project = {
      title: "",
      text: "",
      areas: []
    }
    
    let proj_eng = {}
    let proj_esp = {}

    const db = firebase.firestore()

    const eng = useContext(LanguageContext)

    const getValue = async () => {
      const projectRef = db.collection("project").doc(id);
          console.log(id)
      const projectDB = await projectRef.get()
      const prjctsDB = await projectRef.collection("projects").orderBy( "year", "desc" ).get()
      if (projectDB.empty) {
        console.log("No project")
        return
      }
      let pro = projectDB.data()
      console.log(pro)
      Project = {
          title: pro.title,
          text: pro.full_desc,
          areas: pro.areasEng,
          img: pro.img
      }
      setProject(Project)
      Project = {
          title: pro.titulo,
          text: pro.desc_comp,
          areas: pro.areasEsp,
          img: pro.img
      }
      setProyecto(Project)
      if (prjctsDB.empty) {
        console.log("No projects")
      }
      prjctsDB.forEach(prj => {
        prj = prj.data() 
        let prj_esp = {
          year: prj.year,
          month: prj.mes,
          title: prj.titulo,
          obj_gen: prj.obj_gen,
          obj_esp: prj.obj_esp,
          link: prj.link,
          img: prj.img,
          videoLink: prj.videoLink
        }
        let prj_eng = {
          year: prj.year,
          month: prj.month,
          title: prj.title,
          obj_gen: prj.gen_obj,
          obj_esp: prj.spec_obj,
          link: prj.link,
          img: prj.img,
          videoLink: prj.videoLink
        }
        if (proj_eng[prj.year] == null) {
          proj_eng[prj.year] = [prj_eng]
          proj_esp[prj.year] = [prj_esp]
        }
        else {
          proj_eng[prj.year].push(prj_eng)
          proj_esp[prj.year].push(prj_esp)
        }
      })
      setProjects_eng(proj_eng)
      setProyecto_esp(proj_esp)

    }

    let proj = eng ? project : proyecto
    let prjcts = eng ? projcts_eng : projcts_esp
    let titls = eng ? titles : titulos

    useEffect(() => {
      getValue()
	  }, [])

  console.log(proj.areas)
  if (proj.areas){
    if (proj.areas[0].label != ""){
      shouldHide = false
    }
  }


  return (
    <div className={styles.Wrapper}>
      <nav className={styles.SideNav}>
        <a className={styles.hand}><GiClick/></a>
        {console.log(prjcts)}
        {Object.keys(prjcts).map(function(key, index) {
          console.log(key)
            return (
              <div className={styles.circleContainer}>
                <a href={`#${key}`}><BsCircle /></a>
                <p className={styles.HideText}>{key}</p>
              </div>
            )
          })
        }
      </nav>
      <div className={styles.InfoContainer}>
        <h1 className={styles.H1}> {proj.title} </h1>
        <figure className={styles.imageConteiner}>
          <img
            src={proj.img}
            alt="Project Image"
          />
				</figure>
        <p className={styles.Text}> {proj.text} </p>
        <h2 className={ shouldHide? styles.hidden : styles.Title2}>areas</h2>
        <div className={styles.AreasContainer}>
          <div className={styles.cardTab}>
            { shouldHide ? null : <CardTab areas = {proj.areas} /> }
          </div>
        </div>
      </div>
      <div className={styles.TimeLineContainer}>
      {Object.keys(prjcts).map(function(key) {
            return (
              <div className={styles.TimeLine}>
              <h3 id={`${key}`} className={styles.Title3}>{key}</h3>
              
              {prjcts[key].map((project) => {

                return (<div className={styles.TimeLine}>
                  <div className={styles.Line}></div>
                  <h4 className={styles.Title4}>{prjcts[key].month}</h4>
                  <ProjectCard 
                    Img={project.img}
                    Title={project.title} 
                    ObjGenTi={titls.ObjGenTi}
                    ObjGen={project.obj_gen} 
                    ObjEspTi={titls.ObjEspTi}
                    ObjEsp={project.obj_esp}
                    Date={`${project.month} ${key}`}
                    Group={proj.title}
                    linkTi={titls.linkTi}
                    link={project.link}
                    videoLinkTi={titls.videoLinkTi}
                    videoLink={project.videoLink}
                  />
                  <div className={styles.Line}></div>
                  <div className={styles.Circle}> </div>
                </div>)
              })}

            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default RM;
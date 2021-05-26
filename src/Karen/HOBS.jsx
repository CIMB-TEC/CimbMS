import React from 'react';
import styles from "./HOBSStyles.module.scss"
import initial from "./img/timeLine_1.png"
import final from "./img/timeLine_2.png"
import { BsCircle } from "react-icons/bs"
import ProjectCard from "../Paola/ProjectCard"





const HOBS = () => {
  const timeLine = [
    {
      "year": 2013,
      "month": "March",
      "projects": [
        {
          "title": "Mano",
          "objective": "Este es el objetivo de mano"
        },

        {
          "title": "Mano",
          "objective": "Este es el objetivo de mano"
        },



      ]

    },

    {
      "year": 2019,
      "month": "December",
      "projects": [
        {
          "title": "Pie",
          "objective": "Este es el objetivo de pie "
        },

        {
          "title": "Pie",
          "objective": "Este es el objetivo de pie "
        }


      ]

    }

  ]


  return (
    <div className={styles.Wrapper}>
      <nav className={styles.SideNav}>
        <a href="#YearOne"><BsCircle /></a>
        <p className={styles.HideText}>2016</p>
        <a href="#YearOne"><BsCircle /></a>
        <p className={styles.HideText}>2016</p>
        <a href="#YearOne"><BsCircle /></a>
        <p className={styles.HideText}>2016</p>
        <a href="#YearOne"><BsCircle /></a>
        <p className={styles.HideText}>2016</p>
      </nav>
      <div className={styles.InfoContainer}>
        <h1 className={styles.Title1}>Human Oriented Biomechatronic Systems</h1>
        <p className={styles.Description}>Lorem ipsum dolor sit amet consectetur adipiscing elit convallis egestas penatibus, mus mollis massa himenaeos ad dignissim neque sociosqu. Velit eros aliquet scelerisque primis ultricies sapien vitae facilisis sociosqu facilisi, mi ornare vivamus hac integer nascetur lectus per lacus neque, cubilia tempor aenean erat diam metus elementum porttitor aptent. Nascetur nibh netus justo natoque donec id dignissim potenti, quisque nunc eleifend cum etiam tincidunt lobortis nisi, cursus facilisi velit pulvinar accumsan conubia nullam.</p>
        <h2 className={styles.Title2}>áreas</h2>
        <div className={styles.AreasContainer}>
          <p className={styles.Jorge}>Tarjeta de Jorge</p>
        </div>
      </div>
      <div className={styles.TimeLineContainer}>

        {timeLine.map((tl) => {
          return (
            <div className={styles.TimeLine}>
              <h3 id="YearOne" className={styles.Title3}>{tl.date}</h3>
              <h4 className={styles.Title4}>{tl.month}</h4>
              {tl.projects.map((project) => {

                return (<div className={styles.TimeLine}>
                  <div className={styles.Circle}> </div>
                  <div className={styles.Line}></div>
                  <ProjectCard Img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" Title={project.title} ObjGen={project.objective} Date="Enero 2016" Group="AD" />
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

export default HOBS;
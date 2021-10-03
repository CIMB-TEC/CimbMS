
import styles from "./PaolaStyles.module.scss"
import Card from "./Components/Card"

import articlesEng from "./articlesEng.json"
import articlesEsp from "./articlesEsp.json"

import { LanguageContext } from "../App"
import React, { useContext } from "react"


function Paola(props) {

    const eng = useContext(LanguageContext)
    let project = eng ? articlesEng : articlesEsp;

    return (
        <div className={styles.Page}>
            <h1 className={styles.Subtitle}>{project.title}</h1>
            <h2 className={styles.H1}>{project.smartElectromobility}</h2>
            {
                project.smartElectromobilityProjects.map((proj) => {
                    return (
                        <Card
                            Img={require(`./img/${proj.Image}.jpg`)}
                            Title={proj.Title}
                            Author={proj.Author}
                            Year={proj.Year}
                            Link={proj.Link}
                            Abs={proj.Abstract}
                            main1={proj.highLight1}
                            main2={proj.highLight2}
                            main3={proj.highLight3}
                            Read={project.Read}
                        />
                    )
                })
            }
            <h2>{project.userCenteredTechnologyDevelopment}</h2>
            {
                project.userCenteredTechnologyDevelopmentProjects.map((proj) => {
                    return (
                        <Card
                            Img={require(`./img/${proj.Image}.jpg`)}
                            Title={proj.Title}
                            Author={proj.Author}
                            Year={proj.Year}
                            Link={proj.Link}
                            Abs={proj.Abstract}
                            main1={proj.highLight1}
                            main2={proj.highLight2}
                            main3={proj.highLight3}
                            Read={project.Read}
                        />
                    )
                })
            }
            <h2>{project.others}</h2>
            {
                project.othersProjects.map((proj) => {
                    return (
                        <Card
                            Img={require(`./img/${proj.Image}.jpg`)}
                            Title={proj.Title}
                            Author={proj.Author}
                            Year={proj.Year}
                            Link={proj.Link}
                            Abs={proj.Abstract}
                            main1={proj.highLight1}
                            main2={proj.highLight2}
                            main3={proj.highLight3}
                            Read={project.Read}
                        />
                    )
                })
            }
        </div>
    );
}

export default Paola;




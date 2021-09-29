
import styles from "./PaolaStyles.module.scss"
import Card from "./Components/Card"

import articlesEng from "./articlesEng.json"
import articlesEsp from "./articlesEsp.json"

import { LanguageContext } from "../App"
import React, { useContext, useEffect, useState } from "react"
import firebase from "firebase"


function Paola(props) {

    const [articlesSE, setArticlesSE] = useState([])
    const [articulosSE, setArticulosSE] = useState([])
    const [articlesUCT, setArticlesUCT] = useState([])
    const [articulosUCT, setArticulosUCT] = useState([])
    const [articlesOTH, setArticlesOTH] = useState([])
    const [articulosOTH, setArticulosOTH] = useState([])

    let Article = {
        Title:"",
        Author:"",
        Image:"",
        Year:"",
        Link:"",
        Abstract:"",
        highLight1:"",
        highLight2:"",
        highLight3:""
    }

	const db = firebase.firestore()

    const eng = useContext(LanguageContext)
    

    const getValue = async () => {
		const articleRef = db.collection("article");
		const articlesSEDB = await articleRef.where("project", "==", "1").orderBy( "year", "desc" ).get()
        console.log(articlesSEDB)
		if (articlesSEDB.empty) {
			console.log("No blogs")
			return
		}
		articlesSEDB.forEach(article => {
            article = article.data()
			Article = {
                Title: article.title,
                Author: article.author,
                Image: article.img,
                Year: article.year,
                Link: article.link,
                Abstract: article.abstract,
                highLight1: article.main1,
                highLight2: article.main2,
                highLight3: article.main3
            }
            setArticlesSE(articlesSE => [...articlesSE, Article])
            Article = {
                Title: article.titulo,
                Author: article.author,
                Image: article.img,
                Year: article.year,
                Link: article.link,
                Abstract: article.abstract,
                highLight1: article.princ1,
                highLight2: article.princ2,
                highLight3: article.princ3
            }
            setArticulosSE(articulosSE => [...articulosSE, Article])
		})
        const articlesUCTDB = await articleRef.where("project", "==", "2").orderBy( "year", "desc" ).get()
		if (articlesUCTDB.empty) {
			console.log("No blogs")
			return
		}
		articlesUCTDB.forEach(article => {
            article = article.data()
			Article = {
                Title: article.title,
                Author: article.author,
                Image: article.img,
                Year: article.year,
                Link: article.link,
                Abstract: article.abstract,
                highLight1: article.main1,
                highLight2: article.main2,
                highLight3: article.main3
            }
            setArticlesUCT(articlesUCT => [...articlesUCT, Article])
            Article = {
                Title: article.titulo,
                Author: article.author,
                Image: article.img,
                Year: article.year,
                Link: article.link,
                Abstract: article.abstract,
                highLight1: article.princ1,
                highLight2: article.princ2,
                highLight3: article.princ3
            }
            setArticulosUCT(articulosUCT => [...articulosUCT, Article])
		})
        const articlesOTHDB = await articleRef.where("project", "==", "3").get()
		if (articlesOTHDB.empty) {
			console.log("No blogs")
			return
		}
		articlesOTHDB.forEach(article => {
            article = article.data()
			Article = {
                Title: article.title,
                Author: article.author,
                Image: article.img,
                Year: article.year,
                Link: article.link,
                Abstract: article.abstract,
                highLight1: article.main1,
                highLight2: article.main2,
                highLight3: article.main3
            }
            setArticlesOTH(articlesOTH => [...articlesOTH, Article])
            Article = {
                Title: article.titulo,
                Author: article.author,
                Image: article.img,
                Year: article.year,
                Link: article.link,
                Abstract: article.abstract,
                highLight1: article.princ1,
                highLight2: article.princ2,
                highLight3: article.princ3
            }
            setArticulosOTH(articulosOTH => [...articulosOTH, Article])
		})
	}

    let project = eng ? articlesEng : articlesEsp;

    let projectSE = eng ? articlesSE : articulosSE;

    let projectUCT = eng ? articlesUCT : articulosUCT;

    let projectOTH = eng ? articlesOTH : articulosOTH;

    useEffect(() => {
		getValue()

	}, [])

    return (
        <div className={styles.Page}>
            <h1 className={styles.Title}>{project.title}</h1>
            <h2>{project.smartElectromobility}</h2>
            {
                projectSE.map((proj) => {
                    return (
                        <Card
                            Img={proj.Image}
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
                projectUCT.map((proj) => {
                    return (
                        <Card
                            Img={proj.Image}
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
                projectOTH.map((proj) => {
                    return (
                        <Card
                            Img={proj.Image}
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




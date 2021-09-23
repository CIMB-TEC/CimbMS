import { Link } from "react-router-dom";
import React, { useState } from 'react';
import firebase from "firebase"
import styles from "./CreateBlogStyles.module.scss"
import rocket from "./img/cohete.png"


const CreateArticle = () => {


  const db = firebase.firestore()
  const storage = firebase.storage();
  let currentId = "";
  let currentImgId = "";
  const [file, setFile] = useState("hj");


  const [article, setArticle] = useState({
    project: "",
    titulo: "",
    title:"",
    year: "",
    author:"",
    princ1:"",
    princ2:"",
    princ3:"",
    main1:"",
    main2:"",
    main3:"",
    abstract:"",
    link:"",
    img:""
  })




  const addValue = async (currentArticle) => {
    try {
      const newArticle = await db.collection("article").add(currentArticle)

      currentId = newArticle.id
      console.log("Current Article Id", newArticle.id)
    }
    catch (error) {
      console.log(error)
    }
  }





  const getValue = async () => {
    const articleRef = db.collection("article");
    const articles = await articleRef.get()
    if (articles.empty) {
      console.log("No articles")
      return
    }
    articles.forEach(article => {
      console.log(article.data())
    })
  }





  const addImage = async (e) => {
    let f = e.target.files[0]
    setFile(f)
    document.getElementById('fileSelect').innerHTML = f.name;
    console.log("Add image", currentId)
  }


  const logFile = async (e) => {

    console.log(file)
    console.log("log", currentId)


    let storageRef = storage.ref()
    let articleRef = storageRef.child("article").child(currentId)
    let fileRef = articleRef.child(currentId)

    try {
      await fileRef.put(file)
      let url = await fileRef.getDownloadURL()
      currentImgId = url
      console.log(url)
    }
    catch (error) {
      console.log(error)
    }
  }


  const addImgToEvent = async () => {
    try {
      const postRef = db.collection("article").doc(currentId);


      const doc = await postRef.get()

      await postRef.update({
        img: currentImgId,
      });
      console.log("wooo")
    }
    catch (error) {
      console.log(error)
    }




  }

  const handelOnChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, e.target.value)
  }


  const handelOnSubmit = async (e) => {

    if (article.project == "" && article.titulo == "" && article.title == "" && article.date == "" && article.author == "" && article.princ1 == "" && asrticle.princ2 == "" && asrticle.princ3 == "" && article.main1 == "" && article.main2 == "" && article.main3 == "" && article.abstract == "" && article.link == "" && article.img == "") {
      return
    }
    console.log(article, "This is a complete article")

    await addValue(article)
    await logFile()
    await addImgToEvent()
    window.location.reload()
  }

  return (
    // <div style={{ display: "flex", flexDirection: "column" }}>

    //   <button onClick={addValue} style={{ background: "red", fontSize: "25px" }}>Create</button>
    //   <button onClick={getValue} style={{ background: "red", fontSize: "25px" }}>Get</button>
    //   <input style={{ background: "red", fontSize: "25px" }} type="file" onChange={addImage} />
    //   <button style={{ background: "red", fontSize: "25px" }} onClick={logFile}>Log image</button>
    //   <button style={{ background: "red", fontSize: "25px" }} onClick={addImgToEvent}>Img to event</button>

    // </div>

    <div className={styles.Wrapper}>
      <h1 className={styles.Title}>Crea un artículo de divulgación</h1>
      <div className={styles.Container}>
        <div className={styles.BlogForm}>
          <label className={styles.InputContainer}>
            <span className={styles.Span}>Project</span>
            <select className={styles.InputBlog} name="project" onChange={handelOnChange}>
              <option value="" selected disabled hidde>Indique el proyecto</option>
              <option value="1">Electro-movilidad inteligente</option>
              <option value="2">Desarrollo de Tecnologías centradas en el usuario</option>
              <option value="3">Otros</option>
            </select>
          </label>

          <label className={styles.InputContainer}>
            <span className={styles.Span}>Título</span>
            <input className={styles.InputBlog} name="titulo" onChange={handelOnChange} />
          </label>
          <label className={styles.InputContainer}>
            <span className={styles.Span}>Title</span>
            <input className={styles.InputBlog} name="title" onChange={handelOnChange} />
          </label>

          <label className={styles.InputContainer}>
            <span className={styles.Span}>Año</span>
            <input className={styles.InputBlog} name="year" onChange={handelOnChange} />
          </label>

          <label className={styles.InputContainer}>
            <span className={styles.Span}>Autor</span>
            <input className={styles.InputBlog} name="author" onChange={handelOnChange} />
          </label>

          <label className={styles.InputContainer}>
            <span className={styles.Span}>Idea Principal 1</span>
            <input className={styles.InputBlog} name="princ1" onChange={handelOnChange} />
          </label>
          <label className={styles.InputContainer}>
            <span className={styles.Span}>Main Idea 1</span>
            <input className={styles.InputBlog} name="main1" onChange={handelOnChange} />
          </label>
          <label className={styles.InputContainer}>
            <span className={styles.Span}>Idea Principal 2</span>
            <input className={styles.InputBlog} name="princ2" onChange={handelOnChange} />
          </label>
          <label className={styles.InputContainer}>
            <span className={styles.Span}>Main Idea 2</span>
            <input className={styles.InputBlog} name="main2" onChange={handelOnChange} />
          </label>
          <label className={styles.InputContainer}>
            <span className={styles.Span}>Idea Principal 3</span>
            <input className={styles.InputBlog} name="princ3" onChange={handelOnChange} />
          </label>
          <label className={styles.InputContainer}>
            <span className={styles.Span}>Main Idea 3</span>
            <input className={styles.InputBlog} name="main3" onChange={handelOnChange} />
          </label>

          <label className={styles.InputContainer}>
            <span className={styles.Span}>Abstract</span>
            <textarea className={styles.InputDesBlog} name="abstract" onChange={handelOnChange}  />
          </label>

          <label className={styles.InputContainer}>
            <span className={styles.Span}>Link</span>
            <input className={styles.InputBlog} name="link" onChange={handelOnChange} />
          </label>

          <div className={styles.InputContainer}>
            <span className={styles.Span}>Imagen</span>
            <div className={styles.buttonWrap}>
              <label className={styles.newButton} for="upload" id="fileSelect" > Seleccionar archivo </label>
              <input id="upload" className={styles.InputBlog} name="img" type="file" onChange={addImage}/>
            </div>
          </div>

          <div className={styles.Submit}>
          <button onClick={handelOnSubmit} className={styles.Button}> Submit </button>
          </div>

          {/*<button className={styles.Button} > <Link to={"firebase/" + currentId}> Read More </Link> </button>*/}
        </div>
        <div className={styles.Rocket}>
          <img className={styles.Image} src={rocket}/>
        </div>
      </div>
    </div>
  );

}

export default CreateArticle;

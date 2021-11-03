import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import firebase from "firebase"
import styles from "./CreateBlogStyles.module.scss"
import rocket from "./img/cohete.png"


const CreateProject = () => {


  const db = firebase.firestore()
  const storage = firebase.storage();
  let currentId = "";
  let currentImgId = "";
  const [file, setFile] = useState("hj");


  const [project, setProject] = useState({
    school:"",
    titulo:"",
    title:"",
    img:"",
    descripcion:"",
    description:"",
    abv:""
  })




  const addValue = async (currentProject) => {
    try {
      const newProject = await db.collection("project").add(currentProject)
      console.log("New project Id", newProject.id)

      currentId = newProject.id
    }
    catch (error) {
      console.log(error)
    }
  }





  const getValue = async () => {
    const projectRef = db.collection("article");
    const projects = await projectRef.get()
    if (projects.empty) {
      console.log("No articles")
      return
    }
    projects.forEach(project => {
      console.log(project.data())
    })
  }

  const addImage = async (e) => {
    let f = e.target.files[0]
    setFile(f)
    document.getElementById('fileSelect').innerHTML = f.name;
    console.log("Add image")
  }

  const logFile = async (e) => {
    console.log(file)
    console.log("log", currentId)
    let storageRef = storage.ref()
    let projectRef = storageRef.child("project").child(currentId)
    let fileRef = projectRef.child(currentId)

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
      const postRef = db.collection("project").doc(currentId);

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
    setProject({
      ...project,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, e.target.value)
  }


  const handelOnSubmit = async (e) => {

    if (project.school == "" && project.titulo == "" && project.title == "" && project.img == "" && project.descripcion == "" && project.description == "" && project.link == "") {
      return
    }
    console.log(project, "This is a complete project")

    await addValue(project)

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
      <h1 className={styles.Title}>Crea un proyecto</h1>
      <div className={styles.Container}>
        <div className={styles.BlogForm}>
          <label className={styles.InputContainer}>
            <span className={styles.Span}>Escolaridad</span>
            <select className={styles.InputBlog} name="school" onChange={handelOnChange}>
              <option value="" selected disabled hidde>Indique la escolaridad</option>
              <option value="1">Postgrado</option>
              <option value="2">Pregrado</option>
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

          <div className={styles.InputContainer}>
            <span className={styles.Span}>Icon</span>
            <div className={styles.buttonWrap}>
              <label className={styles.newButton} for="upload" id="fileSelect"> Seleccionar archivo </label>
              <input id="upload" className={styles.InputBlog} name="img" type="file" onChange={addImage}/>
            </div>
          </div>

          <label className={styles.InputContainer}>
            <span className={styles.Span}>Descripción</span>
            <textarea className={styles.InputDesBlog} name="descripcion" onChange={handelOnChange}  />
          </label>
          <label className={styles.InputContainer}>
            <span className={styles.Span}>Description</span>
            <textarea className={styles.InputDesBlog} name="description" onChange={handelOnChange}  />
          </label>

          <label className={styles.InputContainer}>
            <span className={styles.Span}>Abreviación</span>
            <input className={styles.InputBlog} name="abv" onChange={handelOnChange} />
          </label>

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

export default CreateProject;

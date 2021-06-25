import { Link } from "react-router-dom";
import React, { useState } from 'react';
import firebase from "firebase"
import image from "../Karen/ProfileImg/ArielLopez.jpg"
import styles from "./CreateBlogStyles.module.scss"


const CreateBlog = () => {


  const db = firebase.firestore()
  const storage = firebase.storage();
  const [currentId, setCurrentId] = useState("");
  const [currentImgId, setCurrentImgId] = useState("");
  const [file, setFile] = useState("hj");


  const [blog, setBlog] = useState({
    title: "Curso Introductorio de Nanotech en MIT",
    description: "En el marco de los acuerdos del MTL del MIT y del Tec de Monterrey, se estuvieron impartiendo cursos del Nanotecnologia con alumnos y profesores del Tecnologico de Monterrey. El Dr. Javier Izquierdo como instrustor asistente del curso y participacion en el curso del Dr. Sergio Navarro.En el curso se muestran las bases teoricas y practicas de la fabricacion de microcircuitos con metodos tradicionales y con tecnologias del estado del arte.",
    date: "06/06/2019",
    author: "Luis Alberto Curiel",
    tag: "Noticias",
    img: "https://firebasestorage.googleapis.com/v0/b/cimb-59410.appspot.com/o/blog%2FblogMit.jpg?alt=media&token=ce7b35c6-2007-4adb-bcd4-e527b0cc763c",
  })




  const addValue = async (currentBlog) => {
    try {
      const newBlog = await db.collection("blog").add(currentBlog)

      setCurrentId(newBlog.id)
      console.log("Current Blog Id", newBlog.id)
    }
    catch (error) {
      console.log(error)
    }
  }





  const getValue = async () => {
    const blogRef = db.collection("blog");
    const blogs = await blogRef.get()
    if (blogs.empty) {
      console.log("No blogs")
      return
    }
    blogs.forEach(blog => {
      console.log(blog.data())
    })
  }





  const addImage = async (e) => {
    let f = e.target.files[0]
    setFile(f)
    console.log("Add image", currentId)
  }


  const logFile = async (e) => {

    console.log(file)
    console.log("log", currentId)


    let storageRef = storage.ref()
    let blogRef = storageRef.child("blog").child(currentId)
    let fileRef = blogRef.child(currentId)




    try {
      await fileRef.put(file)
      let url = await fileRef.getDownloadURL()
      setCurrentImgId(url)
      console.log(url)
    }
    catch (error) {
      console.log(error)
    }
  }


  const addImgToEvent = async () => {
    try {
      const postRef = db.collection("blog").doc(currentId);


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
    setBlog({
      ...blog,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, e.target.value)
  }


  const handelOnSubmit = (e) => {


    if (blog.title === "") {
      return
    }
    console.log(blog, "This is a complete blog")

    addValue(blog)


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

      <label className={styles.InputContainer}>
        <span> Title</span>
        <input name="title" onChange={handelOnChange} className={styles.Input} />
      </label>


      <label className={styles.InputContainer}>
        <span> Description</span>
        <input name="description" onChange={handelOnChange} className={styles.Input} /> {/* Change to textarea */}
      </label>

      <button onClick={handelOnSubmit} className={styles.Button}> Submit </button>

      <button className={styles.Button} > <Link to={"firebase/" + currentId}> Read More </Link> </button>
    </div>
  );

}

export default CreateBlog;

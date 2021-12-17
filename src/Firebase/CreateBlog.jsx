import { Link } from "react-router-dom";
import React, { useState } from 'react';
import firebase from "firebase"
import image from "../Karen/ProfileImg/ArielLopez.jpg"
import styles from "./CreateBlogStyles.module.scss"


const CreateBlog = () => {


  const db = firebase.firestore()
  const storage = firebase.storage();
  let currentId = "";
  let currentImgId = "";
  const [file, setFile] = useState("hj");


  const [blog, setBlog] = useState({
    title:"",
    date:"",
    author:"",
    tag:"",
    description:"",
    img:"",
  })




  const addValue = async (currentBlog) => {
    try {
      const newBlog = await db.collection("blog").add(currentBlog)

      currentId = newBlog.id
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
    document.getElementById('fileSelect').innerHTML = f.name;
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
      currentImgId = url
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


  const handelOnSubmit = async (e) => {


    if (blog.title === "" && blog.author == "" && blog.date == "" && blog.description == "" && blog.tag == "") {
      return
    }
    console.log(blog, "This is a complete blog")

    await addValue(blog)
    console.log("Se añadió el valor", currentId)
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
      <h1 className={styles.H1}>Crea una entrada de blog</h1>
      <div className={styles.ContainerBack}>
        <div className={styles.Container}>
          <div className={styles.BlogForm}>
            <label className={styles.InputContainer}>
              <span className={styles.H2}>Title</span>
              <input className={styles.InputBlog} name="title" onChange={handelOnChange} />
            </label>
            
            <label className={styles.InputContainer}>
              <span className={styles.H2}>Fecha</span>
              <input className={styles.InputBlog} name="date" type="date" onChange={handelOnChange} />
            </label>

            <label className={styles.InputContainer}>
              <span className={styles.H2}>Autor</span>
              <input className={styles.InputBlog} name="author" onChange={handelOnChange} />
            </label>

            <label className={styles.InputContainer}>
              <span className={styles.H2}>Etiqueta</span>
              <input className={styles.InputBlog} name="tag" onChange={handelOnChange} />
            </label>

            <label className={styles.InputContainer}>
              <span className={styles.H2}> Description</span>
              <textarea className={styles.InputDesBlog} name="description" onChange={handelOnChange}  />
            </label>

            <div className={styles.InputContainer}>
              <span className={styles.H2}>Imagen</span>
              <div className={styles.buttonWrap}>
                <label className={styles.newButton} for="upload" id="fileSelect"> Seleccionar archivo </label>
                <input id="upload" className={styles.InputBlog} name="img" type="file" onChange={addImage}/>
              </div>
            </div>

            <div className={styles.Submit}>
            <button onClick={handelOnSubmit} className={styles.Button}> Submit </button>
            </div>

            {/*<button className={styles.Button} > <Link to={"firebase/" + currentId}> Read More </Link> </button>*/}
          </div>
          <div className={styles.Rocket}>
            <img className={styles.Image} src="https://firebasestorage.googleapis.com/v0/b/cimb-59410.appspot.com/o/page%2Flaunch.png?alt=media&token=157bdf84-4c10-4443-a482-5bc5204d4345" alt=""/>
          </div>
        </div>
      </div> 
    </div>
  );

}

export default CreateBlog;

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
    title: "",
    description: "",
    img: "",

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

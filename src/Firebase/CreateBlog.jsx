
import React, { useState } from 'react';
import firebase from "firebase"
import image from "../Karen/ProfileImg/ArielLopez.jpg"


const CreateBlog = () => {


  const db = firebase.firestore()
  const storage = firebase.storage();
  const [currentId, setCurrentId] = useState("");
  const [currentImgId, setCurrentImgId] = useState("");
  const [file, setFile] = useState("hj");




  const addValue = async () => {
    try {
      const newBlog = await db.collection("blog").add({
        title: "Test def",
        img: ""
      })

      setCurrentId(newBlog.id)
      console.log("add value", currentId)
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



  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      <button onClick={addValue} style={{ background: "red", fontSize: "25px" }}>Create</button>
      <button onClick={getValue} style={{ background: "red", fontSize: "25px" }}>Get</button>
      <input style={{ background: "red", fontSize: "25px" }} type="file" onChange={addImage} />
      <button style={{ background: "red", fontSize: "25px" }} onClick={logFile}>Log image</button>
      <button style={{ background: "red", fontSize: "25px" }} onClick={addImgToEvent}>Img to event</button>

    </div>

  );

}

export default CreateBlog;
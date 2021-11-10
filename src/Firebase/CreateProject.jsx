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

  const [areasEsp, setListaInput] = useState([{ label: "", a: "", desc: "" }]);
  const [areasEng, setInputList] = useState([{ label: "", a: "", desc: "" }]);


  const [project, setProject] = useState({
    school:"",
    titulo:"",
    title:"",
    img:"",
    descripcion:"",
    desc_comp:"",
    description:"",
    full_desc:"",
    abv:"",
    areasEng:[],
    areasEsp:[]
  })




  const addValue = async (currentProject) => {
    try {
      const newProject = await db.collection("project").doc(currentProject.abv).set(currentProject)
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
    console.log(areasEng)
    console.log(areasEsp)
  }

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...areasEng];
    list[index][name] = value;
    setInputList(list);
  };
  
  const handleInputChangeEsp = (e, index) => {
    const { name, value } = e.target;
    const list = [...areasEsp];
    list[index][name] = value;
    setListaInput(list);
  };
  
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...areasEng];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleRemoveClickEsp = index => {
    const list = [...areasEsp];
    list.splice(index, 1);
    setListaInput(list);
  };
  
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...areasEng, { label: "", a: "", desc: "" }]);
  };

  const handleAddClickEsp = () => {
    setListaInput([...areasEsp, { label: "", a: "", desc: "" }]);
  };


  const handelOnSubmit = async (e) => {

    project.areasEng = areasEng

    project.areasEsp = areasEsp

    if ((project.school == "" && project.titulo == "" && project.title == "" && project.img == "" && project.descripcion == "" && project.description == "") || project.abv == "" || project.areasEng.length != project.areasEsp.length) {
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
            <span className={styles.Span}>Descripción abreviada</span>
            <textarea className={styles.InputDesBlog} name="descripcion" onChange={handelOnChange}  />
          </label>
          <label className={styles.InputContainer}>
            <span className={styles.Span}>Short description</span>
            <textarea className={styles.InputDesBlog} name="description" onChange={handelOnChange}  />
          </label>

          <label className={styles.InputContainer}>
            <span className={styles.Span}>Descripción completa</span>
            <textarea className={styles.InputDesBlog} name="desc_comp" onChange={handelOnChange}  />
          </label>
          <label className={styles.InputContainer}>
            <span className={styles.Span}>Full description</span>
            <textarea className={styles.InputDesBlog} name="full_desc" onChange={handelOnChange}  />
          </label>

          <label className={styles.AreasContainer}>
            <span className={styles.Span}>Agregar áreas de investigación</span>
            {areasEsp.map((x, i) => {
              return (
                <div className="box">
                  <input
                    className={styles.InputAreaLabel}
                    placeholder="Etiqueta"
                    name="label"
                    value={x.label}
                    onChange={e => handleInputChangeEsp(e, i)}
                  />
                  <input
                    className={styles.InputAreaLabel}
                    placeholder="Área"
                    name="a"
                    value={x.a}
                    onChange={e => handleInputChangeEsp(e, i)}
                  />
                  <input
                    className={styles.InputArea}
                    placeholder="Descripción del área"
                    name="desc"
                    value={x.desc}
                    onChange={e => handleInputChangeEsp(e, i)}
                  />
                    {areasEsp.length !== 1 && <button className={styles.AddRemButton} onClick={() => handleRemoveClickEsp(i)}>Remove</button>}
                    {areasEsp.length - 1 === i && <button className={styles.AddRemButton} onClick={handleAddClickEsp}>Add</button>}
                </div>
              );
            })}
        </label>

        <label className={styles.AreasContainer}>
            <span className={styles.Span}>Add development areas</span>
            {areasEng.map((x, i) => {
              return (
                <div className="box">
                  <input
                    className={styles.InputAreaLabel}
                    placeholder="Label"
                    name="label"
                    value={x.label}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <input
                    className={styles.InputAreaLabel}
                    placeholder="Area"
                    name="a"
                    value={x.a}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <input
                    className={styles.InputArea}
                    placeholder="Area description"
                    name="desc"
                    value={x.desc}
                    onChange={e => handleInputChange(e, i)}
                  />
                    {areasEng.length !== 1 && <button className={styles.AddRemButton} onClick={() => handleRemoveClick(i)}>Remove</button>}
                    {areasEng.length - 1 === i && <button className={styles.AddRemButton} onClick={handleAddClick}>Add</button>}
                </div>
              );
            })}
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

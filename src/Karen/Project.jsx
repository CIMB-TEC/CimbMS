import React from 'react';
import styles from "./ProjectStyles.module.scss"
import initial from "./img/timeLine_1.png"
import final from "./img/timeLine_2.png"
import {BsCircle} from "react-icons/bs"

const Project = () => {
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
        <h1 className={styles.Title1}>ADMAS</h1>
        <p className={styles.Description}>Lorem ipsum dolor sit amet consectetur adipiscing elit convallis egestas penatibus, mus mollis massa himenaeos ad dignissim neque sociosqu. Velit eros aliquet scelerisque primis ultricies sapien vitae facilisis sociosqu facilisi, mi ornare vivamus hac integer nascetur lectus per lacus neque, cubilia tempor aenean erat diam metus elementum porttitor aptent. Nascetur nibh netus justo natoque donec id dignissim potenti, quisque nunc eleifend cum etiam tincidunt lobortis nisi, cursus facilisi velit pulvinar accumsan conubia nullam.</p>
        <h2 className={styles.Title2}>áreas</h2>
        <div className={styles.AreasContainer}>
          <p className={styles.Jorge}>Tarjeta de Jorge</p>
        </div>
      </div>
      <div className={styles.TimeLineContainer}>
        <div className={styles.TimeLine}>
          <h3 id="YearOne" className={styles.Title3}>2016</h3>
          <h4 className={styles.Title4}>Enero</h4>
          <img src={initial} alt="" className={styles.image} />
          <p className={styles.Paola}>Tarjeta de Pao</p>
          <img src={final} alt="" className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default Project;
import React, { useState, useEffect } from 'react';
import styles from './ProjectCardStyles.module.scss'

const ProjectCard = (props) => {

  return (

    <article className={styles.card}>
      <img className={styles.thumb} src={props.Img} />
      <div className={styles.infos}>
        <h2 className={styles.title}>{props.Title}</h2>
        <h3 className={styles.date}>{props.Date}</h3>
        <h3 className={styles.group}>{props.Group}</h3>
        <div className={styles.txt}>
          <h3>Objetivo general</h3>
          <p>{props.ObjGen}</p>
          <h3>Objetivo específico</h3>
          <p>{props.ObjEsp}</p>
        </div>
        <a href={props.Link} className={styles.details}> Descargar póster </a>
      </div>
    </article>

  );
}

export default ProjectCard;
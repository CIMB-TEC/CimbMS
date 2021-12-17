import React, { useState, useEffect } from 'react';
import styles from './ProjectCardStyles.module.scss'

const ProjectCard = (props) => {

  let shouldHide = false
  let noButton = false
  let noVideo = false

  if (props.ObjEsp == "" || !props.ObjEsp) {
    shouldHide = true
  }

  if (props.link == "" || !props.link) {
    noButton = true
  }

  if (props.videoLink == "" || !props.videoLink) {
    noVideo = true
  }

  return (

    <article className={styles.card}>
      <img className={styles.thumb} src={props.Img} />
      <div className={styles.infos}>
        <h2 className={styles.Subtitle}>{props.Title}</h2>
        <h3 className={styles.H1}>{props.Date}</h3>
        <h3 className={styles.H2}>{props.Group}</h3>
        <div className={styles.txt}>
          <h3>{props.ObjGenTi}</h3>
          <p>{props.ObjGen}</p>
          <h3 className={ shouldHide? styles.hidden : styles.h3}>{props.ObjEspTi}</h3>
          <p className={ shouldHide? styles.hidden : styles.p}>{props.ObjEsp}</p>
        </div>
        <a href={props.link} className={ noButton? styles.hidden : styles.details}> {props.linkTi} </a>
        <a href={props.videoLink} className={ noVideo? styles.hidden : styles.details}> {props.videoLinkTi} </a>
      </div>
    </article>

  );
}

export default ProjectCard;
import React from "react";
import classes from "./ProjectInformationStyles.module.scss";

function ProjectInformation(props) {
  return (
    <div className={classes.Wrapper}>
      <h1 className={`${classes.Title} ${classes[props.project]}`}>{props.title}</h1>
      <p>
       {props.description}
      </p>
      <h3 className={`${classes.ResearchTitle} ${classes[props.project]}`} >Research areas</h3>
      <div className={classes.AreaWrapper}>
        <div className={classes.Area}>
          <h4 className={classes.AreaTitle}>Energy</h4>
          <p className={classes.AreaInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            eiusmo dtempor incididunt ut labor et dolore magna aliqua. ut labor
            et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit,sed do eiusmo dtempor incididunt ut labor
          </p>
        </div>

        <div className={classes.Area}>
          <h4 className={classes.AreaTitle}>Energy</h4>
          <p className={classes.AreaInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            eiusmo dtempor incididunt ut labor et dolore magna aliqua. ut labor
            et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit,sed do eiusmo dtempor incididunt ut labor
          </p>
        </div>

        <div className={classes.Area}>
          <h4 className={classes.AreaTitle}>Energy</h4>
          <p className={classes.AreaInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            eiusmo dtempor incididunt ut labor et dolore magna aliqua. ut labor
            et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit,sed do eiusmo dtempor incididunt ut labor
          </p>
        </div>
      </div>
      <h3 className={`${classes.ColabTitle} ${classes[props.project]}`}>Collaborators</h3>
      <div className={classes.CollaboratorsWrapper}>
        <a> Lorem ipsum dolor</a>
        <a> Lorem ipsum dolor</a>
        <a> Lorem ipsum dolor</a>
      </div>
    </div>
  );
}

export default ProjectInformation;

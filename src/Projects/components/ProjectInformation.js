import React from "react";
import classes from "./ProjectInformationStyles.module.scss";

function ProjectInformation() {
  return (
    <div className={classes.Wrapper}>
      <h1>Admas</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmo
        dtempor incididunt ut labor et dolore magna aliqua. ut labor et dolore
        magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed
        do eiusmo dtempor incididunt ut labor et dolore magna aliqua. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmo dtempor
        incididunt ut labor et dolore magna aliqua. ut labor et dolore magna
        aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
        eiusmo dtempor incididunt ut labor et dolore magna aliqua.
      </p>
      <h3>Research areas</h3>
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
      <h3 className={classes.ColabTitle}>Collaborators</h3>
      <div className={classes.CollaboratorsWrapper}>
        <a> Lorem ipsum dolor</a>
        <a> Lorem ipsum dolor</a>
        <a> Lorem ipsum dolor</a>
      </div>
    </div>
  );
}

export default ProjectInformation;

import React from "react";
import classes from "./ProjectCardStyles.module.scss";

import { FaCookie } from "react-icons/fa";
import { RiPlantLine } from "react-icons/ri";
import {
  GiChurch,
  GiEnergyTank,
  GiFactory,
  GiFlamethrowerSoldier,
  GiAirBalloon,
  GiCyberEye,
  GiBlockHouse,
} from "react-icons/gi";

function ProjectCard(props) {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.LogoTitleWrapper}>
        <GiCyberEye className={classes.Logo} />
        <h1 className={classes.Title}> ADMAS</h1>
      </div>

      <div className={classes.DescriptionWrapper}>
        {/* <h3>What is ADMAS?</h3> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmo
          dtempor incididunt ut labor et dolore magna aliqua. ut labor et dolore
          magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit,sed do eiusmo dtempor incididunt ut labor et dolore magna aliqua.
        </p>
      </div>
      <div className={classes.ResearchWrapper}>
        <h3>Research Areas </h3>
        <div className={classes.AreasWrapper}>
          <div className={classes.Area}>
            <GiEnergyTank className={classes.AreaLogo} />
            <p>Energy</p>
          </div>

          <div className={classes.Area}>
            <GiFlamethrowerSoldier className={classes.AreaLogo} />
            <p>Energy</p>
          </div>

          <div className={classes.Area}>
            <GiChurch className={classes.AreaLogo} />
            <p>Energy</p>
          </div>

          <div className={classes.Area}>
            <GiAirBalloon className={classes.AreaLogo} />
            <p>Energy</p>
          </div>

          <div className={classes.Area}>
            <GiBlockHouse className={classes.AreaLogo} />
            <p>Energy</p>
          </div>
        </div>
      </div>

      <a className={classes.ReadMore}>Read More </a>
    </div>
  );
}

export default ProjectCard;

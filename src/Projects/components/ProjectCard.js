import React from "react";
import classes from "./ProjectCardStyles.module.scss";

import { FaCookie } from "react-icons/fa";
import { RiPlantLine } from "react-icons/ri";
import { Link } from "react-router-dom";
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
        <h1 className={`${classes.Title} ${classes[props.project]}`}> {props.title}</h1>
      </div>

      <div className={classes.DescriptionWrapper}>
        {/* <h3>What is ADMAS?</h3> */}
        <p>
         {props.description}
        </p>
      </div>
      <div className={classes.ResearchWrapper}>
        <h3 className={classes.ResearhAreas}>Research Areas </h3>
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


        <Link to={{pathname: `/${props.link}`}} className={`${classes.ReadMore} ${classes[props.project]}`}>
          Read More
      </Link>
    </div>
  );
}

export default ProjectCard;

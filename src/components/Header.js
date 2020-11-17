import React from "react" ;
import classes from "./HeaderStyles.module.scss"
import { Link } from "react-router-dom";


function Header(){

    return(

        <header className={classes.Wrapper}>
        <nav>
          <ul>
      <Link className={classes.Link} to="/">
      Inicio
      </Link>
      <Link className={classes.Link} to="/proyectos">
      Proyectos
      </Link>

      <Link className={classes.Link} to="/divulgacion">
     Divulgación
      </Link>
             <Link className={classes.Link} to="/equipo">
     Equipo
      </Link>
          
          </ul>
        </nav>
      </header>
        
    );
}

export default Header;
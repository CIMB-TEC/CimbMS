import React from "react";
import styles from "./EinarStyles.module.scss";
import i1 from "./Img/InventosMini/i1.jpg";
import i2 from "./Img/InventosMini/i2.jpg";
import i3 from "./Img/InventosMini/i3.jpg";
import i4 from "./Img/InventosMini/i4.jpg";
import i5 from "./Img/InventosMini/i5.jpg";
import i6 from "./Img/InventosMini/i6.jpg";
import c1 from "./Img/CuentaMini/c1.jpg";
import c2 from "./Img/CuentaMini/c2.jpg";
import c3 from "./Img/CuentaMini/c3.jpg";
import c4 from "./Img/CuentaMini/c4.jpg";
import c5 from "./Img/CuentaMini/c5.jpg";
import t1 from "./Img/TeamMini/t1.jpg";
import { AiOutlineFileSearch } from "react-icons/ai";

function Einar() {
  return (
    <div>
      <div>
        {" "}
        <p> hey</p>
      </div>
      <div className={styles.WaveContainer}>
        <div className={styles.ContentContainer}>
          <p className={styles.WeAre}> We are the CIMB</p>
          <p className={styles.Definition}>
            Computing Intelligence, Mechatronics and Biodesign Laboratory
          </p>
          <p className={styles.Description}>
            Nuestro grupo busca generar proyectos para la mejora de la calidad
            de vida de la sociedad mexicana y una mejora de la Experiencia del
            Usuario (UX) ante el uso de nuevas tecnologías. Él laboratorio
            trabaja a través de la generación de proyectos de Posgrados y
            Pregrado sobre las distintas líneas de investigación de enfoque.
          </p>
        </div>
      </div>

      <div className={styles.WaveContainer2}>
        <div className={styles.ContentContainer2}>
          <p className={styles.ProyectosTitulo}> Projectos activos</p>

          <div className={styles.AreasContainer}>
            <div className={styles.AreaOneContainer}>
              <AiOutlineFileSearch className={styles.Icon} />
              <p className={styles.AreaTitle}> Domótica Emocional </p>
              <a className={styles.AreaLink}> Más información</a>
            </div>
            <div className={styles.AreaTwoContainer}>
              <AiOutlineFileSearch className={styles.Icon} />
              <p className={styles.AreaTitle}>
                {" "}
                Sistemas avanzados de monitoreo y asiatencia al coductor{" "}
              </p>

              <a className={styles.AreaLink}> Más información</a>
            </div>
            <div className={styles.AreaThreeContainer}>
              <AiOutlineFileSearch className={styles.Icon} />
              <p className={styles.AreaTitle}>Exoesqueleto </p>
              <a className={styles.AreaLink}> Más información</a>
            </div>
            <div className={styles.AreaFourContainer}>
              <AiOutlineFileSearch className={styles.Icon} />
              <p className={styles.AreaTitle}>Agricultura Acúsitica </p>
              <a className={styles.AreaLink}> Más información</a>
            </div>

            <div className={styles.AreaFourContainer}>
              <AiOutlineFileSearch className={styles.Icon} />
              <p className={styles.AreaTitle}>Agricultura Acúsitica </p>
              <a className={styles.AreaLink}> Más información</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.WaveContainer3}>
        <div className={styles.ContentContainer3}>
          {/* <p className={styles.GalleryText}>Gallery</p> */}

          <figure className={styles.ImageContainerTeam}>
            <img
              src={t1}
              alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"
            />
          </figure>

          <figure className={styles.ImageContainer}>
            <img
              src={c1}
              alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"
            />
          </figure>

          <figure className={styles.ImageContainer}>
            <img
              src={i6}
              alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"
            />
          </figure>

          <figure className={styles.ImageContainer}>
            <img
              src={c2}
              alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"
            />
          </figure>

          <figure className={styles.ImageContainer}>
            <img
              src={c4}
              alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"
            />
          </figure>

          <figure className={styles.ImageContainer}>
            <img
              src={i1}
              alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"
            />
          </figure>

          <figure className={styles.ImageContainer}>
            <img
              src={i3}
              alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"
            />
          </figure>

          <figure className={styles.ImageContainer}>
            <img
              src={i2}
              alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"
            />
          </figure>

          <figure className={styles.ImageContainer}>
            <img
              src={i5}
              alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"
            />
          </figure>

          <figure className={styles.ImageContainerLast}>
            <img
              src={c5}
              alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"
            />
          </figure>

          <figure className={styles.ImageContainerLast}>
            <img
              src={c3}
              alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Einar;

//Domotica emocional --> Desarrollo de Tecnologías centradas en el usuario (User Centered Technology Development) UCTD
//ADMAS --> Electromovilidad inteligente (Smart electromobility)
//Exoesqueletos --> Sistemas Biomecatrónicos Orientados al Humano (Human Oriented Biomechatronic Systems) HOBS
//Proyectos vinculados

//Areas de interés (3) (Biomechanical engenieering)
//Redes sociales (LinkedIn, ResearchGate, Corre )

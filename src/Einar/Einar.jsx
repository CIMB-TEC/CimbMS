import React, { useContext } from "react";
import { LanguageContext } from "../App"
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
import homeEng from "./homeEng.json";
import homeEsp from "./homeEsp.json";
import ProjectCard from "./Components/ProjectCard"
import { GiArtificialIntelligence } from "react-icons/gi";
import {BiNetworkChart} from "react-icons/bi";
import {GrTechnology} from "react-icons/gr";
import {GiMonoWheelRobot} from "react-icons/gi";



function Einar(props) {

	const eng = useContext(LanguageContext)
	let home = eng ? homeEng : homeEsp;


	return (
		<div className={styles.Wrapper}>
			
			<div className={styles.WaveCont}>
				<div className={styles.WaveContainer}>
					<div className={styles.ContentContainer}>
						<div className={styles.Content}>
							<p className={styles.Subtitle}> {home.title}</p>
							<p className={styles.H1}>
								{home.definition}
							</p>
							<p className={styles.Text}>
								{home.description}
							</p>
						</div>
						<div className={styles.Image}>
							<img className={styles.ImageOne} src="https://firebasestorage.googleapis.com/v0/b/cimb-59410.appspot.com/o/page%2FHome.png?alt=media&token=2d178c03-b920-407b-b014-55f684fdf943" alt="" />
						</div>
					</div>
				</div>
			</div>
			

			<div className={styles.WaveContainer2}>


				<div className={styles.ContentContainer2}>
					<p className={styles.ProyectosTitulo}> {home.activeProjects}</p>

					<div className={styles.AreasContainer}>


						{home.projects.map((project) => {
							return (

								<div className={styles.AreaOneContainer}>
									<AiOutlineFileSearch className={styles.Icon} />
									<p className={styles.AreaTitle}> {project.title} </p>
									<a className={styles.AreaLink}> {project.info}</a>
								</div>
								// <ProjectCard />
							);

						})}
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

import React from 'react'
import styles from "./BlogCardStyles.module.scss"
import img from "./BlogImg.jpg"
import { BsFillCalendarFill, BsPersonFill, BsTagFill } from "react-icons/bs"
import { RiArrowRightUpFill } from "react-icons/ri"

const BlogCard = () => {
	return (
		<div className={styles.Wrapper}>

			<picture className={styles.Picture}>
				<img src={img} />
			</picture>


			<p className={styles.Title}> Visita de la Universidad Hangzhou Dianzi</p>

			<div className={styles.TagsContainer}>
				<span className={styles.IconText}>
					<BsFillCalendarFill className={styles.Icon} />
					10/06/1999
				</span>


				<span className={styles.IconText}>

					<BsPersonFill className={styles.Icon} />
					Einar López Altamirano
				</span>

				<span className={styles.IconText}>

					<BsTagFill className={styles.Icon} />
					Noticias
				</span>



			</div>


			<p className={styles.Description}>
				Como parte de los partner científicos KNX, este martes el profesor investigador Sergio Navarro Tuch realizó una conferencia sobre Domótica Emocional en el evento KNX Days México.

				La Domótica Emocional es una línea de investigación que busca integrar el análisis de la experiencia del usuario (UX) del espacio automatizado a través de la medición de variables fisiológicas y emocionales, para integrarse con los sistemas domóticos.

				El tema que se presentó, fue el estado de la investigación actual en torno a la domótica emocional que busca el desarrollo de sistemas de control de espacios habitables centrado en el análisis y monitoreo del estado emocional del usuario.

				También se expuso sobre la automatización de espacios, misma que adquiere una mayor importancia en cara al desarrollo e integración de ciudades inteligentes, aprovechando el próximo lanzamiento de la tecnología de comunicación 5G así como las tendencias de desarrollo sustentable con recursos limitados para minimizar el impacto ambiental del ser humano.

			</p>

			<span className={styles.ButtonContainer}>
				<RiArrowRightUpFill className={styles.IconRead} />
				Read More
			</span>




		</div>
	)

}
export default BlogCard;

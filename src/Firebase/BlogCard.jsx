import React from 'react'
import styles from "./BlogCardStyles.module.scss"

import { BsFillCalendarFill, BsPersonFill, BsTagFill } from "react-icons/bs"
import { RiArrowRightUpFill } from "react-icons/ri"

const BlogCard = (props) => {
	return (
		<div className={styles.Wrapper}>

			<picture className={styles.Picture}>
				<img src={props.img} />
			</picture>


			<p className={styles.Title}> {props.title}</p>

			<div className={styles.TagsContainer}>
				<span className={styles.IconText}>
					<BsFillCalendarFill className={styles.Icon} />
					{props.date}
				</span>


				<span className={styles.IconText}>

					<BsPersonFill className={styles.Icon} />
					{props.author}
				</span>

				<span className={styles.IconText}>

					<BsTagFill className={styles.Icon} />
					{props.tag}
				</span>



			</div>


			<p className={styles.Description}>
				{props.description}

			</p>

			<span className={styles.ButtonContainer}>
				<RiArrowRightUpFill className={styles.IconRead} />
				Read More
			</span>




		</div>
	)

}
export default BlogCard;

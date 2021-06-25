import React from "react"
import styles from "./BlogStyles.module.scss"


import BlogCard from "./BlogCard.jsx"
const Blog = () => {
	return (
		<div className={styles.Wrapper} >
			<BlogCard />
			<BlogCard />

		</div>
	)


}
export default Blog

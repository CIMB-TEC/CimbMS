import React, { useEffect, useState } from "react"
import styles from "./BlogStyles.module.scss"
import firebase from "firebase"



import BlogCard from "./BlogCard.jsx"
const Blog = () => {

	const [blogs, setBlogs] = useState([])

	const db = firebase.firestore()

	const getValue = async () => {
		const blogRef = db.collection("blog");
		const blogsDB = await blogRef.get()
		if (blogsDB.empty) {
			console.log("No blogs")
			return
		}
		blogsDB.forEach(blog => {
			setBlogs(blogs => [...blogs, blog.data()])
		})
	}


	useEffect(() => {
		getValue()

	}, [])



	return (
		<div className={styles.Wrapper} >
			{
				blogs.length > 0 ? (
					blogs.map((blog, index) => {
						return (
							<BlogCard
								key={index}
								author={blog.author}
								date={blog.date}
								description={blog.description}
								img={blog.img}
								tag={blog.tag}
								title={blog.title}

							/>

						);

					})
				) : <p className={styles.LoadingMsg} > Loading...</p>
			}




		</div >
	)


}
export default Blog

import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import {Link} from "gatsby"
import Img from "gatsby-image"

import logo from "../images/bclo-logo.png"

const Gallery = () => {
	const data = useStaticQuery(graphql`
    query {
		images: allFile(
			filter: {relativeDirectory: {eq: "gallery"}},
			sort: {order: ASC, fields: name}
			) {
			nodes {
			  id
			  childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			  }
			}
		}
	  }	  
  `)

  console.log(data)
	return(
		<div className="galleryContainer">
			<SEO title="Gallery" />

			<div className="galleryHomeLink">
				<Link to="/"><img src={logo} alt=""/></Link>
			</div>
			{data.images.nodes.map(image=>(
				<div className="galleryImageContainer">
					<Img className="galleryImage" key={image.id} fluid={image.childImageSharp.fluid} />
				</div>
			))}
			
			{/* <Img
				fixed={data.file.childImageSharp.fixed}
				alt="Gatsby Docs are awesome"
			/> */}

			{/* <a href="../images/gallery/gallery-01.jpg"><image href="../images/gallery/gallery-01.jpg" alt="gallery photo 01" /></a>
			<a href="../images/gallery/gallery-02.jpg"><image href="../images/gallery/gallery-02.jpg" alt="gallery photo 02" /></a>
			<a href="../images/gallery/gallery-03.jpg"><image href="../images/gallery/gallery-03.jpg" alt="gallery photo 03" /></a>
			<a href="../images/gallery/gallery-04.jpg"><image href="../images/gallery/gallery-04.jpg" alt="gallery photo 04" /></a>
			<a href="../images/gallery/gallery-05.jpg"><image href="../images/gallery/gallery-05.jpg" alt="gallery photo 05" /></a>
			<a href="../images/gallery/gallery-06.jpg"><image href="../images/gallery/gallery-06.jpg" alt="gallery photo 06" /></a>
			<a href="../images/gallery/gallery-07.jpg"><image href="../images/gallery/gallery-07.jpg" alt="gallery photo 07" /></a>
			<a href="../images/gallery/gallery-08.jpg"><image href="../images/gallery/gallery-08.jpg" alt="gallery photo 08" /></a>
			<a href="../images/gallery/gallery-09.jpg"><image href="../images/gallery/gallery-09.jpg" alt="gallery photo 09" /></a>
			<a href="../images/gallery/gallery-10.jpg"><image href="../images/gallery/gallery-10.jpg" alt="gallery photo 10" /></a>
			<a href="../images/gallery/gallery-11.jpg"><image href="../images/gallery/gallery-11.jpg" alt="gallery photo 11" /></a>
			<a href="../images/gallery/gallery-12.jpg"><image href="../images/gallery/gallery-12.jpg" alt="gallery photo 12" /></a>
			<a href="../images/gallery/gallery-13.jpg"><image href="../images/gallery/gallery-13.jpg" alt="gallery photo 13" /></a>
			<a href="../images/gallery/photo-001.jpg"><image href="../images/gallery/photo-001.jpg" alt="gallery photo 01" /></a>
			<a href="../images/gallery/photo-002.jpg"><image href="../images/gallery/photo-002.jpg" alt="gallery photo 02" /></a>
			<a href="../images/gallery/photo-003.jpg"><image href="../images/gallery/photo-003.jpg" alt="gallery photo 03" /></a>
			<a href="../images/gallery/photo-004.jpg"><image href="../images/gallery/photo-004.jpg" alt="gallery photo 04" /></a>
			<a href="../images/gallery/photo-005.jpg"><image href="../images/gallery/photo-005.jpg" alt="gallery photo 05" /></a>
			<a href="../images/gallery/photo-006.jpg"><image href="../images/gallery/photo-006.jpg" alt="gallery photo 06" /></a> */}
		</div>
	)
}


export default Gallery
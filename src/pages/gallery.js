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

//   console.log(data)
	const GalleryCaptions = [
		'2023 Dinner',
		'2023 Dinner'
		'Graduation Day Demonstration',
		'Graduation Day Demonstration',
		'Graduation Day Demonstration',
		'Graduation Day Demonstration',
		'Sifu Benny’s Family and Master S. Fung in the middle',
		'back: Sifu Benny and his students - front: Master S. Fung in the middle',
		'Sifu Benny and his students',
		'Cecilia Lo (2nd row right) and her Ving Tsun Club students @ R.H.King Academy',
		'Practising the long pole with students and colleague',
		'Students practising double sticky hands',
		' ',
		' ',
		' ',
		' ',
		' ',
		' ',
		'Sifu Benny’s family with Master S. Fung and Sihen Paul ',
		'Sifu Benny with his wife Cecilia and Master S. Fung',
		'Family graduation certificates on the wall',
		'BCLO Ving Tsub Academy female students',
		'test #1',
		'test #1',
		'test #1',
		'test #1',
		'After test night snack with the current class!'
	]

	return(
		<div className="galleryContainer">
			<SEO title="Gallery" />

			<div className="galleryHomeLink">
				<Link to="/"><img src={logo} alt=""/></Link>
			</div>
			{data.images.nodes.map( (image, i)=>(
				<div className="galleryImageContainer">
					<Img className="galleryImage" key={image.id} fluid={image.childImageSharp.fluid} />
			<p className="galleryCaption"> {GalleryCaptions[i]} </p>
				</div>
			))}
			
		</div>
	)
}


export default Gallery

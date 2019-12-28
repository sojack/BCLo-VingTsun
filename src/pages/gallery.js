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
			
		</div>
	)
}


export default Gallery
import React from "react"
import {Link} from "gatsby"
import {graphql} from "gatsby"
import {
  Button,
  HeaderLogo,
  HeadingXL,
  HeadingL,
  Image,
  Layout,
  SEO,
  TextBody,
} from "../components"

export default function About({data}) {
  return (
    <>
      <SEO title="Marcelo Alvarez, Full Stack E-commerce Project Manager" />
      <HeaderLogo />
      <Layout>
        <HeadingXL>Full Stack E-commerce Project Manager</HeadingXL>
        <Image fluid={data.RandomPhoto.childImageSharp.fluid} />
        <TextBody>
        A professional with strong experience in high functioning product development and project management environments. Highly adaptable with recognized talents working with E-Commerce solutions such as Magento as well as being proficient in aligning software requirements with innovative solutions to complex IT challenges. Continually on the forefront of developing trends integrating current and emerging cutting-edge technologies and peripheral processes to deliver impactful results.<br /><br />
        <Link to="/experience">
        <li>Experience </li>
      </Link>

      <Link to="/expertise">
        <li>Expertise</li>
      </Link>

        
        </TextBody>
       
        <Button href="mailto:marcelo.alvarez@me.com">Get in touch</Button>
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    RandomPhoto: file(relativePath: {eq: "assets/images/product_iteration.png"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

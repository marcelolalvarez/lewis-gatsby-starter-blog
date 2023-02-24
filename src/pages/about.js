import React from "react"
import {Link} from "gatsby"
import {
  Button,
  HeaderLogo,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
} from "../components"

import imageAsset from '../assets/images/about.svg'

export default function About({data}) {
  return (
    <>
      <SEO title="Marcelo Alvarez, IT Infrastructure Project Manager" />
      <HeaderLogo />
      <Layout>
        <HeadingXL>Full Stack E-commerce Project Manager</HeadingXL>
        <img src={imageAsset} alt='About' />
        <TextBody>
        A professional with strong experience in high functioning product development and project management environments. Highly adaptable with recognized talents working with E-Commerce solutions such as Magento as well as being proficient in aligning software requirements with innovative solutions to complex IT challenges. Continually on the forefront of developing trends integrating current and emerging cutting-edge technologies and peripheral processes to deliver impactful results.<br /><br />
        <Link to="/experience">
        <li>Experience </li>
      </Link>

      <Link to="/expertise">
        <li>Expertise</li>
      </Link>

        
        </TextBody>
       
        <Button href="contact">Get in touch.</Button>
      </Layout>
    </>
  )
}

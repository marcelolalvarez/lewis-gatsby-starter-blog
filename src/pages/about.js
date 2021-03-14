import React from "react"
import {graphql} from "gatsby"
import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from "../components"

export default function About({data}) {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>Full Stack E-commerce Project Manager</HeadingXL>
        <Image fluid={data.RandomPhoto.childImageSharp.fluid} />
        <TextBody>
        A professional with strong experience in high functioning product development and project management environments. Highly adaptable with recognized talents working with E-Commerce solutions such as Magento as well as being proficient in aligning software requirements with innovative solutions to complex IT challenges. Continually on the forefront of developing trends integrating current and emerging cutting-edge technologies and peripheral processes to deliver impactful results.
          <br />
          <br />
          Bringing so sociable felicity supplied mr. September suspicion far him
          two acuteness perfectly. Covered as an examine so regular of. Ye
          astonished friendship remarkably no. Window admire matter praise you
          bed whence. Delivered ye sportsmen zealously arranging frankness
          estimable as. Nay any article enabled musical shyness yet sixteen yet
          blushes. Entire its the did figure wonder off.
        </TextBody>
        <Button href="mailto:your&#64;email.com">Get in touch</Button>
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    RandomPhoto: file(relativePath: {eq: "assets/images/RandomPhoto.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

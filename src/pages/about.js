import React from "react"
import {graphql} from "gatsby"
import {
  Button,
  HeaderBack,
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
      <HeaderBack />
      <Layout>
        <HeadingXL>Full Stack E-commerce Project Manager</HeadingXL>
        <Image fluid={data.RandomPhoto.childImageSharp.fluid} />
        <TextBody>
        A professional with strong experience in high functioning product development and project management environments. Highly adaptable with recognized talents working with E-Commerce solutions such as Magento as well as being proficient in aligning software requirements with innovative solutions to complex IT challenges. Continually on the forefront of developing trends integrating current and emerging cutting-edge technologies and peripheral processes to deliver impactful results.<br />
        </TextBody>

        <HeadingL>EXPERTISE</HeadingL>
        <TextBody>
        Professional Completencies<br /><br />
        Project Management<br />
        Product Management<br />
        Agile<br />
        Waterfall<br />
        SDLC<br />
        Strategic Partnerships<br />
        Usability Testing<br />
        Web/Application Design<br />
        SEO/SEM<br />
        Agency Management<br />
        Optimization<br />
        Exec Communication<br />
        Analytics<br />
        Ecommerce Strategy<br />
        Cloud<br />
        Business Requirements<br />
        Team Buildup<br />
        Outsourcing Specialist<br />
        Budget Proposals<br />
        KPI Measurement<br /><br />
       </TextBody>
        <Button href="mailto:marcelo.alvarez@me.com">Get in touch</Button>
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    RandomPhoto: file(relativePath: {eq: "assets/images/fullstack.png"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

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
      <SEO title="Marcelo Alvarez, Full Stack E-commerce Project Manager" />
      <HeaderBack />
      <Layout>
        <HeadingXL>Full Stack E-commerce Project Manager</HeadingXL>
        <Image fluid={data.RandomPhoto.childImageSharp.fluid} />
        <TextBody>
        A professional with strong experience in high functioning product development and project management environments. Highly adaptable with recognized talents working with E-Commerce solutions such as Magento as well as being proficient in aligning software requirements with innovative solutions to complex IT challenges. Continually on the forefront of developing trends integrating current and emerging cutting-edge technologies and peripheral processes to deliver impactful results.
        </TextBody>

        <HeadingL>Expertise</HeadingL>
        <TextBody>
        ## Professional Competencies

* Project Management
* Product Management
* Agile
Waterfall
SDLC
Strategic Partnerships
Usability Testing
Web/Application Design
SEO/SEM
Agency Management
Optimization
Exec Communication
Analytics
Ecommerce Strategy
Cloud
Business Requirements
Team Buildup
Outsourcing Specialist
Budget Proposals
KPI Measurement

## Platform Expertise

Project Management - Jira, Trello, BaseCamp, Smartsheet, Microsoft Project, Freedcamp.
Analytics - Google Analytics, WebTrends
Ecommerce - Magento, Woocommerce
CMS - Word Press, Drupal
System Diagramming - Lucidchart, Microsoft Visio, Balsamiq
Design - Photoshop
Other - MS Office 365, OneNote, Sharepoint 365, Confluence, Zendesk, Kayako.









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

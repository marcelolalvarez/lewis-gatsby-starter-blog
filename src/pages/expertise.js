import React from "react"
import {
  Button,
  HeaderLogo,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
} from "../components"
import imageAsset from '../assets/images/myexpertise.svg'

export default function expertise({data}) {
  return (
    <>
      <SEO title="Marcelo Alvarez, Full Stack E-commerce Project Manager" />
      <HeaderLogo />
      <Layout>
        <HeadingXL>Expertise</HeadingXL>
        <img src={imageAsset} alt='Experience' />
        <TextBody>
        <strong>PROFESSIONAL COMPETENCIES</strong><br /> <br />
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

        <strong>PLATFORM EXPERTISE</strong><br /><br />
        Project Management - Jira, Trello, BaseCamp, Smartsheet, Microsoft Project, Freedcamp.
Analytics - Google Analytics, WebTrends
Ecommerce - Magento, Woocommerce
CMS - Word Press, Drupal
System Diagramming - Lucidchart, Microsoft Visio, Balsamiq
Design - Photoshop
Other - MS Office 365, OneNote, Sharepoint 365, Confluence, Zendesk, Kayako.
        </TextBody>
        <Button href="contact">Get in touch</Button>
      </Layout>
    </>
  )
}

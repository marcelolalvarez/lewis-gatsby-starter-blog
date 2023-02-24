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
        Project Management (Waterfall, Agile)<br />
        SDLC<br />
         Team Buildup<br />
Cloud<br />
IT Infrastructure Projects<br />
Project Scope<br />
Retail Infrastructure<br />
Networking<br />
Data Analytics<br />
Telecom<br />
Broadband<br />
SLA<br />
Diagrams<br />
POS Systems<br />
Payment Systems<br />
Negotiation<br />
 Exec Communication<br />
       Outsourcing Specialist<br />
        Budget Proposals<br />
Customer Satisfaction<br /><br />

        <strong>PLATFORM EXPERTISE</strong><br /><br />
        Project Management - Jira, Confluence, BaseCamp, Smartsheet, Microsoft Project.
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

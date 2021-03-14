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

export default function experience({data}) {
  return (
    <>
      <SEO title="Marcelo Alvarez, Full Stack E-commerce Project Manager" />
      <HeaderBack />
      <Layout>
        <HeadingXL>Experience</HeadingXL>
        <Image fluid={data.RandomPhoto.childImageSharp.fluid} />
        <TextBody>
        <strong>EMPLOYMENT</strong><br />
<strong>Pet Supermarket</strong> - February 2021 - Now: IT Project Manager/Business Analyst.<br />
<strong>HBO Latin America</strong> - September 2019 - February 2021: Technical Project Manager.<br />
<strong>Deluxe</strong> - September 2019 - March 2019: Magento Technical Consultant - Cloud Hosting Platform.<br />
<strong>Comodo</strong> - March 2019-August 2019: Partner Success Manager.<br />
<strong>Ambitec</strong> - March 2017 - February 2019: Magento eCommerce Project Manager.<br />
<strong>Rank Advisor</strong> - Sept 2013 - February 2017: Digital Project Manager.<br />
<strong>Factor Móvil</strong> - Jul 2011 - Sept 2013: Digital Project Manager.<br />
<strong>Universe of Faith</strong> - Sept 2009 - Jul 2011: IT Director.<br />
<strong>Children's Oncology Group/CureSearch</strong> - July 2000 - Sept 2009: Manager of Web Technologies.<br /><br /><br />

<strong>PROJECTS I HAVE MANAGED</strong><br /><br />
<strong>WEBSITES</strong><br />
CureSearch, Nervous Waters, Abaco Lodge, 770 Rent a Acar, Childrens Oncology Group, David Denies, Red Stag Patagonia, MHKA, Universal Dance Studios Miami<br /><br />
<strong>ECOMMERCE WEBSITES</strong><br />
Verizon Dominican Republic (Episerver), Acemarks (Magento), Venettini (Magento), Abtbeads (Magento), GlobalBiosScience (Magento), RTS Tactical (Magento), Ambitec (Magento), Universe of Faith (Magento)
, Christian Books (Magento), Christian Sermons (Magento), Christian Music (Magento), Universe of Faith (Magento), Club La Nacion (Magento).<br /><br />
<strong>WEB APPLICATIONS</strong><br />
Nationwide Logistic Solutions, Meyda, MyWifiWiz, Enhanced Remote Data Entry Systems.<br /><br />
<strong>APPLICATIONS</strong><br />
PeopleSoft Upgrade, MOBILE APPS, Universe of Faith. <br /><br />
<strong>INFRASTRUCTURE</strong><br />
Office 365 Migration for 1500+ accounts, Okta Applications Migration.
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

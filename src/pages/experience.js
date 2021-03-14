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
Pet Supermarket - February 2021 - Now: IT Project Manager/Business Analyst.<br />
HBO Latin America - September 2019 - February 2021: Technical Project Manager.<br />
Deluxe - September 2019 - March 2019: Magento Technical Consultant - Cloud Hosting Platform.<br />
Comodo - March 2019-August 2019: Partner Success Manager.<br />
Ambitec - March 2017 - February 2019: Magento eCommerce Project Manager.<br />
Rank Advisor - Sept 2013 - February 2017: Digital Project Manager.<br />
Factor Móvil - Jul 2011 - Sept 2013: Digital Project Manager.<br />
Universe of Faith - Sept 2009 - Jul 2011: IT Director.<br />
Children's Oncology Group/CureSearch - July 2000 - Sept 2009: Manager of Web Technologies.<br />

PROJECTS I HAVE MANAGED<br /><br />
WEBSITES<br />
CureSearch, Nervous Waters, Abaco Lodge, 770 Rent a Acar, Childrens Oncology Group, David Denies, Red Stag Patagonia, MHKA, Universal Dance Studios Miami<br /><br />
ECOMMERCE WEBSITES<br />
Verizon Dominican Republic (Episerver), Acemarks (Magento), Venettini (Magento), Abtbeads (Magento), GlobalBiosScience (Magento), RTS Tactical (Magento), Ambitec (Magento), Universe of Faith (Magento)
, Christian Books (Magento), Christian Sermons (Magento), Christian Music (Magento), Universe of Faith (Magento), Club La Nacion (Magento).<br /><br />
WEB APPLICATIONS<br />
Nationwide Logistic Solutions, Meyda, MyWifiWiz, Enhanced Remote Data Entry Systems.<br /><br />
APPLICATIONS<br />
PeopleSoft Upgrade, MOBILE APPS, Universe of Faith. <br /><br />
INFRASTRUCTURE<br />
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

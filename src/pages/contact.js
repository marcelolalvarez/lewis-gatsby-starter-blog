import React from "react"
import { graphql } from "gatsby"
import {
  SubmitButton,
  HeaderBack,
  HeadingXL,
  TextArea,
  TextField,
  Layout,
  SEO,
  Label,
  TextBody
} from "../components"

export default function Contact({ data }) {
  
  return (
    <>
      <SEO title="Contact us" />
      <HeaderBack />
      <Layout>
        <HeadingXL>Contact us</HeadingXL>
        <TextBody>
          I collaborate with ambitious brands and people.<br />
          Let’s work on something great together.<br />
        </TextBody>
        <form action="https://getform.io/f/7e3281ea-1bdc-457d-bd66-7a4a3fcb98f7" method="POST">
          <Label>Name</Label>
          <TextField type="text" name="name" />
          <Label>Email</Label>
          <TextField type="email" name="email" />
          <Label>Message</Label>
          <TextArea rows="4" name="message" />
          <SubmitButton type="submit">Send</SubmitButton>  
        </form>
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

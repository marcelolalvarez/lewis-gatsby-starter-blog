import React from "react"
import {Link, graphql} from "gatsby"
import styled from "styled-components"
import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from "../components"
import {BREAKPOINT} from "../utils/constants"

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
  }
`
const TextHome = styled.p`
  color: var(--dark-color-light);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28em;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 7vh;
  }
`
const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

export default function Home({data}) {
  return (
    <>
      <SEO title="Blog" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <HeadingXL>Marcelo Alvarez.</HeadingXL>
          <TextHome>
          I collaborate with ambitious brands and people.<br />
Let’s work on something great together.<br />
FULL STACK E-COMMERCE PROJECT MANAGER<br />
A professional with strong experience in high functioning product development and project management environments. Highly adaptable with recognized talents working with E-Commerce solutions such as Magento as well as being proficient in aligning software requirements with innovative solutions to complex IT challenges. Continually on the forefront of developing trends integrating current and emerging cutting-edge technologies and peripheral processes to deliver impactful results.

          </TextHome>
        </Hero>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Link to={node.fields.slug} key={node.id}>
            <Post>
              <HeadingL>{node.frontmatter.title}</HeadingL>
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

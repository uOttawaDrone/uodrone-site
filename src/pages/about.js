import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Learn about us!
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.logo.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>uoDrone's awesome logo!</figcaption>
          </figure>
          <h3 id="dynamic-styles">Our objectives</h3>
          <p>
          Our current objective for this semester (fall 2019) is to build a drone from a kit. This task is relatively simple but is important to complete before we begin working on a drone from scratch. Through the development of this drone, we'd be able to practice documenting properly (issues, bugs, updates) and understand our workflow (who works well where & how our team works as an organization). Ideally, after this semester, most/all of the engineers in the club should be able to understand their responsibilities, document their work properly, and understand how to work in different teams to accomplish different goals. 
          </p>
          <h3 id="dynamic-styles">Our team</h3>
          <p>
          Our team currently consists of 15 third-year mechanical, electrical, computer, and software engineers. Although our team is mostly upper-year students, I thought that it would be useful to go through an iteration of development before recruiting younger students to solidify the workflow of the organization. Next semester, when we start development from scratch, our members should be able to mentor first and second-year students.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    logo: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)

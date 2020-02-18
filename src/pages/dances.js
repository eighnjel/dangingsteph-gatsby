import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/layout"

import "./dances.sass"

class DanceIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const dances = get(this, 'props.data.allContentfulDance.edges')

    return (
      <Layout location={this.props.location} >
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <h1>A collection of dance and aerial:</h1>
          <div className="DanceList">
            {dances.map(({ node }) => {
              return (
                <div className="DanceList--dance" key={node.slug}>
                  <Link to={`/dances/${node.slug}`} className="danceLink">
                    <div className="DanceList--image-container">
                      <img src={node.thumbnail.file.url} />
                    </div>
                    <h3>{node.title}</h3>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default DanceIndex

export const pageQuery = graphql`
  query DanceIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulDance(sort: {fields: [date], order: DESC}) {
      edges {
        node {
          title
          slug
          date
          thumbnail {
            file {
              url
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout'

import "../pages/dances.sass"

class DanceTemplate extends React.Component {
  render() {
    const dance = get(this.props, 'data.contentfulDance');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <Layout location={this.props.location} >
        <Helmet title={`${dance.title} | ${siteTitle}`} />
        <div className="wrapper-focused">
          <div id="Dance">
            <h2>{dance.title}</h2>
            <div className="Dance--media">
              {dance.media === "video" &&
                <iframe src={dance.mediaUrl}
                  width="650"
                  height="430"
                  frameBorder="0"
                  allowFullScreen
                />
              }
              {dance.media === "album" &&
                <a href={dance.mediaUrl} target="_blank" className="danceLink">
                  <img src={dance.thumbnail.file.url} />
                  <br />
                  View Photo Album
                </a>
              }
            </div>
            {dance.performers.length == 1 && dance.performers[0] == dance.choreographer ? (
              <div className="Dance--infoline">
                <span className="Dance--title">Choreographed and Performed by: </span>
                {dance.choreographer}
              </div>
            ) : (
              <div className="Dance--infoline">
                <span className="Dance--title">Choreography by: </span>
                {dance.choreographer}
                <br />

                <span className="Dance--title">Performers: </span>
                {dance.performers.join(", ")}
              </div>
            )}
            <span className="Dance--title">Date: </span>
            {dance.date}
            {dance.description &&
              documentToReactComponents(dance.description.json)
            }
            <p />
            <Link to="/dances" className="danceLink">&larr; Back to Dances</Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DanceTemplate

export const pageQuery = graphql`
  query DanceBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulDance(slug: { eq: $slug }) {
      title
      choreographer
      date(formatString: "MMMM Do, YYYY")
      media
      mediaUrl
      title
      performers
      music {
        json
      }
      description {
        json
      }
      thumbnail {
        file {
          url
        }
      }
    }
  }
`

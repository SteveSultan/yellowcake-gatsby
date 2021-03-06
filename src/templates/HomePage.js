import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

import { Column, Row } from 'simple-flexbox'
import { Flex, Box } from 'reflexbox'
import Grid from 'react-css-grid'
import _kebabCase from 'lodash/kebabCase'
import 'react-photoswipe/lib/photoswipe.css'
import BackgroundVideo from '../components/BackgroundVideo'


// Export Template for use in CMS preview
export const HomePageTemplate = ({ 
  title, 
  subtitle, 
  featuredImage, 
  body,
  section1,
  section2,
  video,
  videoPoster,
  videoTitle,
  accordion,
  gallery }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    

    <section className="section">
        <div className="container">
          <Content source={body} />
      </div>
    </section>

    <section className="BackgroundVideo-section section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>
     
    {/* <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section> */}
    
    {/* <section className="section">
      <div className="container">
        <h2>Our gallery component</h2>
        <Gallery images={gallery} />
      </div>
    </section> */}
   
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}
  title={page.frontmatter.title || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        subtitle
        featuredImage
        featuredImage
        section1
        section2
        video
        videoPoster
        videoTitle
        accordion {
          title
          description
        }
      }
    }
  }
`

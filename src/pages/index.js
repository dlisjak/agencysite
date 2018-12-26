import React from 'react'

import Layout from '../components/layout'
import Header from '../components/home/Header'

import SEO from '../components/seo'
import WebDesign from '../components/home/WebDesign'
import Marketing from '../components/home/Marketing'
import GraphicDesign from '../components/home/GraphicDesign'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <WebDesign />
    <Marketing />
    <GraphicDesign />
  </Layout>
)

export default IndexPage

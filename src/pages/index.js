import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Feature from '../components/Feature/Feature'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Feature />
  </Layout>
)

export default IndexPage

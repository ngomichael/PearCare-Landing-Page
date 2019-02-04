import React from 'react'
import { Link } from 'gatsby'
import SocialSharing from '../components/SocialSharing'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroSection from '../components/HeroSection'
import '../components/logos.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroSection />
    <Link to="/page-2/">Go to page 2</Link>
    <SocialSharing />
  </Layout>
)

export default IndexPage

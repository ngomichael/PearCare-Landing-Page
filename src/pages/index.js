import React from 'react'
import { Link } from 'gatsby'
import SocialSharing from '../components/SocialSharing'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import '../components/logos.css'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello Pears</h1>
    <p>This is MY swamp.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <SocialSharing/>
  </Layout>
)



export default IndexPage

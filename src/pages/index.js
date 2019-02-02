import React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.css'

import Layout from '../components/layout'
import Features from '../components/Features/Features'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className={styles.features}>
      <Features />
    </section>
  </Layout>
)

export default IndexPage

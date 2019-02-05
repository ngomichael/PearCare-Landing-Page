import React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.css'

import Layout from '../components/layout'
import Features from '../components/Features/Features'
import Members from '../components/Members/Members'
import ValueProps from '../components/ValueProps/ValueProps'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.container}>
      <section className={styles.features}>
        <Features />
      </section>
      <section className={styles.valueProps}>
        <ValueProps />
      </section>
      <section className={styles.valueProps}>
        <Members />
      </section>
    </div>
  </Layout>
)

export default IndexPage

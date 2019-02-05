import React from 'react'
import styles from './index.module.css'

import Layout from '../components/layout'
import Hero from '../components/Hero/Hero'
import ValueProps from '../components/ValueProps/ValueProps'
import Features from '../components/Features/Features'
import Members from '../components/Members/Members'
import Separater from '../components/Separater/Separater'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.container}>
      <section className={styles.hero}>
        <Hero />
      </section>
      <Separater />
      <section className={styles.valueProps}>
        <ValueProps />
      </section>
      <Separater />
      <section className={styles.features}>
        <Features />
      </section>
      <Separater />
      <section className={styles.valueProps}>
        <Members />
      </section>
    </div>
  </Layout>
)

export default IndexPage

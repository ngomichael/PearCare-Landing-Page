import React from 'react'
import styles from './index.module.css'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'
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
      <Element className={styles.hero}>
        <Hero />
      </Element>
      <Separater />
      <Element className={styles.valueProps} name="ValueProps">
        <ValueProps />
      </Element>
      <Separater />
      <Element className={styles.features} name="Features">
        <Features />
      </Element>
      <Separater />
      <Element className={styles.valueProps} name="Team">
        <Members />
      </Element>
    </div>
  </Layout>
)

export default IndexPage

import React from 'react'
import styles from './Features.module.css'
import Feature from '../Feature/Feature'
import searchIcon from '../../icons/search.svg'
import messageIcon from '../../icons/message-circle.svg'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'

const features = [
  {
    name: 'Match',
    description: 'Get matched with a provider that best meets your needs',
    icon: searchIcon,
  },
  {
    name: 'Search',
    description:
      'Search for providers and filter by criteria that is important to you',
    icon: searchIcon,
  },
  {
    name: 'Availability',
    description: 'View providers that are taking clients',
    icon: searchIcon,
  },
  {
    name: 'Consultation',
    description: 'Save time through a short consultation with providers',
    icon: messageIcon,
  },
]

const Features = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PearCare Features</h1>
      <div className={styles.featuresContainer}>
        {features.map(feature => (
          <Feature feature={feature} />
        ))}
      </div>
    </div>
  )
}

export default Features

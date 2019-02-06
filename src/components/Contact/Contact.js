import React from 'react'
import styles from './Contact.module.css'
import HighlightedLink from '../HighlightedLink/HighlightedLink'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactInfoContainer}>
        <h1>Contact Us</h1>
        <p>You can email us at michael_ngo@live.com with any questions</p>
      </div>
      <div className={styles.surveyContainer}>
        <p>
          If you've ever serached for mental healthcare or if you're a provider,
          we'd love it if you could fill out these surveys!
        </p>
        <HighlightedLink
          site="https://docs.google.com/forms/d/1JKVHYDA44EgklF8G--Q1U9dnZ77go8FYfInyxJIeEOc/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Patient Survey
        </HighlightedLink>
        <HighlightedLink
          site="https://docs.google.com/forms/d/1gHNLNRMECpZOiIJXFAt8Yu_O4X3IXibJtLobfhlmIIA/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Provider Survey
        </HighlightedLink>
      </div>
    </div>
  )
}

export default Contact

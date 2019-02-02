import React from 'react'
import styles from './Feature.module.css'

const Feature = ({ feature }) => {
  return (
    <div className={styles.container}>
      <img src={feature.icon} className={styles.icon} />
      <div className={styles.featureContainer}>
        <h1 className={styles.featureName}>{feature.name}</h1>
        <p className={styles.featureDescription}>{feature.description}</p>
      </div>
    </div>
  )
}

export default Feature

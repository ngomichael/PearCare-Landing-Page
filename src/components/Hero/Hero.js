import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tagline}>
        <h1>Find a Therapist and Find Mental Healing</h1>
      </div>
      <div className={styles.image} />
    </div>
  )
}

export default Hero

import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sloganContainer}>
        <h1 className={styles.slogan}>
          Better patient-provider pairs, better mental healthcare
        </h1>
      </div>
      <div className={styles.image} />
    </div>
  )
}

export default Hero

import React from 'react'
import styles from './Hero.module.css'
import { UndrawHire } from 'react-undraw'
import { Button } from '../Button/Button'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sloganButtonContainer}>
        <div className={styles.sloganContainer}>
          <h1 className={styles.slogan}>
            Better patient-provider pairs, better mental healthcare
          </h1>
          <p className={styles.supplementaryText}>
            At PearCare, we'll match you with providers that best fits your
            lifestyle.
          </p>
        </div>
        <Button>Find a provider</Button>
      </div>
    </div>
  )
}

export default Hero

// Hire, Process
// Team Page

import React from 'react'
import styles from './header.module.css'

const nav = ['Problem', 'Features', 'Team']

const Header = () => (
  <header className={styles.container}>
    <div className={styles.nameAndNavContainer}>
      <h1 className={styles.productName}>PearCare</h1>
      <ul className={styles.navContainer}>
        {nav.map(text => (
          <li className={styles.navButton}>{text}</li>
        ))}
      </ul>
    </div>
  </header>
)

export default Header

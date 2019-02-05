import React from 'react'
import styles from './header.module.css'

const navLinks = [
  {
    title: 'Problem',
    id: 'values',
  },
  {
    title: 'Features',
    id: 'features',
  },
  {
    title: 'Team',
    id: 'team',
  },
]

const Header = () => (
  <header className={styles.container}>
    <div className={styles.nameAndNavContainer}>
      <h1 className={styles.productName}>
        Pear<i>Care</i>
      </h1>
      <ul className={styles.navContainer}>
        {navLinks.map(link => (
          <li className={styles.navButton}>{link.title}</li>
        ))}
      </ul>
    </div>
  </header>
)

export default Header

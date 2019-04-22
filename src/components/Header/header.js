import React from 'react'
import styles from './header.module.css'
import { Link, animateScroll as scroll } from 'react-scroll'
import logo from '../../images/PearCareLogo.png'

const navLinks = [
  {
    title: 'Solution',
    name: 'ValueProps',
  },
  {
    title: 'Features',
    name: 'Features',
  },
  {
    title: 'Team',
    name: 'Team',
  },
]

const scrollToTop = () => {
  scroll.scrollToTop()
}

const Header = () => (
  <header className={styles.container}>
    <div className={styles.nameAndNavContainer}>
      <img src={logo} className={styles.logo} onClick={scrollToTop} />
      <ul className={styles.navContainer}>
        {navLinks.map(link => (
          <li className={styles.navButton} key={link.title}>
            <Link to={link.name} smooth={true} duration={1000} delay={0}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </header>
)

export default Header

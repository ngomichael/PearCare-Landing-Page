import React from 'react'
import styles from './SocialSharing.module.css'
import facebookIcon from '../../icons/facebook.svg'
import instagramIcon from '../../icons/instagram.svg'
import twitterIcon from '../../icons/twitter.svg'

const SocialSharing = () => {
  return (
    <footer className={styles.container}>
      <h1>Share PearCare on Social Media!</h1>
      <div className={styles.iconsContainer}>
        <img src={facebookIcon} className={styles.icon} />
        <img src={instagramIcon} className={styles.icon} />
        <img src={twitterIcon} className={styles.icon} />
      </div>
    </footer>
  )
}

export default SocialSharing

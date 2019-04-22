import React from 'react'
import styles from './Footer.module.css'

const socialMediaIcons = [
  {
    icon: (
      <svg
        className={styles.facebookIcon}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    link: 'https://www.facebook.com/',
  },
  {
    icon: (
      <svg
        className={styles.instagramIcon}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    ),
    link: 'https://www.instagram.com/pearcare_mentalhealth/',
  },
  {
    icon: (
      <svg
        className={styles.twitterIcon}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
    link: 'https://twitter.com/pearcare_',
  },
]

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.iconsContainer}>
        {socialMediaIcons.map(icon => (
          <a
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialMediaLink}
            key={icon.link}
          >
            {icon.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer

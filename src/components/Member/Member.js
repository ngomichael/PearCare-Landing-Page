import React from 'react'
import styles from './Member.module.css'

const Member = ({ member }) => {
  console.log(member)
  return (
    <div className={styles.container}>
      <img src={member.picture} className={styles.image} alt="Team Member" />
      <div className={styles.informationContainer}>
        <p className={styles.name}>{member.name}</p>
        <p className={styles.role}>{member.role}</p>
      </div>
    </div>
  )
}

export default Member

import React from 'react'
import styles from './Members.module.css'
import michaelPhoto from '../../images/michael.png'
import krystalPhoto from '../../images/krystal.png'
import christinePhoto from '../../images/christine.png'
import danielPhoto from '../../images/daniel.png'
import Member from '../Member/Member'

const members = [
  {
    name: 'Michael Ngo',
    role: 'Full-Stack Developer',
    picture: michaelPhoto,
  },
  {
    name: 'Christine Smet',
    role: 'UX Designer',
    picture: christinePhoto,
  },
  {
    name: 'Krystal Liang',
    role: 'PM and UX Researcher',
    picture: krystalPhoto,
  },
  {
    name: 'Daniel Colina',
    role: 'Full-Stack Developer',
    picture: danielPhoto,
  },
]

const Members = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PearCare Team</h1>
      <div className={styles.membersContainer}>
        {members.map(member => (
          <Member member={member} />
        ))}
      </div>
    </div>
  )
}

export default Members

import React from 'react'
import styles from './Member.module.css'
import Michael from '../../images/michael.jpg'

// const Member = ({ member }) => {
//   return (
//     <div>
//       <h1>PearCare Team</h1>
//       <div>
//         <img src={member.picture} />
//         <p>{member.name}</p>
//         <p>{member.role}</p>
//       </div>
//     </div>
//   )
// }

const Member = ({}) => {
  return (
    <div>
      <h1>PearCare Team</h1>
      <div>
        <img src={Michael} className={styles.image} />
        <div className={styles.informationContainer}>
          <p className={styles.name}>Michael Ngo</p>
          <p className={styles.role}>Full-Stack Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Member

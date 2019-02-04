import React from 'react'
import pikachu from '../../images/pikachu.jpg'
import styles from './ValueProp.module.css'

const ValueProp = ({ value }) => {
  return (
    <div className={styles.container}>
      <img src={pikachu} className={styles.icon} />
      <div className={styles.valuePropContainer}>
        <h1 className={styles.valuePropName}>{value.title}</h1>
        <p className={styles.valuePropDescription}>{value.description}</p>
      </div>
    </div>
  )
}

export default ValueProp

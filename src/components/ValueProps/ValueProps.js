import React from 'react'
import styles from './ValueProps.module.css'
import ValueProp from '../ValueProp/ValueProp'

const valueProps = [
  {
    title: 'Seamless',
    description: 'Easily find therapists who are open for new clients',
  },
  {
    title: 'Efficient',
    description: 'Easily find therapists who are open for new clients',
  },
  {
    title: 'Quick',
    description: 'Easily find therapists who are open for new clients',
  },
]

const ValueProps = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PearCare Value Prop</h1>
      <div className={styles.valuePropsContainer}>
        {valueProps.map(valueProp => (
          <ValueProp value={valueProp} />
        ))}
      </div>
    </div>
  )
}

export default ValueProps

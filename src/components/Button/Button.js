import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Button.module.css'

export const TYPES = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success',
}

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export const Button = ({ children }) => {
  const btnClass = classNames(
    styles.button,
    styles[TYPES.PRIMARY],
    styles[SIZES.MEDIUM]
  )
  return (
    <button type="text" className={btnClass}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

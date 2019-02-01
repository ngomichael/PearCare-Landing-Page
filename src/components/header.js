import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = () => (
  <div
    style={{
      margin: `0 auto`,
      borderTop: `7px solid #3E5A92`,
      padding: `1rem 1rem 0 4rem`,
      background: `white`,
      marginBottom: `1.45rem`,
      boxShadow: `0 4px 6px hsla(0, 0%, 0%, .2)`,
      height: `80px`,
    }}
  >
    <h1
      style={{
        color: `hsl(228, 21%, 31%)`,
        fontSize: `30px`,
      }}
    >
      PearCare
    </h1>
  </div>
)

export default Header

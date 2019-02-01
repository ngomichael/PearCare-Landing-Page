import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header/header'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Header siteTitle="PearCare" />
    <div>{children}</div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

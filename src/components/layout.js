import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header/header'
import SocialSharing from '../components/SocialSharing/SocialSharing'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Header siteTitle="PearCare" />
    <div>{children}</div>
    <SocialSharing />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

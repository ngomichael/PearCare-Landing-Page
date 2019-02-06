import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header/header'
import Footer from '../components/Footer/Footer'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Header siteTitle="PearCare" />
    <div>{children}</div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

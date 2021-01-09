import React from "react"
import PropTypes from "prop-types"
// import UnderConstruction from './under-construction'

// import "./layout.css"

const Layout = ({ children, location }) => {
  return (
    <>
      <div className="relative mx-auto px-5 py-24" style={{ maxWidth: '90rem' }}>
        {children}
      </div>
      {/* <UnderConstruction /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

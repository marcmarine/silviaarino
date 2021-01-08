import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from 'twin.macro'
import UnderConstruction from './under-construction'

// import "./layout.css"

const Main = styled.main`
  max-width: 90rem;
  ${props => props.isHome ? null : tw`mt-8`}
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Main className="relative mx-auto px-5 py-24" isHome={location.pathname === '/'}>
        {children}
      </Main>
      <UnderConstruction />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

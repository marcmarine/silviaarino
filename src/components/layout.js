import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from 'twin.macro'
import CTA from './cta'

import Header from './header'
import "./layout.css"

const Main = styled.main`
  ${tw`p-5 mt-20 pt-10`}
  ${props => props.isHome ? null : tw`mt-8`}
`

const Footer = styled.footer`
  ${tw`p-5 max-w-screen-md`}  
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
    <div>
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <Main isHome={location.pathname === '/'}>
        <article role="main">
          {children}
        </article>
      </Main>
      <CTA />
      <Footer>
        {/* © {new Date().getFullYear()}, Silvia Ariño */}
      </Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

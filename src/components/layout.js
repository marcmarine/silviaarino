/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Transition } from 'react-spring/renderprops'
import { config } from 'react-spring'

import Header from './header'
import "./layout.css"

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
    <div
      style={{
        maxWidth: '800px',
        padding: '3vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      
      <main
        style={{
          paddingTop: '3vw',
          flex: '1'
        }}
      >
        <Transition
          config={config.slow}
          keys={location.pathname}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {() => style => (
            <article role="main" style={style}>
              {children}
            </article>
          )}
        </Transition>
      </main>
      <footer
      style={{
        paddingTop: '3vw'
      }}  >
        © {new Date().getFullYear()}, Silvia Ariño
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

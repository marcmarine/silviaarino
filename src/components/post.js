import React from "react"
import { graphql } from "gatsby"
import { animated, useSpring, config } from 'react-spring'
import Layout from './layout'
import { MDXRenderer } from "gatsby-plugin-mdx"

const PageTemplate = ({ data: { mdx }, location }) => {
  const headerProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -5px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  const contentProps = useSpring({ 
    config: config.slow,
    delay: 150,
    from: { opacity: 0, transform: 'translate3d(0, -5px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  return (
    <Layout location={location}>
      <article>
        {mdx.frontmatter.title && (
          <animated.header style={headerProps}>
            <h4>{mdx.frontmatter.subtitulo}</h4>
            <h2 style={{ fontSize: '2.25em' }}>{mdx.frontmatter.title}</h2>
            {mdx.frontmatter.colaboradores && (
              <h6>Con la colaboración de {mdx.frontmatter.colaboradores}</h6>
            )}
            <h4>{mdx.frontmatter.tipo}</h4>
            <h5>{mdx.frontmatter.date}</h5>
          </animated.header>
        )}
      <animated.div style={contentProps}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </animated.div>
      </article>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        colaboradores
        category
        subtitulo
        date(formatString: "YYYY")
        tipo
      }
      body
    }
  }
`


export default PageTemplate
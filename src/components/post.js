import React from "react"
import { graphql, Link } from "gatsby"
import tw, { styled } from 'twin.macro'
import { animated, useSpring, config } from 'react-spring'
import { MDXRenderer } from "gatsby-plugin-mdx"

const Wrapper = styled.article`
  ${tw`max-w-screen-md`}
`

const StyledLink = styled(Link)`
  ${tw`p-4 pr-3`};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  backdrop-filter: blur(4px);
`

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
    <Wrapper>
      <StyledLink to={`/${mdx.frontmatter.category}`} style={headerProps}>{`<`}</StyledLink>
        {mdx.frontmatter.title && (
          <animated.header style={headerProps}>
            {mdx.frontmatter.subtitulo && <h4>{mdx.frontmatter.subtitulo}</h4>}
            <h2 style={{ fontSize: '2.25em' }}>{mdx.frontmatter.title}</h2>
            {mdx.frontmatter.colaboradores && (
              <h6>Con la colaboración de {mdx.frontmatter.colaboradores}</h6>
            )}
            <h4>{mdx.frontmatter.tipo}</h4>
            {/* <h5>{mdx.frontmatter.date}</h5> */}
          </animated.header>
        )}
      <animated.div style={contentProps}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </animated.div>
    </Wrapper>
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
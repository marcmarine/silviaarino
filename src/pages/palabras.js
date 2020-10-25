import React from "react"
import { Link, graphql } from "gatsby"
import { useTrail, animated } from 'react-spring'
import SEO from '../components/seo'

const config = { mass: 1, tension: 4000, friction: 200 }

const Palabras = ({ data, location }) => {
  const { edges: posts } = data.allMdx
  const trail = useTrail(posts.length, {
    config,
    x: 0,
    opacity: 1,
    delay: 150,
    from: { opacity: 0, x: -5 }
  })
  return (
    <>
      <SEO title="Palabras" />
      <ul>
        {trail.map(({x, ...rest}, index) => (
          <animated.li
            key={posts[index].node.id}
            style={{ ...rest, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}
          >
            <Link to={posts[index].node.fields.slug}>
              {posts[index].node.frontmatter.title}
            </Link>
          </animated.li>
        ))}
      </ul>
    </>
  )
}

export const pageQuery = graphql`
  query Palabras {
    allMdx(
      filter: {
        frontmatter: {category: {eq: "palabras"}}
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default Palabras
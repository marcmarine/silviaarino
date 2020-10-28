import React from "react"
import { Link, graphql } from "gatsby"
import { useTrail, animated } from 'react-spring'
import SEO from '../components/seo'

const config = { mass: 1, tension: 4000, friction: 200 }

const Palabras = ({ data, location }) => {
  const { edges: posts } = data.allMdx
  const trail = useTrail(posts.length, {
    config,
    opacity: 1,
    delay: 150,
    from: { opacity: 0 }
  })
  return (
    <>
      <SEO title="Palabras" />
      <ul>
        {trail.map(({ ...rest}, index) => (
          <animated.li
            key={posts[index].node.id}
            style={{ ...rest }}
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
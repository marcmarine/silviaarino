import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import PropTypes from "prop-types"

const Posts = ({data, filter}) => {
  const { edges: posts } = data.allMdx
  return posts.filter(post => filter ? post.node.frontmatter.category === filter : post.node.frontmatter.category !== 'palabras' ).map( post => ( 
    <Link
      to={post.node.fields.slug}
      style={{ width: 400, position: 'absolute', top: `${Math.floor(Math.random() * 70) + 5}%`, left: `${Math.floor(Math.random() * 100) - 5}%`, transition: 'all 500ms' }}
    >
      {post.node.frontmatter.banner && (
        <Img
          sizes={post.node.frontmatter.banner.childImageSharp.sizes}
        />
      )}
      {post.node.frontmatter.banner ? null : post.node.frontmatter.title}
    </Link>
  ))
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(
          filter: { 
            fields: { sourceName: { eq: "posts" } } 
          }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                category
                banner {
                  childImageSharp {
                    sizes(maxWidth: 250) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <Posts data={data} {...props} />}
  />
)

Posts.propTypes = {
  filter: PropTypes.string
}

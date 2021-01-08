import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"

const Posts = ({data, filter}) => {
  const { edges: posts } = data.allMdx
  return (
    <div className="flex flex-col max-w-md">
      {posts.map( post => ( 
        <Link className="mt-1" to={post.node.fields.slug}>
          {post.node.frontmatter.title && post.node.frontmatter.title}
        </Link>
      ))}
      <Link className="mt-10" to="/bio">Bio</Link>
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(
          filter: { fields: { sourceName: { eq: "posts" } } }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
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

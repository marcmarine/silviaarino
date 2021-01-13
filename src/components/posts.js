import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"

const Posts = ({data, filter}) => {
  const { edges: posts } = data.allMdx
  return (
    <div className="flex flex-col max-w-md">
      {posts.filter(post =>  !/\//.test(post.node.frontmatter.title) && post.node.frontmatter.date !== null ? post : null).map( post => ( 
        <Link key={post.node.fields.slug} className="mt-1" to={post.node.fields.slug}>
          {post.node.frontmatter.title && post.node.frontmatter.title}
        </Link>
      ))}
      <Link to="/varios">Varios</Link>
      <Link className="mt-10" to="/poemas">Poemas</Link>
      <Link className="mt-1" to="/bio">Bio</Link>
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
                date
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

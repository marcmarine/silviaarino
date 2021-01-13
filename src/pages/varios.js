import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXWrapper } from '../components/mdx-provider'

const Varios = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <div>
      <h2 className="uppercase mb-10">Varios</h2>
      {posts.map(post => (
        <div className="pb-5 mb-20">
          <Link to={`/${post.node.slug}`}>
            <h3>{post.node.frontmatter.title}</h3>
          </Link>
          <MDXWrapper>
            <MDXRenderer>{post.node.body}</MDXRenderer>
          </MDXWrapper>
          <p>_</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/varios/"}},
      sort: {order: DESC, fields: frontmatter___date}
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          body
          slug
        }
      }
    }
  }
`
export default Varios
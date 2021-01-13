import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXWrapper } from './../components/mdx-provider'

const Poemas = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <div>
      <h2 className="uppercase mb-10">Poemas</h2>
      {posts.map(post => (
        <div className="pb-5 mb-20">
          <Link to={`/${post.node.slug}`}>
            <h3 className="mb-0">{post.node.frontmatter.title}</h3>
          </Link>
          <MDXWrapper>
            <MDXRenderer>{post.node.body}</MDXRenderer>
          </MDXWrapper>
        </div>
      ))}
      <p>_</p>
      <p>Continúo envolviendo lo innecesario,<br /> 
      pero mis palabras torcidas, mis jadeos,<br />
      no destapan el calen<br />dario.</p>
    </div>
  )
}

export const query = graphql`
  query {
    allMdx(filter: {fileAbsolutePath: {regex: "/poemas/"}}) {
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
export default Poemas
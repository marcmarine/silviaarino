import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import tw, { styled } from 'twin.macro'
import { Trail } from 'react-spring/renderprops'
import Img from 'gatsby-image'
import PropTypes from "prop-types"
import Masonry from 'react-masonry-component'

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

const Wrapper = styled(Masonry)`
  ${tw`max-w-6xl`}
`

const Posts = ({data, filter}) => {
  const { edges: posts } = data.allMdx
  return (
    <>
    <Wrapper
      className={'my-gallery-class'} // default ''
      elementType={'ul'} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      imagesLoadedOptions={imagesLoadedOptions} // default {}
    >
      <Trail 
        items={posts.filter(post => filter ? post.node.frontmatter.category === filter : post.node.frontmatter.category !== 'palabras' )} 
        keys={post => post.node.id}
        from={{opacity: '0', transform: 'scale(0.99)'}}
        to={{opacity: '1', transform: 'scale(1)'}}
      >
        {post => props => 
          <Link
            to={post.node.fields.slug}
            style={props}
          >
            {post.node.frontmatter.banner && (
              <Img
                sizes={post.node.frontmatter.banner.childImageSharp.sizes}
              />
            )}
            {post.node.frontmatter.banner ? null : post.node.frontmatter.title}
          </Link>
        }
      </Trail>
    </Wrapper>
    </>
  )
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

import React, { useEffect } from "react"
import { graphql } from "gatsby"
import tw, { styled } from 'twin.macro'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXWrapper } from './mdx-provider'

const Wrapper = styled.article`
  max-width: 90rem;
  main {
    ${tw`w-full lg:w-1/4`};
  }
  p {
    ${tw`mb-5`}
  }
  aside {
    ${tw`flex-1 lg:pt-12`};
  }
  hr {
    display: none;
    ~ p {
      margin: 0;
    }
  }
  .gatsby-resp-image-wrapper {
    ${tw`mt-10`};
    margin-left: 0 !important
  }
`

const PageTemplate = ({ data: { mdx }, location }) => {
  useEffect(() => {
    const article = document.getElementsByTagName("article")[0]
    const main = document.createElement('main')
    const aside = document.createElement('aside')
    article.appendChild(main)
    article.appendChild(aside)
    const content = Array.from(article.childNodes)
    const HR = el => el.tagName === "HR"
    content.forEach((el, index) => {
      if (index < content.findIndex(HR)) {
        main.appendChild(el)
      } else if (index < content.length - 2) {
        aside.appendChild(el)
      }
    })
  },[] )
  return (
    <Wrapper className="mx-auto block lg:flex lg:space-x-40">
      {mdx.frontmatter.title && <h1 className="font-medium mb-3 uppercase">{mdx.frontmatter.title}</h1>}
      {mdx.frontmatter.date && <h4 className="mb-8">{mdx.frontmatter.date.split('-', 1)}</h4>}
      <MDXWrapper>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXWrapper>
    </Wrapper>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id 
      frontmatter {
        title
        date
      }
      body
    }
  }
`


export default PageTemplate
import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXWrapper } from './mdx-provider'

const PageTemplate = ({ data: { mdx }, location }) => {
  useEffect(() => {
    console.log(mdx)
    if (mdx.frontmatter.date !== null) {
      const article = document.getElementsByTagName("article")[0]
      const main = document.createElement('main')
      const aside = document.createElement('aside')
      main.classList.add('w-full','lg:w-1/4')
      aside.classList.add('flex-1','lg:pt-12')
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
    }
  }, [mdx])
  return (
    <article className={`article mx-auto block leading-relaxed ${mdx.frontmatter.date && `lg:flex lg:space-x-40`}`}>
      {mdx.frontmatter.title && <h1 className="font-medium mb-2 uppercase">{mdx.frontmatter.title}</h1>}
      {mdx.frontmatter.date && <h4 className="mb-8">{mdx.frontmatter.date.split('-', 1)}</h4>}
      <MDXWrapper>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXWrapper>
    </article>
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
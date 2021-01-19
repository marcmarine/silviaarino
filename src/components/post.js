import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXWrapper } from './mdx-provider'
import SEO from './../components/seo'

const PageTemplate = ({ data: { mdx }, location }) => {
  useEffect(() => {
    if (!/poemas/.test(mdx.fields.relativeDirectory)) {
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
    <>
      <SEO title={
        /poemas/.test(mdx.fields.relativeDirectory) ? `Poema ${mdx.frontmatter.title}` 
        : 
        /varios/.test(mdx.fields.relativeDirectory) ? `Varios` 
        : 
        mdx.frontmatter.title} />
      <article className={`article mx-auto block leading-relaxed ${!/poemas/.test(mdx.fields.relativeDirectory) && `lg:flex lg:space-x-40`}`}>
        {mdx.frontmatter.title && <h1 className="font-bold mb-2 uppercase">{mdx.frontmatter.title}</h1>}
        {!/poemas/.test(mdx.fields.relativeDirectory) && <h4 className="mb-8">{mdx.frontmatter.date.split('-', 1)}</h4>}
        <MDXWrapper>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXWrapper>
      </article>
    </>
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
      fields {
        relativeDirectory
      }
    }
  }
`


export default PageTemplate
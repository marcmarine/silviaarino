import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Media from './media'

const GlobalScopeComponents = {
  img: Media,
}

export const MDXWrapper = ({ children }) => {
  return (
    <MDXProvider components={{ ...GlobalScopeComponents }}>
      {children}
    </MDXProvider>
  )
}